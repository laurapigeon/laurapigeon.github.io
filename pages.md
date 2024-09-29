---
layout: HSP
title: Page List
background_image: kingdom.png
background_position: -12px 0px
list_page: true
tags: [list, debug]
---

{% for page in site.pages %}
{% if page.list_page == true %}
{% assign pageSlug = page.url | split: "." | first %}

<div style="background-image:url('/site_resources/images/page_panel.png'); width:284px; height:32px;" markdown="1">

{{ pageSlug }}

{{ page.title }}

</div>
{: data-url="{{ pageSlug }}"}

{% endif %}
{% endfor %}
