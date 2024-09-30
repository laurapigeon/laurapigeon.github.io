---
layout: HSP
title: Search Results
background_image: kingdom.png
background_position: -12px 0px
list_page: true
tags: [list, debug]
---

{% for page in site.pages %}
{% assign pageSlug = page.url | split: "." | first %}
{% assign pageTags = page.tags | join: ", " %}

<div class="linktile" markdown="1" data-url="{{ pageSlug }}" data-tags="{{ pageTags }}" data-listpage="{{ page.list_page }}">
{{ page.title }}
{: .free style="--top:-2px; --left:10px;" }

{{ pageSlug }}
{: .free style="--top:-2px; --right:9px;" }

{{ page.description }}
{: .free style="--top:6px; --left:74px;" }
</div>

{% endfor %}
