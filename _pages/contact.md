---
title: Contact
permalink: /contact/
classes: wide
---

## Address

{{ site.pobox_address }}

## Board members

|   | Position | Name | Email |
| - | -------- | ---- | ----- |
{%- assign board = site.officers | where: 'is_board', true | sort: 'order' -%}
{% for member in board %}
  | ![{{ member.name }}]({{ member.image_url }}){: style="min-width: 60px"} |
    {{- member.position }} | {{ member.name }} | <{{ member.email }}> |
{%- endfor %}

## Section heads

|   | Section | Name | Email |
| - | ------- | ---- | ----- |
{%- assign section_heads = site.officers | where: 'is_section', true | sort: 'section' -%}
{% for head in section_heads %}
  | ![{{ head.name }}]({{ head.image_url }}){: style="min-width: 60px"} |
    {{- head.section }} | {{ head.name }} | <{{ head.email }}> |
{%- endfor %}
