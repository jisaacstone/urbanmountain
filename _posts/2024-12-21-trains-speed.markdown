---
layout: post
title:  "More Trains or Faster Trains?"
date:   2024-12-08 11:20:13 -0700
image:  "assets/lrt/speed_map.png"
extrajs: "lrt/chart.js"
extrastyle: "lrt/chart.css"
categories: transit
---

Is it better for transit to be fast or frequent?

The answer depends on the length of the trip.
And which trips we optimize for is informed by who we are building the transit system for.

# Toy Model

I have written a toy model to illustrate.
This model calculates the total trip time using top speed, acceleration, dwell time, and frequency.

The baseline is taken from the VTA orange line.
Use the sliders to see the effect of changing top speed or frequency.

---
&nbsp;
{: #frequency }

---

The orange line runs in a street median for most of it's length. So it's top speed is 35mph.
The stops are about a km apart. The schedule has it at around 2 minutes between stops on off hours, and a bit longer during peak.
I could not find data on dwell time or acceleration for the VTA light rail.
I have assumed 20 seconds dwell and 1.2 meters/second² acceleration, based off of BART numbers.

{% include image.html
  url="lrt/speed_map.png"
  alt="map of top speed for different segments of the VTA light rail"
  source_url="https://www.vta.org/sites/default/files/2022-03/VTA%20Next%20Gen%20Executive%20Summary%20Report_FInal_1.pdf"
  caption="This is thee highest resolution version I could find"
%}


The model does not take into account the light rail getting stuck at stop lights or the very slow sharp turns it sometimes makes.

But it is good enough to illustrate the effects of changing the speed or frequency.
If you are interested in actual speeds you can find those at [calitp](https://embeddable-maps.calitp.org/?state=eyJuYW1lIjogIm51bGwiLCAibGF5ZXJzIjogW3sibmFtZSI6ICJENCBTdGF0ZSBIaWdod2F5IE5ldHdvcmsiLCAidXJsIjogImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9jYWxpdHAtbWFwLXRpbGVzL3NlZ21lbnRfc3BlZWRzXzIwMjQtMTItMTEvNF9TSE4uZ2VvanNvbi5neiIsICJwcm9wZXJ0aWVzIjogeyJzdHJva2VkIjogZmFsc2UsICJoaWdobGlnaHRfc2F0dXJhdGlvbl9tdWx0aXBsaWVyIjogMC41fSwgInR5cGUiOiAic3RhdGVfaGlnaHdheV9uZXR3b3JrIn0sIHsibmFtZSI6ICJTYW50YSBDbGFyYSBWYWxsZXkgVHJhbnNwb3J0YXRpb24gQXV0aG9yaXR5IERlY2VtYmVyIDExIDIwMjQgKFdlZG5lc2RheSkgQU0gUGVhayIsICJ1cmwiOiAiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2NhbGl0cC1tYXAtdGlsZXMvc2VnbWVudF9zcGVlZHNfMjAyNC0xMi0xMS8yMDI0LTEyLTExX3JlY0M1Q1Q5NUV1Zm1RQ1hyX25ld19zcGVlZG1hcF9BTSBQZWFrLmdlb2pzb24uZ3oiLCAicHJvcGVydGllcyI6IHsic3Ryb2tlZCI6IGZhbHNlLCAiaGlnaGxpZ2h0X3NhdHVyYXRpb25fbXVsdGlwbGllciI6IDAuNSwgInRvb2x0aXBfc3BlZWRfa2V5IjogInAyMF9tcGgifSwgInR5cGUiOiAibmV3X3NwZWVkbWFwIn1dLCAibGF0X2xvbiI6IFszNy4zMTk4NDgzNjg4MjkxMywgLTEyMS45MTg2NDgyMDA0OTIyM10sICJ6b29tIjogMTMsICJsZWdlbmRfdXJsIjogImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9jYWxpdHAtbWFwLXRpbGVzL3NwZWVkc19sZWdlbmRfY29sb3JfYWNjZXNzLnN2ZyJ9)

For trips of fewer than 12 stops doubling the frequency (8 trains an hour instead of four) has a bigger effect on total trip time than doubling the top speed.
We may also want to factor for the fact that people perceive time [1.2x as long when waiting for transit](https://conservancy.umn.edu/server/api/core/bitstreams/8c4f1ae0-d334-48d6-a515-765b30b3eeb1/content#:~:text=These%20studies%20found%20that%20a,min%20of%20actual%20wait%20time).

# Thoughts

In [Human Transit](https://humantransit.org/book) Jarrett Walker points out that people in the USA are largely unfamiliar with transit, and so tend to judge transit projects in comparison to the mode of travel they are familiar with: the personal automobile.
This creates some wrong intuitions into the trade offs involved.

A second trend is a hyperfocus on commute trips and "reducing congestion". This manifests in a focus on longer trips -- people travel further for work than for shopping, dining, haircuts, etc. On average.

In discussions about the VTA, slow speed is often brought up as a reason for it's low ridership.
Especially through downtown, where the top speed is 20mph.
Frequency is rarely mentioned.

This [report](https://nap.nationalacademies.org/read/23433/chapter/2#4) shows an average ridership response of 0.5. That is, a 50% increase in frequency will on average result in a 25% increase in ridership.

Of course this is an artificial dichotomy. There is no reason transit cannot be both fast and frequent.
This is especially true in the way transit is often funded, with operations (running the transit) having a different funding source than capital improvements (building infrastructure and equipment)

There is also more to making a train "fast" than top speed. "Transit Signal Priority" for example can ensure the bus or train always has a green light at intersections.
Level boarding can shorten dwell times. Electrification and lighter vehicles improves acceleration. And so on. I present here only an illustration of the relative importance of "top speed".

# Bonus

Here is the model described above, but with all the sliders so you can change parameters and see their effect.
Average service levels for Caltrain (local from SJ to SF), BART (orange line) and VTA (orange line) are given as a benchmark.

---
&nbsp;
{: #playground }

---
