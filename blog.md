---
layout: page
title: Blog
permalink: blog
---

<div>
  {% for post in site.posts %}
    <div class="py-3">
      <a href="{{site.baseurl}}{{ post.url }}">{{ post.title}}</a> 
      <div class="text-sm text-gray-400"><i class="text-sm far fa-clock"></i> {{post.date | date: "%B %-d, %Y"}}</div>
    </div>
  {% endfor %}
</div>


