---
layout: page
title: About
---

{{site.title}} 

{{site.description}}

See source code at [Github](https://github.com/harrywang/tailpages)


## Tutorial

This tutorial shows how you start a brand new Jekyll site based on TailwindCSS, which can be hosted by Github Pages. 

This tutorial is based on the following tutorials:

- https://medium.com/@mauddev/jekyll-tailwind-netlify-9496352b49ee
- https://medium.com/@mehdi.h/using-jekyll-with-tailwindcss-on-github-pages-50c3d8401230

### Create a empty Github repo: 

<img width="847" alt="Screen Shot 2022-01-09 at 3 31 05 PM" src="https://user-images.githubusercontent.com/595772/148700857-a054dc43-ba82-4913-9635-cd314a8f74b2.png">

Fork and clone the this repo on your computer and go to the cloned folder: 

```
git clone https://github.com/harrywang/tailpages.git
cd tailpages
```

### Setup Jekyll

**NOTE**: for Mac M1 users: follow https://www.earthinversion.com/blogging/how-to-install-jekyll-on-appple-m1-macbook/ to install jekyll ARM compatible version:

```
xcode-select --install
brew install rbenv ruby-build
rbenv install 3.0.0
rbenv global 3.0.0
ruby -v
rbenv rehash
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
echo 'eval "$(rbenv init - bash)"' >> ~/.bash_profile
gem install jekyll bundler 
echo 'export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH"' >> ~/.bash_profile
```

create a new Jekyll site: `jekyll new tailpages`, which create a `tailpages` folder within the repo folder:

<img width="247" alt="Screen Shot 2022-01-09 at 3 33 40 PM" src="https://user-images.githubusercontent.com/595772/148701139-d47eeb73-c2b3-4b2a-91a4-ab028150aec8.png">

move all files in the `tailpages` folder created by Jekyll one level up and then remove the folder:

```
mv tailpages/* .
rm -rf tailpages
```

<img width="342" alt="Screen Shot 2022-01-09 at 3 35 08 PM" src="https://user-images.githubusercontent.com/595772/148701216-c1a44cbb-fd9a-413a-bcf1-621657277f32.png">

After this, your folder structure should look like:

<img width="252" alt="Screen Shot 2022-01-09 at 3 35 28 PM" src="https://user-images.githubusercontent.com/595772/148701238-cc1cba0d-45c5-4d18-ac78-402fdd73f473.png">


Open `Gemfile` file and add a Jekyll plugin we will need for processing Tailwind:

```
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem 'jekyll-postcss-v2'
end
```
Click the Github link below to see the whole tutorial as the README.md:

