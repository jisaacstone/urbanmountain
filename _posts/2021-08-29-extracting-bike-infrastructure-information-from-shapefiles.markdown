---
layout: post
title:  "Opendata and Mountain View Bike Infrastructure"
date:   2021-08-25 13:20:13 -0700
categories: gis bikes
---

# How To Extract Bike Infrastructure Information From The Opendata Shapefiles

This is a technical post about how I got additional bicycle metadata into the centerlines dataset.

I used [qgis 3.20](https://www.qgis.org/en/site/) for the analysis.

## Datasets

I got the shapefiles here

[road centerline](https://data-mountainview.opendata.arcgis.com/datasets/road-centerline/explore?location=37.394338%2C-122.080887%2C13.91)

[existing bikeways](https://data-mountainview.opendata.arcgis.com/datasets/MountainView::street-bike-network/explore?layer=1&location=37.398050%2C-122.046100%2C12.86)

I imported the road centerline dataset, and marked it editable.

Then I imported the street bike network. The street bike network dataset is using a different projection from the centerlines data.
Distance measurements won't work if the projections are different, so I needed to export the features as a new layer using the project projection.

(right click layer -> Export -> Save Features As)

## Extraction

This assumes the centerlines layer is named "Centerlines", and the bicycle layer is named "Existing Bike Network"

Open the python console (Plugins -> Python Consol) and paste the following code in

{% highlight python %}


    def add_attributes(centerlines):
        centerlines.dataProvider().addAttributes([QgsField("bike_type", QVariant.String)])
        centerlines.dataProvider().addAttributes([QgsField("bike_class", QVariant.Int)])
        centerlines.updateFields()


    def nearest_bike_lane(feature, bike, tolerance=50):
        geom = feature.geometry()
        quarter = geom.length() / 4.0
        points = [
            geom.interpolate(quarter),
            geom.interpolate(quarter*2),
            geom.interpolate(quarter*3)
        ]
        ids = set()
        request = QgsFeatureRequest(geom.boundingBox())
        candidates = [f for f in bike.getFeatures(request)]
        if not candidates:
            return False
        for point in points:
            shortest = (tolorance, None)
            for bikefeat in candidates:
                line = point.shortestLine(bikefeat.geometry())
                if line.length() < shortest[0]:
                    shortest = (line.length(), line)
            if shortest[0] < tolorance:
                ids.add(bikefeat)
        if len(ids) == 1:
            return ids.pop()


    def update_bike_lanes(centerlines, bike, features):
        type_idx = centerlines.fields().indexOf('bike_type')
        class_idx = centerlines.fields().indexOf('bike_class')
        for feature in features:
            lane = nearest_bike_lane(feature, bike)
            if lane:
                print(lane)
                centerlines.changeAttributeValue(feature.id(), type_idx, lane['TYPE'])
                centerlines.changeAttributeValue(feature.id(), class_idx, lane['CLASS'])


    centerlines = QgsProject.instance().mapLayersByName('Centerlines')[0]
    bike = QgsProject.instance().mapLayersByName('Existing Bike Network')[0]
    # will add "bike_type" and "bike_class" attributes to all road centerline features
    add_attributes(centerlines)
    # will update the bike attributes of any centerline that has a bike lane withing 10 feet
    all_features = centerlines.getFeatures()
    update_bike_lanes(centerlines, bike, all_features)

{% endhighlight %}

After the code runs all roads should have `bike_class` and `bike_type` attributes.
For example the section of Castro St south of El Camino Real should have `bike_type="protected"` and `bike_class=4`

Most roads will have `NULL`

## How It Works

I initially tried using a `QgsSpatialIndex` to find nearest bike lane to a road centerline. However there was a problem.

The centerlines are short, with a different one for each block. The bike routs lines on the other hand often run long distances and cover multiple roads.
This confused the index, because it used rectangles and intersections to compute nearest feature. A bike lane running a long diagonal route would confuse the algorithm,
and since most of the city is built following the train tracks, most of the roads are diagonal. 

So instead I used the bounding rectangle of the centerline, queried for each bike route that intersected the rectangle, and checked each to see if it was along the rode.

For the road check, I took three points each 1/4 along the distance of the road, and checked each point to see if the shortest line between the road centerline and the bike route was within 50 feet.
If all three points had the same bike route within 50 feet I copied the CLASS and TYPE attributes from the bike feature to the centerline feature.

50 feet tolerance is a bit overzealous and some small road segments got inappropriately marked. It might be worthwhile to experiment with smaller tolerances. I chose 50 feet because larger streets, like El Camino Real, can be 100 feet wide.

## What Is It Good For?

It can be useful if you want to query for example features where `SPEEDLIMIT > 35 and BIKE_CLASS=2`, to show places where maybe you would feel uncomfortable biking despite the presence of bike lanes because of the high vehicle speed.

(It would be lovely to have the average and 85 percentile speeds as well, since speed limits are so often ignored)
