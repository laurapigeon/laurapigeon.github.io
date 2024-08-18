---
layout: content
title: Page List
background_image: kingdom.png
background_position: -12px 0px
list_page: true
categories: [list, debug]
---

{% assign top = 0 %}
{% for category in site.category_list %}
<p class="positionbox" style="--top: {{ top }}px; --left: 100px; --width: 100px; --text-align: center; --color: aquamarine;">
    -- {{ category }} --
</p>
{% assign top = top | plus: 12 %}
{% for page in site.pages %}
{% if page.list_page == true %}
{% for page_category in page.categories %}
{% if page_category == category %}
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
