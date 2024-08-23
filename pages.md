---
layout: content
title: Page List
background_image: kingdom.png
background_position: -12px 0px
list_page: true
tags: [list, debug]
---

{% for tag in site.tag_list %}
\-\- {{ tag }} \-\-
{: class="center" style="--color: aquamarine;" }
{% for page in site.pages %}
{% if page.list_page == true %}
{% for page_tag in page.tags %}
{% if page_tag == tag %}
{% assign pageSlug = page.url | split: "." | first %}
{{ pageSlug }}
{: class="center" data-url="{{ pageSlug }}"}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
{% endfor %}
\-\- other \-\-
{: class="center" style="--color: aquamarine;" }
{% for page in site.pages %}
{% if page.list_page == true %}
{% assign is_other = true %}
{% for tag in site.tag_list %}
{% if page.tags contains tag %}
{% assign is_other = false %}
{% endif %}
{% endfor  %}
{% if is_other %}
{% assign pageSlug = page.url | split: "." | first %}
{{ pageSlug }}
{: class="center" data-url="{{ pageSlug }}"}
{% endif %}
{% endif %}
{% endfor %}
