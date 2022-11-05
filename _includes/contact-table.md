{%- if include.type == "board" -%}
  {%- assign col_header = "Position" -%}
{%- elsif include.type == "sections" -%}
  {%- assign col_header = "Section" -%}
{%- endif -%}

|   | {{ col_header }} | Name | Email |
| - | ---------------- | ---- | ----- |
{% for name in site.data.officers[include.type] -%}
  {%- assign member = site.data.people[name] -%}
  | ![{{ member.name }}]({% link {{ member.image_url }} %}){: style="min-width: 60px"} |
    {%- case include.type -%}
    {%- when "board" -%}
      {{ member.position }} | {{ member.name }} | <{{ member.email }}> |
    {%- when "sections" -%}
      {{ member.section }} | {{ member.name }} | <{{ member.email }}> |
    {%- endcase %}
{% endfor %}
