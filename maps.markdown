---
layout: page
title: Making Maps
permalink: /maps/
---

> Sometimes, people ask me how I make my maps

## GIS Software

Geographic Information Systems (GIS) software is good for making maps.

I make maps using [qgis](https://qgis.org/en/site/), a free and open-source gis program.
It is a bit clunky and sometimes crashes, but it gets the job done.
And recent releases seem much more stable.

For getting started with QGIS, there are many tutorials [here](https://www.qgistutorials.com/en/index.html).

Most professionals use [ArcGIS](https://www.esri.com/en-us/arcgis/about-arcgis/overview).
Fortunately there are standard file formats that are readable by most GIS software, such as `shapefile` or `kml`.
So even though entities host their data using ArcGIS, you can still use qgis to make maps.

## Getting Data

Santa Clara County has a lot of freely available data [here](https://gis.sccgov.org/available-gis-map-data),
and Mountain View has theirs [here](https://data-mountainview.opendata.arcgis.com/search?collection=Dataset).

Download either kml or shapefile, and you can then [add a new vector layer](https://docs.qgis.org/3.28/en/docs/user_manual/managing_data_source/create_layers.html)

You can also get a lot of data from the US Census.
You can create and download tabular data [here](https://data.census.gov/).
Then you will need a shapefile from [here](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html).
Make sure the year of your shapefile corresponds to they year of your data.

Pull in a shapefile as a vector layer, and then import that data as a [delimited text layer](https://docs.qgis.org/3.28/en/docs/user_manual/managing_data_source/opening_data.html#importing-a-delimited-text-file).
Then you use the [Joins tab](https://docs.qgis.org/3.28/en/docs/user_manual/working_with_vector/vector_properties.html#joins-properties) to relate both datasets.
