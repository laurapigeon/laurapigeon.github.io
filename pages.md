---
layout: HSP
title: Search Results
background_image: cells7.png
background_position: -3px 0px
hide_status: true
tags: [list, debug]
---

{% for page in site.pages %}
{% assign pageSlug = page.url | split: "." | first %}
{% assign pageTags = page.tags | join: ", " %}

<div class="linktile center" markdown="1" data-url="{{ pageSlug }}" data-tags="{{ pageTags }}" data-listpage="{{ page.list_page }}">
{{ page.title }}
{: .free style="--top:0px; --left:12px;" }

{{ pageSlug }}
{: .free style="--top:0px; --right:11px;" }

{{ page.description }}
{: .free style="--top:8px; --left:76px; --right:3px;" }
</div>

{% endfor %}
