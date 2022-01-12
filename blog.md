---
layout: page
title: Blog
permalink: blog
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{site.baseurl}}/{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>