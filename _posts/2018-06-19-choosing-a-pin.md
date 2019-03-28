---
title: Choosing a PIN
tags:
- computer science
image: choosing-a-pin.jpg
source: https://www.reddit.com/r/ProgrammerHumor/comments/8opebi/choosing_a_pin/
---

In programming, an _array_ is a collection of pieces of data. It’s usually thought of as a list. For example, an array of fruits might look like this:

    [apricot, banana, cherry, durian]

If someone asked you what place in the list is ‘apricot’, you’d probably say "first place." In most programming languages, however, you would say "zero-eth place." The place (or _index_) of each fruit would look like this:

<table\><thead\><tr\><th\>Fruit</th\><th\>Place (English)</th\><th\>Index (code)</th\></tr\></thead\><tr\><td\>apricot</td\><td\>first</td\><td\>0</td\></tr\><tr\><td\>banana</td\><td\>second</td\><td\>1</td\></tr\><tr\><td\>cherry</td\><td\>third</td\><td\>2</td\></tr\><tr\><td\>durian</td\><td\>fourth</td\><td\>3</td\></tr\></table\>

Arrays being "zero-indexed" like this is a source of many programming jokes: for example, coffee mugs that say "World’s #0 Programmer."

A PIN (a number used to access something, like a bank account or debit card) should be hard to guess. But many people simply choose "1234" for convenience.

**The joke is** two-fold: first, the author has decided to "zero-index" their PIN by counting up from 0 (`0123`) instead of from 1 (`1234`), which is completely unnecessary but makes them look more "programmer-y." Second, one would expect someone trying to look "programmer-y" to be conscious about having a secure PIN, but the author has chosen a tremendously insecure PIN.