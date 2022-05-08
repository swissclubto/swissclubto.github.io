<style>
ul.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    margin-left: 0;
}

.gallery li {
    flex-grow: 1;
    height: 160px;
    padding: 4px;
}

.gallery li img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    transition: transform .3s;
    vertical-align: bottom;
}

.gallery li img:hover {
    transform: scale(1.05, 1.05);
}
</style>

{%- assign prefix = page.path | split: "/" | last | remove: ".md" -%}

{% for image in page.images -%}
  {%- assign num = forloop.index | prepend: "0" | slice: -2, 2 -%}
  {%- capture img_path -%}/assets/img/{{ prefix }}-{{ num }}.jpg{%- endcapture -%}
  - [![{{ image }}]({{ img_path }})]({{ img_path }})
{% endfor -%}
{: .gallery}
