---
layout: "HSP"
title: "laura's words of the day"
bg_color: rgb(0,0,0)
list_page: true
tags: [list]
---

{% assign words = "anathema, prescient, apt, pertinent, poignant, astound, lithe, pernicious , serendipity, vehement, austentatious, oxymoron, autological, intractable, incongruous, aggrandize, cynicism, pessimism, nihilism, scepticism, alacrity, liason, ostensibly, concerted, nomenclature, eponymous, purport, ostentatious, insular, bikeshedding, aprepos, ergo, chicanery, foray, indictment, endorsement, espouse, convene, propinquity, dilemma, rendezvous, remedy, deluge, inertia, query, incessant, multiplicate, palliative, mitigation, commence, unanimous, ilk, renowned, laurel, vociferous, antipodean, panacea, coda, decrepit, abhor, esoteric, vie, participle, demure, schema, heuristic, stochastic, ontology, apposite, manifold, ethos, pathos, nascent, codec, overture, abate, ablate, coruscate, paltry, paunch, detritus, venerate, facetious, errant, verisimilitude, corporeal, exhaustive, solidarity, prerogative, readjust, anachronism, enamoured, floundering" | split: ", " %}
{% assign wordcount = words.size | times: 1.0 %}
{% assign hueshift = 360 | divided_by: wordcount %}
{% assign hue = 0 %}
{% for word in words %}
{{ word }}
{: .center style="--color:hsl({{ hue }},100%,50%);" }
{% assign hue = hue | plus: hueshift %}
{% endfor %}

yes the words of the day are the same every day