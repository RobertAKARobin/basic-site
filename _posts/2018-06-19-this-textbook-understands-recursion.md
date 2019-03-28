---
layout: post
title: This textbook understands recursion
date: '2018-06-19T12:21:34-05:00'
tags:
- programmer humor
- programming
- humor
- recursion
tumblr_url: https://explainprogrammerhumor.tumblr.com/post/175045549540/this-textbook-understands-recursion
---
![https://i.redd.it/53hb6r5046111.jpg](https://i.redd.it/53hb6r5046111.jpg)

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

> Source: [https://www.reddit.com/r/ProgrammerHumor/comments/8nhawy/this\_textbook\_understands\_recursion/](https://www.reddit.com/r/ProgrammerHumor/comments/8nhawy/this_textbook_understands_recursion/)

