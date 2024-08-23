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
\-\- {{ tag }} \-\-
{: class="center" style="--color: aquamarine;" }
{% assign top = top | plus: 12 %}
{% for page in site.pages %}
{% if page.list_page == true %}
{% for page_tag in page.tags %}
{% if page_tag == tag %}
{% assign pageSlug = page.url | split: '.' | first %}
{{ pageSlug }}
{: class="center" data-url="{{ pageSlug }};"}
{% assign top = top | plus: 12 %}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
{% endfor %}
\-\- other \-\-
{: class="center" style="--color: aquamarine;" }
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
{{ pageSlug }}
{: class="center" data-url="{{ pageSlug }};"}
{% assign top = top | plus: 12 %}
{% endif %}
{% endif %}
{% endfor %}
