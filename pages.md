---
layout: content
title: Page List
background_image: kingdom.png
background_position: -12px 0px
list_page: true
tags: [list, debug]
---

{% assign top = 0 %}
{% for tag in site.tag_list %}
<p class="free" style="--top: {{ top }}px; --left: 100px; --width: 100px; --text-align: center; --color: aquamarine;">
    -- {{ tag }} --
</p>
{% assign top = top | plus: 12 %}
{% for page in site.pages %}
{% if page.list_page == true %}
{% for page_tag in page.tags %}
{% if page_tag == tag %}
{% assign pageSlug = page.url | split: '.' | first %}
<p class="free" style="--top: {{ top }}px; --left: 100px; --width: 100px; --text-align: center;" data-url="{{ pageSlug }}">
    {{ pageSlug }}
</p>
{% assign top = top | plus: 12 %}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
{% endfor %}
<p class="free" style="--top: {{ top }}px; --left: 100px; --width: 100px; --text-align: center; --color: aquamarine;">
    -- other --
</p>
{% assign top = top | plus: 12 %}
{% for page in site.pages %}
{% if page.list_page == true %}
{% assign is_other = true %}
{% for tag in site.tag_list %}
{% if page.tags contains tag %}
{% assign is_other = false %}
{% endif %}
{% endfor  %}
{% if is_other %}
{% assign pageSlug = page.url | split: '.' | first %}
<p class="free" style="--top: {{ top }}px; --left: 100px; --width: 100px; --text-align: center;" data-url="{{ pageSlug }}">
    {{ pageSlug }}
</p>
{% assign top = top | plus: 12 %}
{% endif %}
{% endif %}
{% endfor %}
