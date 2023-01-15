---
title: Five-Pin Bowling
permalink: /sections/bowling/
author: simone
---

The bowling section has been part of the Swiss Club since the very beginning in
1918!

## Monthly bowling

Feeling like doing something fun during the cold winter months? Join us once a
month on Sundays at 3 pm at the {% include maps.html addr="Parkway Bowl,
Scarborough" description="Parkway Bowling Alley" %} for three games and
optional dinner afterwards at a nearby restaurant.

The price for bowling is \$25, plus shoe rental.

We play on the following dates:

{%- assign today = "now" | date: "%F" | to_time -%}
{%- assign events = site.events
  | where_exp: "item", "item.date >= today and
    item.title contains 'Bowling' or item.title contains 'bowling'" %}

| Date | Event |
| ---: | ----- |
{%- for e in events %}
| {{ e.date | date: "%B %e, %Y" }} | [{{ e.title }}]({{ e.url | relative_url }}) |
{%- endfor %}

We are a family friendly group, our youngest player is six, and there is no age
limit.

{% include figure image_path="/assets/images/bowling-section.jpg"
caption="Bowling session November 2022" %}
