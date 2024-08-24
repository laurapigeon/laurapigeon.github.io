---
layout: HSP
title: A fun polyomino tiling
list_page: true
tags: [discussion]
---

so many years ago i was active on a minecraft redstone tech server, and i was working on tilings for the floor of my plot. a friend idly built these polyominoes and said they tile and i was like \"wow cool\" and took a screenshot

<p class="imagebox" style="--width: 100px">
    <img src="/resources/images/funtiling/tile-0.png">
    <img src="/resources/images/funtiling/tile-1.png">
    <img src="/resources/images/funtiling/tile-2.png">
</p>

and then a couple years later i was looking through my minecraft screenshots and noticed them and was like huh nice i wonder how they actually tile, so i set out to try to figure it out

my first thought was to just randomly append them together to see how they fit and to see what stuck. although this got me quite far, i consistently ran into local situations that didnt have solutions, and concerningly the more i added the more of these situations i seemed forced into

<p class="imagebox">
    <img src="/resources/images/funtiling/manual shoving.png">
</p>

(for demonstrations sake, ive created a set of larger polyominoes that tile in the same way but with gaps, so tiles of the same kind dont meld together)

this reminded me of what id heard of the penrose tiling via numberphile, so i took note of the term \"aperiodic\" and set on to figure out more
{: data-url="https://youtu.be/QTrM-UVcgBY"}

the more i stared at my local attempts, the more i started to notice vaguely rectangular blocks composed of different combinations of the three tiles, that tended to slot next to each other in the successful areas, but were broken or offset when i would reach a problem. as per usual, i set out to catalogue them, to figure out more. i gave each a corresponding colour, as i noticed successful areas never had multiple of these slanted rectangles touching each other

<p class="imagebox" style="--width: 283px">
    <img src="/resources/images/funtiling/metatile-red.png">
    <img src="/resources/images/funtiling/metatile-yellow.png">
    <img src="/resources/images/funtiling/metatile-green.png">
    <img src="/resources/images/funtiling/metatile-cyan.png">
    <img src="/resources/images/funtiling/metatile-blue.png">
    <img src="/resources/images/funtiling/metatile-pink.png">
</p>

with these six metatiles in my toolset, i could now think of the problem as 1x1 squares of one type, 1x2 rectangles of two types, and 2x2 squares of three types, tiling a grid. in the successful areas of my manual attempts, a few things were true: seams were continuous, i.e. length 1 sides met length 1 sides and likewise for length 2; following a seam, there was never more than one length 1 side in a row, and never more than two length 2 sides in a row, in both directions; two of the same metatile were never orthogonally adjacent and blue cannot border pink or green. these rules alone construct lovely, simple, tartan-esque patterns

<p class="imagebox">
    <img src="/resources/images/funtiling/tartan large.png">
</p>

trying to convert these designs into full tilings, however, shows there is something else underlying the system. there appears to be a directionality passed through the rectangles that determines the content of the length 2 square areas, restricting them in a way that seems to prevent any repeating patterns (again hinting towards the aperiodicity idea)

undeterred, i kept looking for more analysable restrictions. i tried looking into the binary pattern of edge lengths, and noticed not only can there be no more than two length 2s in a row before being separated by a length 1, there cannot be more than two instances of two length 2s in a row before being separated by an instance of one length 2. this heavily implied to me that i would find progress in attempting a recursive extension of my rule definitions, so i set about looking for equivalent colours at one tier larger:

<p class="imagebox">
    <img src="/resources/images/funtiling/metametatiles.png">
</p>

sure enough, with some careful observation of the various symmetries and rules of each colour, i found these six metametatiles, and thusly, the "ingredients" to form inductively larger tiers of each colour. so we can aperiodically tile the plane!

i proceeded to create larger and larger tiers of structure, and new versions of the polyomino to rid 2x2px filled sections for a more uniform aesthetic, until i had a blue tier 5 which exceeded the 1920x1080 computer monitor corners to make desktop backgrounds. the exponential nature of recursive generation is really cool, so heres the tile shopping list for the blue tier 5:

<p class="imagebox">
    <img src="/resources/images/funtiling/shopping list.png">
</p>

and here is a gallery of downloadable desktop backgrounds!

<p class="imagebox" data-url="/tilinggallery">
    <img src="/resources/images/funtiling/gallery-thumb.png">
</p>

in the future im planning a python code to auto generate tilings with individually affectable tile colours, so i can make gapless, more colourful, animated and 4k backgrounds :)

thanks for reading!