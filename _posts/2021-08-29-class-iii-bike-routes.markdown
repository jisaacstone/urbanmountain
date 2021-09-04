---
layout: post
title:  "Safety, Comfort and Class III Bike Paths"
date:   2021-08-25 13:20:13 -0700
categories: bikes
---

# Do The Class III Bike Routes in Mountain View Deserve the Name?

|![bike routes]({{ site.baseurl }}/assets/images/bikeroutes1.png "existing bike routes")|
|:--:|
|*Class III Bike Routes (green) connect bike paths (purple) and bike lanes (teal)*|


## What is a "Class III Bike Route"?

Class III Bike Paths are defined in Mountain View's [2015 Bike Plan](https://altago.com/wp-content/uploads/Mountain-View-Bicycle-Transportation-Plan-Update.pdf):

> Class III bikeways are signed bike routes where bicyclists share a travel lane with motorists.
> Class III bike routes are appropriate for low-volume streets with slow travel speeds, especially those on which motorist volumes are low enough that passing maneuvers can use the full street width, on roadways with bicycle demand but without adequate space for Class II striped bike lanes, and as “gap fillers” where there are short breaks in Class II lanes due to right-of-way constraints.

The CA [Highway Design Manual](file:///home/larpy/Downloads/chp1000-a11y.pdf) further stipulates that _some_ of these qualities should also apply:

* They provide for through and direct travel in bicycle-demand corridors.
* Connect discontinuous segments of bike lanes.
* They provide traffic actuated signals for bicycles and appropriate assignment of right of way at intersections to give greater priority to bicyclists, as compared with alternative streets.
* Street parking has been removed or restricted in areas of critical width to provide improved safety.
* Surface imperfections or irregularities have been corrected (e.g., utility covers adjusted to grade, potholes filled, etc.).
* Maintenance of the route will be at a higher standard than that of other comparable streets (e.g., more frequent street sweeping).

However, none of these are required. As far as I can tell the only requirements is that is connects to other bike infrastructure.

And you put up a sign

![put up a sign]({{ site.baseurl }}/assets/images/class_iii_cross_section.png "bikeway classification")

## How Fast Is Safe?

A 2007 analyses of vehicle-bicyclist collision data[^1] notes

> ...as estimated vehicle speed prior to impact increases beyond 32.2 km/h (20 mph) there is a threshold effect, which greatly increases the probability of injury or fatality in an accident
> This supports a 30 km/h speed limit inside residential neighborhoods with bicycle traffic

In a study of vehicle-pedestrian collisions SWOV[^2] reports a similar correlation between speed and fatality, and also notes that the overall likelihood of a crash also increases as speed increases.

This makes sense, and correlates with the 2007 paper, as many of the accidents involved vehicles overtaking cyclists. At lower speeds there will be fewer overtaking events, and thus fewer accidents overall.

NACTO [recommends](https://nacto.org/publication/urban-bikeway-design-guide/bicycle-boulevards/speed-management/) a maximum posted speed limit of 25mph on a bicycle boulevard. 

What is the posted speed limit of the class III bike routes in Mountain View?[^3]

|![route speed map]({{ site.baseurl }}/assets/images/bikeroutesfast.png "fast bike routes")|
|:--:|
|*The yellow sections have a posted limit of 30mph, and the red have a posted limit of 35mph*|

No bike route has a posted speed limit of below 25mph. The majority are on streets with a posted limit of 25mph, witch matches NACTO's recommended maximum. But a not insignificant number of roads have a posted limit above 25mph.
The worst offender is the section connecting Evelyn Ave bike lanes with Shoreline north of Central.

## Feeling Safe - Level of Traffic Stress

Level of Traffic Stress(LOTS or LOS) is a new measurement to quantify how cyclist feel biking along a particular road. Different places have different definitions, but usually range from 1(low) to 4(high) stress conditions.
I in particular like the methodology in [this report](https://montgomeryplanning.org/wp-content/uploads/2017/11/Appendix-D.pdf) and would love to see the same analysis applied to Mountain View's roads.

The majority of people will only bike under LOTS 1 and 2, and many will only bike if the whole route is LOTS 1. Having high-stress sections in an otherwise low-stress route will block many bikers, causing the whole network to be underutilized.

One way to think of it is that LOTS 1 conditions represent roads you would feel safe letting your child bike along.

Here is a chart I stole from [this excellent overview](https://storymaps.arcgis.com/stories/283d772a8c654ef4afd52536456ac090)

|![lots chart]({{ site.baseurl }}/assets/images/lots_chart.png "Level of Traffic Stress Chart")|
|:--:|
|*Factors contributing to Level of Traffic Stress(LOTS)*|

This chart has not only speed but number of lanes as stressful. An example would be the section of Miramonte between El Camino and Rincon

![Miramonte Ave]({{ site.baseurl }}/assets/images/miramonte_truck.png "Miramonte Ave")

This is a high-volume street with four lanes of traffic. Bicycling here feels dangerous, despite the posted speed limit of 25mph. 

## Unsafe, High-Stress Bike Routes

|![bike gaps]({{ site.baseurl }}/assets/images/bike_gaps.png "Gaps in the Bike Netowork")|
|:--:|
|*Bike routes with high-speed and high-stress sections removed*|

A superficial analysis of the bike routes in Mountain View reveals several significant gaps. Routes into and out of downtown seem particularly affected.

## What To Do About It?

* Dangerous and stressful sections of the bike network should be removed from the map until they can be made safe and low stress.

* Mountain View should refine the definition of class III bike paths to include a maximum speed and LOTS.

* Lowering posted speed limit may not be enough, since people speed. Traffic calming is effective. We should do more of that.

* Connections along large busy roads such as Miramonte should be class IV protected bike lanes.

## Er, I'm Not On City Council, What Can I Do About It?

* Read up on the current city [transportation projects](https://www.mountainview.gov/depts/pw/transport/transportation_planning/default.asp). There are a lot of good ones! Show the city your enthusiasm for safe and low-stress streets.

* The city has recently hired an active transportation planner. This is a person whose only job is to improve bicycle and pedestrian transportation in Mountain View. It is the first time the city has had someone in this position.
  I heard him talk last week. I am optimistic that the city's investment in safe and stress-free cycling will continue. You can support him and his work.

* Join [B/PAC](https://www.mountainview.gov/council/bcc/bikeped.asp)

----


### A note about road width

The recommendation for class III bike routes is to have wide roads with little parking, so cars can pass with plenty of space to spare.
This recommendation makes sense. However wide roads with little parking are know to encourage speeding.

According to the 2007 Study[^1] vehicle-bicycle accidents involving a speeding vehicle were 3 times more likely to result in a fatality. I would love to see more research on this.
I was not able to find any data baking up the recommendation, other than the intuitive "this makes sense" kind.

It might be that narrow streets are in fact safer than wide ones. It certainly warrants research.


----

[^1]: Kim, J.-K., Kim, S., Ulfarsson, G. F., & Porrello, L. A. (2007). Bicyclist injury severities in bicycle–motor vehicle accidents. Accident Analysis & Prevention, 39(2), 238–251. doi:10.1016/j.aap.2006.07.002
[^2]: [SWOV Fact Sheet](https://www.littlerock.gov/media/2484/the-relation-between-speed-and-crashes.pdf)
[^3]: I post about how I got this data [here]({{ site.baseurl }}/gis/bikes/2021/08/25/extracting-bike-infrastructure-information-from-shapefiles.html)
