---
layout: HSP
title: About this website 2...
list_page: true
tags: [discussion]
---

2023/12/20 - previous post here!
{: data-url="/aboutthissite" }

~~ 2024/09/05 ~\~

hihi 2! after a huge motivation spike to work on the site (thanks to my friend maddie also making one :)), it\'s looking pretty snazzy! ive added a whole UI frame made up from a sprite sheet and seamlessly rescalable, fully working buttons (except a draggable scrollbar), a music box, surrounding a page that loads procedurally with animations, a bunch of site-owner-config, and including a minimise into reader mode with all different formatting!!

a few avenues of future work (my todos to do):

\- at the moment the per-page markdown interpretation into the styled format is ROUGH and very janky. there are many margins and paddings and positionings and box styles and tag types and alignments and i really need to make an extensive plan of how every element needs to behave before i can overhaul it all

\- there are a fair few animations, transitions and sprites that i havent yet implemented, namely the musicbox effect, the reload bar slide, page tags and stamps, url info on hover

\- a huge missing feature is music autoplay, as well as persisting between pages with the same track, but these point towards a far larger task- using iframes to load page content into a single-page application containing the UI, like a real hypnospace explorer. i havent yet found good documentation on doing this while using jekyll and liquid to build markdown pages into a html frame/template, and my initial attempt at scrappily implementing this introduced a lot of issues with communicating between the parent container and the iframe child, important info like the scroll position, minimise state, etc. the benefits of this implementation would be massive, but getting it working will be a multiple day project

\- the search feature is also missing, but shouldnt be hard to implement. its position in my project list is a bit of a question mark though, as it will be a very different task depending on whether page tags or iframes are implemented yet

\- browser and mobile compatibility will be tough but piecewise and gradual. the flexbox UI frame was a huge first step towards device agnosia, but there are small issues everywhere that will only be fixed with testing and lots of stack overflow answers

\- there're plenty of other small tasks here and there: giving the page writer the option to configure load time per element or page; adding characters to the font, and converting more from sprite sheets into truetext fonts; saving the page scroll position through minimise and redirects; stopping the link border crawling ants from deloading when not displayed for some time; adding further accessibility like the option to tab between page links; gifs and colour-animated text; and et cetera the rest

ive talked far more in this post about my plans for the future than the work ive done to get here, i suppose since the last few weeks have been a programmer-coma haze, but also because i could get busy any moment with work or moving flat or just burn out, so leaving breadcrumbs for my future self seems apt. in order to asuade (assuage + dissuade) said burnout, ill likely spend some time writing more discussion and guide and list pages than making systems changes, for the time being.

the hope in the longterm is for this to be an accessible forkable site template for anyone who wants to chuck a bunch of kramdown-and-liquid-optional markdown documents out into the world with minimal effort, and who love the hypnospace aesthetic (the game is phenominal and more people should play it).

so as per usual, if you\'re that kinda person, and need help getting through the steps to building your own site (local build for testing changes, project-based linted text editor, github account and all), hit me up! i never mind messages and i always love seeing ambition and helping people out :)
{: data-url="/contact" }