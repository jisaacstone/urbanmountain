---
layout: post
title:  "Where To Park Your RV In Mountain View"
date:   2021-08-25 13:20:13 -0700
categories: parking
---

## Background

Back in 2020 residents of Mountain View voted in favor of [Measure C](https://www.mountainview.gov/depts/pw/transport/narrow_streets.asp)

> The city ordinance restricts the parking of oversized vehicles which exceed 22 feet in length, or 7 feet in width, or 7 feet in height, including boats, large trucks, and recreational vehicles (RVs), on narrow streets to address traffic safety concerns

The measure has so far not been enforced. Before the city can enforce parking restrictions it must first put up signs. But sign installation has now begun, and we can expect enforcement to also begin soon.

A narrow street as defined by Measure C is any street less that 40 feet wide. This covers 84% of the streets in Mountain View. The city has provided [a map](https://www.mountainview.gov/civicax/filebank/blobdload.aspx?BlobID=35613) with all the narrow streets highlighted.

However, to decide where you _can_ park your RV, you need more information.

- Some streets have time limits or other parking restrictions. Especially near downtown.
- Some streets have no parking available. This includes almost all streets north of the 101.
- The same restriction of oversized vehicles also applies to any street with bike lanes. This excludes nearly all the main arterial roads.

So I decided to create a map with positive parking information.

## Sources

For parking restrictions and bike lane information I used shapefiles from Mountain View's [open data portal](https://data-mountainview.opendata.arcgis.com/)

### Bike Lanes

![bike lanes map]({{ site.baseurl }}/assets/images/bikelanes.png "Map of bike lanes")

Bike lanes are mostly on larger streets. About half the areas that were over 40 feet wide also had bike lanes.

### Parking Signs

I selected a subset of all signs that had the work "parking" in them, and then categorized and overlayed on my map.

![restricted parking map]({{ site.baseurl }}/assets/images/nopark.png "Map of restricted parking signs")
* Red - No parking any time
* Purple - No parking during specific hours
* Teal - No parking specific days
* Blue - Limited time parking (30 minutes - 2 hours)
* Yellow - Loading Zone

Parking restrictions had the greatest effect in the area between Old Middlefield and the 101.
Nearly all the street there are over 40 feet, but they all have parking restrictions.

### No Parking and No Sign

Many of the remaing streets had implicit no parking, as all of the roadway was used for travel lanes.
This includes the only section of Miramonte without bike lanes, and nearly all streets on the Google campus.

Some of these I knew about already, and others I used google street view to doublecheck.

## The Map

Finally I was able to compile a collection of street sections where parking an RV for over 24 hours will be allowed.

![map]({{ site.baseurl }}/assets/images/canpark.png)

The yellow highlighted bits are the places where you freely to park your RV. They total about 3% of all roads.

## Notes

El Camino Real is not included. I believe it would be allowed currently, but the city [plans](https://www.mercurynews.com/2019/10/01/mountain-view-oks-81-million-plan-to-add-bike-lanes-crosswalks-to-el-camino-real/)
to remove all parking along El Camino and build bike lanes.

California street west of downtown is also viable, so long as you are willing to move your RV from one side of the street to the other twice a week.

Castro St south of El Camino has bike lanes, but they are [Class IV Seperated Bike Lanes](https://dot.ca.gov/-/media/dot-media/programs/local-assistance/documents/bike/2018/draft-dib-89-01-20180130.pdf)
and the [ordinance](https://library.municode.com/ca/mountain_view/codes/code_of_ordinances?nodeId=PTIITHCO_CH19MOVETR_ARTVIIISTSTPA_DIV3STSTPAPRSPPL_S19.79.3PAOVVECESTADCLIIBIPR)
only applies to class II bike lanes. However the spaces along that section of Castro are explicitly demarcated and so longer RV's probably will not fit.

----

Update 8-27

- Added sections of Moffett Blvd to map
- Fixed typo in map description
- Discussion on [reddit](https://old.reddit.com/r/mountainview/comments/pcrxlz/where_to_park_your_rv_in_mountain_view/)

----

Update 8-28

- Removed Nita Ave area - no street parking on those roads
- Removed Bernardo Ave - no overnight parking
- Removed Mt Vernon Ct - is considered "narrow" by the city
- Added Began Ave
- Added a note on Castro St
