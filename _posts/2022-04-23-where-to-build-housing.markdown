---
layout: post
title:  "Where should we build housing in Mountain View?"
date:   2022-04-23 09:20:13 -0700
image: "assets/houscore/housingscore2.png"
categories: housing
---

Mountain View needs to build housing.

Or, if you prefer, more housing needs to be built in Mountain View.

I will assume you agree on this premise. I want to focus on the follow up question.

# Where Should Housing Be Built?

This will be my opinion. I will discuss my principles, metrics, and weights.
Then I identify areas based on the data available.

## Principles

* Public land should not be used for housing

Specifically I mean schools and parks.
There are some examples of redeveloping schools and other public buildings into mixed-use sites, but I don't see much benefit at this time.

* People should not be kicked out of their homes

Mountain View has many good new tenant protection laws.
But it is still preferable to build without destroying existing homes.
No one's life is disrupted, and the net gain in housing is higher if no housing is lost in the first place.

* More housing should be built near services

What I mean here is people should live near places. Schools, shops, transit and so on.
This is good for people, good for the planet and good for the city.
Additionally it reduces the need to build parking, which reduces the cost of housing and increases the amount of housing that can be built.

## Metrics

### Distance to School

![schoolscore]({{ site.baseurl }}/assets/houscore/schoolscore.png)

This is a simple point-distance calculation. It leaves a lot to be desired.

* It does not distinguish between school types. A site near a elementary and middle school is better than a site that is close to two elementary schools.
* It only calculates geographic distance. Walking/biking distance is more useful. Anyone who knows a gis plugin that can calculate this, please let me know.

But it is good enough for now.

### Transit Service

![transitscore]({{ site.baseurl }}/assets/houscore/transitscore.png)

This is a combo of two measures

1. The number of distinct transit lines
2. The total ridership

Each calculated for quarter and half mile distances.
Each measure is given equal weight, and transit within a quarter mile is given triple weight compared to transit within a half mile.

Some problems with this metric

* I would like to have used route frequency in the calculation, but I didn't have easy access to those numbers
* Same problem with calculating geographic distance instead of walking distance.

### Walkability

![walkscore]({{ site.baseurl }}/assets/houscore/walkscore2.png)

This is just using data from [walkscore](https://www.walkscore.com/)

> Walk Score measures the walkability of any address using a patented system. For each address, Walk Score analyzes hundreds of walking routes to nearby amenities. Points are awarded based on the distance to amenities in each category. Amenities within a 5 minute walk (.25 miles) are given maximum points. A decay function is used to give points to more distant amenities, with no points given after a 30 minute walk.

> Walk Score also measures pedestrian friendliness by analyzing population density and road metrics such as block length and intersection density. Data sources include Google, Factual, Great Schools, Open Street Map, the U.S. Census, Localeze, and places added by the Walk Score user community.

Some small problems here

* Taking existing population density into account might undervalue high opportunity areas.
* The actual calculation is opaque, meaning I don't know all the metrics or how each is calculated.

### Displacement

![displacescore]({{ site.baseurl }}/assets/houscore/displacescore.png)

This is simply a function of the number of rental units per hectare in each area.

There is an assumption here that home owners cannot be displaced. No one forces you to sell your home.

I don't know how this works for Condos. Condo Law is complicated.
For mobile home parks usually the park can kick you out even if you own the home. But I believe the city does have protections against it happening in MV.

## Weighted Result

![housingscore]({{ site.baseurl }}/assets/houscore/housingscore2.png)

For the final map I weighted the above scores.

* Displacement 6x
* Walkability 4x
* Transit 2x
* School Distance 1x

Displacement was highest because losing a home is a big impact. There is also little that the city can do to mitigate.
Walkability is also very important. But the city can do things to make areas more walkable.
Transit and Schools can also be adjusted for new populations, but also I felt less confident in the quality of this data. So it is weighted less.

Overall the results make sense to me.

### Downtown

![Downtown]({{ site.baseurl }}/assets/houscore/houscore_downtown.png)

Downtown is the clear best place to build housing in Mountain View.
Most of the area is already zoned high density residential (R3) or Mixed use (Precise Plans).
However there are still areas zoned only for low-density detached homes.

Existing precise plans should be expanded. Downtown should extend from Shoreline to Bush at least, and also a few block north of Central Expressway.
Everywhere within a half mile walk of the transit center should be built up.

Medium density housing should be allowed between Mariposa and Calderon.

### Monta Loma

![MontaLoma]({{ site.baseurl }}/assets/houscore/houscore_montaloma.png)

In the [catrogram]({{ site.baseurl }}/density/2022/03/22/cartogram.html) I made Monta Loma shrank. It is the largest area of exclusive single family housing north of El Camino.
The transit access and walkability are both much lower than downtown, but still above average for the city.

Monta Loma is a beautiful neighborhood full of [Eichler](https://en.wikipedia.org/wiki/Joseph_Eichler) houses.
Monta Loma also has low density and high home ownership.
While transit access and walkability are lower than downtown, the neighborhood is still relatively well connected.

With SB9, all lots in the neighborhood could potentially be redeveloped for up to 4 units.
While there is no reason to put up ten story buildings here, knocking over an Eichler just to build 4 units is a waste.
Up to 10 units should be allowed on a lot.

Many current residents of Monta Loma point out that there are few parks in the area.
I suggest a larger park fee for any new building in the neighborhood, regardless of size.
And the city be required to use the funds to build a new public park within the Monta Loma neighborhood.

Additionally the city should work with the residents to create a form-based code to ensure the area keeps a distinct character.

### South Of ECR

![Cuesta]({{ site.baseurl }}/assets/houscore/houscore_cuesta.png)

As you go south from El Camino walkability and transit access decline.
But there is still a lot of potential.

Medium density development should be allowed within a half mile of ECR.

The area north of Barara has good scores as well.
I recommend form-based codes with community input.
With elementary and middle schools, there is a lot of potential.
Safe, low traffic and pedestrian-priority streets and bicycle paths can create livable density.
Many other cities have already done it. We can too
