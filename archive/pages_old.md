---
layout: HSP
title: Page List
background_image: kingdom.png
background_position: -12px 0px
tags: [list, debug]
---

{% for tag in site.data.custom.tag_list %}
\-\- {{ tag }} \-\-
{: .center style="--txcol: aquamarine;" }
{% for page in site.pages %}
{% if page.list_page == true %}
{% for page_tag in page.tags %}
{% if page_tag == tag %}
{% assign pageSlug = page.url | split: "." | first %}
{{ pageSlug }}
{: .center data-url="{{ pageSlug }}"}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
{% endfor %}
\-\- other \-\-
{: .center style="--txcol: aquamarine;" }
{% for page in site.pages %}
{% if page.list_page == true %}
{% assign is_other = true %}
{% for tag in site.data.custom.tag_list %}
{% if page.tags contains tag %}
{% assign is_other = false %}
{% endif %}
{% endfor  %}
{% if is_other %}
{% assign pageSlug = page.url | split: "." | first %}
{{ pageSlug }}
{: .center data-url="{{ pageSlug }}"}
{% endif %}
{% endif %}
{% endfor %}
