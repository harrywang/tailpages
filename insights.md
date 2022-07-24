---
layout: page
title: The latest from Fuxlab
permalink: insights
---
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="not-prose mt-16">
  <div class="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
    {% for post in site.posts %}
    <div>
      <div class="mb-5">
        {% for tag in post.tags %}
        <a href="{{site.baseurl}}{{ post.url }}" class="inline-block">
          <div class="font-sans inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            <a class="!no-underline" href="/portfolio/tag#de">{{ tag }}</a>
          </div>
        </a>
        {% endfor %}
      </div>
      <a href="{{site.baseurl}}{{ post.url }}" class="block no-underline m-0 p-0">
        <h3 class="text-xl font-semibold text-gray-900">
          {{ post.title}}
        </h3>
        <p class="mt-3 text-base text-gray-500 no-underline">
          {{ post.excerpt | strip_html | strip_newlines | truncate: 156 }}
        </p>
      </a>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="{{site.baseurl}}{{ post.url }}">
            <span class="sr-only">
              {{ post.author }}
            </span>
            <img class="h-6 w-6 rounded-full object-cover mx-auto" src="{{site.baseurl}}/assets/img/{{site.author-image}}" />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <a href="{{site.baseurl}}{{ post.url }}">
            {{ post.author }}
            </a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-16"> {{post.date | date: "%B %-d, %Y"}} </time>
            <span>
            {% capture words %}
              {{ post.content | number_of_words | minus: 180 }}
            {% endcapture %}
            {% unless words contains '-' %}
              <span aria-hidden="true"> &middot; </span>
              {{ words | plus: 150 | divided_by: 50 | append: ' min read' }}
            {% endunless %}
            </span>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
