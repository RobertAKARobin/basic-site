---
title: This textbook understands recursion
tags:
- computer science
- recursion
image: textbook-recursion.jpg
source: https://www.reddit.com/r/ProgrammerHumor/comments/8nhawy/this_textbook_understands_recursion/
---

Recursion is a programming concept that refers to a piece of code triggering itself. For example:

    getMothersName = {
      mothersName = person->mother->name
      display(mothersName)
      getMothersName(person = person->mother)
    }
    getMothersName(person = me)

This piece of code called `getMothersName` causes itself to run. It would first print the name of my mother, then the name of my mother’s mother, then the name of my mother’s mother’s mother, and so on, until there are no more mothers.

Recursive code will go on forever until it runs into some sort of error or condition that makes it stop. (Often this is the computer running out of memory, if the recursive code has been written carelessly.)

**The joke is** that this textbook’s cover is recursive: the textbook contains a picture of students holding the textbook, which contains a picture of students holding the textbook, theoretically going on into infinity (although the picture would quickly become too small to see).