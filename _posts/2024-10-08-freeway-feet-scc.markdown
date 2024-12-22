---
layout: post
title:  "Which Santa Clara City Has The Most Freeways?"
date:   2024-10-08 11:20:13 -0700
image:  "assets/images/freeways_scc.png"
categories: transportation
---

I have often thought my city of Mountain View is overburdened with freeway exits.
The city has three freeways, each of which has an interchange approximately every quarter mile.
The California [Highway Design Manual](https://dot.ca.gov/programs/design/manual-highway-design-manual-hdm)
recommends an interchange at most every half mile in urban areas.

This overabundance of traffic infrastructure not only takes up a lot of valuable land and emits tire an break particulate matter across the city's neighborhoods, but it also decreases the functionality of the freeways themselves.
Every freeway entrance and exit [contributes to congestion](https://link.springer.com/chapter/10.1007/978-981-97-3682-9_55)

Especially when the ramps are too short, like at [Charleston](https://www.jisaacstone.com/urbanism/charleston/charleston.html)

# Gathering Data

I downloaded the Santa Clara County [road centerline dataset](https://data.sccgov.org/Transportation/RoadCenterLine/dq3c-eire).
Then I filtered out only those whose `roadclass` was `Ramp` or `Freeway`. Finally I removed all ramps that were not joined to a freeway (ramps for expressways, mostly)

{% include image.html
  url="images/freeways_scc.png"
  alt="A map of freeways and ramps in Santa Clara County"
  caption="Screenshot of QGIS - ramps and freeways colored by jurisdiction"
%}

I eventually realized that untangling the mess to determine a specific discreet count of freeway entrances and exits per jurisdiction would not work.
Too many edge cases. There was no way to automate it, and I wasn't about to do the calculation by hand.

What I realized I could do was calculate the number of linear feet of freeway and ramp in each city.
This would approximate how much real estate was dedicated to freeway infrastructure.

# Results

|City|Square Miles|Linear Feet of Freeway|Linear Feet Per Square Mile|
|-----|-----|-----|-----|
|MOUNTAIN VIEW|12.19|1045642.30|85711.52|
|MILPITAS|13.54|908039.05|67021.48|
|CAMPBELL|6.09|279426.06|45848.25|
|LOS GATOS|11.65|484091.61|41526.51|
|CUPERTINO|11.25|463416.72|41158.96|
|SAN JOSE|180.70|6638120.55|36735.23|
|SUNNYVALE|22.89|812001.91|35471.60|
|LOS ALTOS HILLS|9.07|268831.91|29616.14|
|MORGAN HILL|12.90|310636.90|24072.12|
|GILROY|16.55|340628.54|20576.78|
|SANTA CLARA|18.18|250340.06|13762.90|
|SARATOGA|12.78|130633.59|10221.37|
|PALO ALTO|25.96|192891.25|7430.01|
|LOS ALTOS|6.52|31410.47|4816.10|

Suspicions confirmed, Mountain View indeed has the most land devoted to freeway of any city in the county.
