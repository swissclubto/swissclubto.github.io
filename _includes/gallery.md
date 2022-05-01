{% assign prefix = page.path | split: "/" | last | remove: ".md" %}

{% for image in page.images %}
  {% assign num = forloop.index | prepend: "0" | slice: -2, 2 %}
  {% capture img_path %}/assets/img/{{ prefix }}-{{ num }}.jpg{% endcapture %}
  [![{{ image }}]({{ img_path }})]({{ img_path }})
{% endfor %}
