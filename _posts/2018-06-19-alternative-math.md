---
title: Alternative Math
tags:
- javascript
image: alternative-math.gif
source: https://www.reddit.com/r/ProgrammerHumor/comments/8og732/alternative_math/
---

There are some situations when you want to put numbers together _without_ adding them. For example, let’s say you pick up a piece of paper that says:

> Jenny’s phone number is `867 + 5309`.

You know from the context to treat those two numbers as one longer number, `8675309`. Sticking them together like this is called _concatenation_. However, let’s say instead you pick up a piece of paper that says simply:

> `867 + 5309`

You might think that this is a math problem telling you to add the numbers together, which totals `6176`.

Different programming languages have different tendencies when it comes to adding numbers together. Most will only _concat_ two numbers if you explicitly say, "Hey, treat both of numbers as if they were just pieces of text, not as actual numbers." If you don’t explicitly say this, the computer will either sum the numbers, or it will throw an error.

However, the JavaScript language has very loose rules about a lot of things, including combining numbers. It will very rarely throw any errors when you try to combine two pieces of data. This means unless you’re very careful, combining data may have unintended results that cause your program to behave strangely.

In this scene, JavaScript (the child) sees `2 + 2` and thinks it should be concatenating these numbers, making `22`, when obviously it should be summing them as `4`.

**The joke is** that JavaScript is often seen as "doing its own thing" compared to other languages, and getting it to do exactly what you want can be complicated.