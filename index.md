---
layout: default
title: Home
---

# Tailpages

{{ site.title }}

{{ site.description }}

## Local Testing

**NOTE**: for Mac M1 users: follow https://www.earthinversion.com/blogging/how-to-install-jekyll-on-appple-m1-macbook/ to install jekyll ARM compatible version

- Install [Jekyll](https://jekyllrb.com) and [Bundler](https://bundler.io/): `gem install jekyll bundler`
- Fork and clone the this repo on your computer: 
- Go to the cloned folder via terminal and run `bundle install`
- (optional for Jekyll 3.0) run `bundle add webrick` according to https://github.com/github/pages-gem/issues/752
- Then run `bundle exec jekyll serve`
- Open it in your browser: `http://127.0.0.1:4000/tailpages/`