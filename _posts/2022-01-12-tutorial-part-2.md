---
layout: post
title: Tailpages Tutorial Part II
tags: tutorial jekyll github-pages
---

This tutorial shows how you start a brand new Jekyll site based on TailwindCSS, which can be hosted by Github Pages. 

## Create a empty Github repo: 

<img width="847" alt="Screen Shot 2022-01-09 at 3 31 05 PM" src="https://user-images.githubusercontent.com/595772/148700857-a054dc43-ba82-4913-9635-cd314a8f74b2.png">

Fork and clone the this repo on your computer and go to the cloned folder: 

```
git clone https://github.com/harrywang/tailpages.git
cd tailpages
```

## Setup Jekyll

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

Now, you can test the site locally:

- at the root of this repo folder run `bundle install`
- (optional for Jekyll 3.0) run `bundle add webrick` according to https://github.com/github/pages-gem/issues/752
- Then run `bundle exec jekyll serve`
- Open it in your browser: `http://localhost:4000`


## Add TailwindCSS

Add TailwindCSS via NPM:

```
yarn init -y
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest postcss-cli
```

Create `tailwind.config.js` and `postcss.config.js` by running `yarn tailwindcss init -p`

Enable tailwindcss plugin typography, inter font, and defaultTheme by updating `tailwid.config.js` as follows:

```
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './**/*.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

Add typography plugin and the font:

```
yarn add -D @tailwindcss/typography
yarn add @fontsource/inter
```

Create a new CSS file with the path `/assets/css/main.css` with the following content:

```
@tailwind base;
@tailwind utilities;
@tailwind components;
```

Add a default layout HTML file to use tailwindcss at `_layouts/default.html`:

```
<!DOCTYPE html>
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <title>{{ site.title }}</title>
    <link rel="stylesheet" href="{{site.baseurl}}/assets/css/main.css">
    <link rel="stylesheet" href="{{site.baseurl}}/assets/css/tailwind.css">

  </head>
  <body class="font-sans mx-auto m-4 max-w-prose">
  <div class="prose prose-yellow prose-lg">
    {{ content }}
  </div>
  </body>
</html>
```
## Build Tailwind

Run `npx tailwindcss -i ./assets/css/main.css -o ./assets/css/tailwind.css` to bulid the css file.

- if you specify `content: ['./**/*.html']` in `tailwind.config.js`, this step scans all html files in this folder and generate the used styles into tailwind.css file. For example, if you never used `m-6` in any html file - it won't be ouput into the file. 
- add `--watch` to make sure that the css is regenerated whenever a change is detected in HTML/JS files. 

create a `page.html` layout to add footer and use a page variable `page.title`. Now, change the `index.md` to use the new template with some basic markdown contents:

```
---
layout: page
title: About
---
...

```

## Github Pages Settings

you have to change `baseurl` and `url` in `_config.yml` to make the site work for Github Pages:

```
baseurl: "/tailpages" # your repo name
url: "https://harrywang.github.io" # replace this with your username
```

Now, you can test the site: `jekyll serve` and open `http://127.0.0.1:4000/tailpages/` note now the address includes the `baseurl`, you should see the markdown file is styled with beautiful TailwindCSS

## Host with Github Pages

You just need to commit all changes and push to the repo. Then, enable Github Papges, then you should be able to visit your site at `https://<username>.github.io/<your-repo>`, such as `https://harrywang.github.io/tailpages` (note that I used a custom domain in the following screenshot):

<img width="1138" alt="Screen Shot 2022-01-09 at 4 32 06 PM" src="https://user-images.githubusercontent.com/595772/148701762-6b4e75df-8f8f-4294-9543-a866200b914f.png">

## References

I referred to the following tutorials and code repos to develop this tutorial:

- https://medium.com/@mauddev/jekyll-tailwind-netlify-9496352b49ee
- https://medium.com/@mehdi.h/using-jekyll-with-tailwindcss-on-github-pages-50c3d8401230
- https://sergiokopplin.github.io/indigo
- https://github.com/creativetimofficial/notus-js
- https://longqian.me/2017/02/09/github-jekyll-tag/


