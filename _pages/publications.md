---
layout: archive
title: "Publications"
permalink: /https://github.com/Shawjinyi/shawjinyi.github.io/blob/b210e22f50e7e28c5a00d73c895d88edbef2fabb/_pages/publications.md/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
