---
permalink: /
---
# Explain Programmer Humor

{% assign sortedTags = site.tags | sort %}
{% for tag in sortedTags %}
{{ tag[0] }}
{% endfor %}