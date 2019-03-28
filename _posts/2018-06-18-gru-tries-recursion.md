---
layout: post
title: Gru tries recursion
date: '2018-06-18T11:15:28-05:00'
tags:
- programmer humor
- programming
- humor
- recursion
source: https://www.reddit.com/r/ProgrammerHumor/comments/85a6n7/gru\_tries\_recursion/
---
![https://i.redd.it/0wap3cp4khm01.jpg](https://i.redd.it/0wap3cp4khm01.jpg)

A _recursive function_ is a piece of code that triggers itself. For example:

    define getMothersName( person ):
      display( person.mother.name )
      getMothersName( person.mother )
    end

This piece of code called `getMothersName` causes itself to run. It would first display the name of my mother, then the name of my mother’s mother, then the name of my mother’s mother’s mother, and so on, until there are no more mothers. This is similar to putting a camera in front a screen showing the output from that camera: you’ll see a picture of the picture of the picture of the picture…

A recursive function will keep triggering itself until it runs into some sort of error or an _exit condition_ that makes it stop (e.g. “stop if the mother’s name is ‘Eve’ or 'Gaia’ or 'Eru’ or 'single-celled proto-organism’”).

**The joke is** that Gru (from the 'Despicable Me’ movies) has created a plan to implement a recursive function, but the plan itself is recursive, causing Gru and the comic to keep repeating into infinity.