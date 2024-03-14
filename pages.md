---
layout: content
title: Page List
background_image: kingdom.png
background_position: -12px 0px
list_page: true
categories: [list, debug]
---

{% assign top = 0 %}
{% for cat in site.category_list %}
<p class="positionbox" style="--top: {{ top }}px; --left: 100px; --width: 100px; --text-align: center; --color: aquamarine;">
    {{ cat }}
</p>
{% assign top = top | plus: 12 %}
{% for page in site.pages %}
{% if page.list_page == true %}
{% for pc in page.categories %}
{% if pc == cat %}
{% assign pageSlug = page.url | split: '.' | first %}
<p class="positionbox" style="--top: {{ top }}px; --left: 100px; --width: 100px; --text-align: center;" data-url="{{ pageSlug }}">
    {{ pageSlug }}
</p>
{% assign top = top | plus: 12 %}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
{% endfor %}
