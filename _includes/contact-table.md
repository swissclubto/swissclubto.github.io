{%- if include.type == "board" -%}
  {%- assign col_header = "Position" -%}
  {%- assign property = "is_board" -%}
  {%- assign sort_by = "order" -%}
{%- elsif include.type == "sections" -%}
  {%- assign col_header = "Section" -%}
  {%- assign property = "is_section" -%}
  {%- assign sort_by = "section" -%}
{%- endif -%}

|   | {{ col_header }} | Name | Email |
| - | ---------------- | ---- | ----- |
{%- assign officers = site.officers | where: property, true | sort: sort_by -%}
{% for member in officers %}
  | ![{{ member.name }}]({{ member.image_url }}){: style="min-width: 60px"} |
    {%- case include.type -%}
    {%- when "board" -%}
      {{- member.position }} | {{ member.name }} | <{{ member.email }}> |
    {%- when "sections" -%}
      {{- member.section }} | {{ member.name }} | <{{ member.email }}> |
    {%- endcase -%}
{%- endfor %}
