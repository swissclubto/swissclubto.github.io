---
title: Men's Section
permalink: /sections/men/
published: false
---

## Section head

{%- assign head = site.data.people | find: "section", "Men's Section" %}
![{{ head.name }}]({% link {{ head.image_url }} %}){: .align-right}
{% include event-contact.html contact=head first=true %}

## Weekly Kaffi Klatsch

Come and join us every Monday morning from about 10.00 am until noon for our
Kaffi Klatsch outside the Lindt Chocolate Store, at the <i class="fas
fa-map-marked-alt"></i> <a
href="https://www.google.com/maps/search/?api=1&query={{ "2901 Bayview Ave Unit
#154, North York" | cgi_escape }}">Bayview Village Shopping Centre</a>.
