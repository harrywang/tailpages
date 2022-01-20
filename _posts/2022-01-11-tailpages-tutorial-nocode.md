---
layout: post
title: Tailpages No-Code Tutorial
tags: tutorial no-code
---

Tailpages (Tailwind + Github Pages) is a Jekyll website template based on TailwindCSS, which can be hosted by Github for free. You can visit the demo site at https://harrywang.me/tailpages/.

Key features are:

- Minimalist design inspired by the [indigo template](https://github.com/sergiokopplin/indigo)
- Elegant typography via [TailwindCSS Typography plugin](https://tailwindcss.com/docs/typography-plugin) and [Inter font](https://rsms.me/inter/)
- Markdown support for content authoring (static pages and blogs)
- Code highlighting and styling via [highlight.js](https://highlightjs.org/) (see [code example](http://harrywang.me/tailpages/2022/01/12/tailpages-tutorial-technical.html))


This tutorial shows how you can use Tailpages template to quickly setup your website and blogs without coding. I also have a technical tutorial to show how to setup the development environment for Tailpages from scratch, which you can access at [medium](https://harrywang.medium.com/developing-tailpages-a-jekyll-template-based-on-tailwind-css-b8b51e60e25b) or [blog](http://harrywang.me/tailpages/2022/01/12/tailpages-tutorial-technical.html). 

You only need a Github account to go over this tutorial, which has the following key steps using Github web interface (if you know Git, you can do all these by cloning the repo, making changes locally, and pushing the updates to Github): 

- Fork the https://github.com/harrywang/tailpages repo
- Enable Github Pages
- Customize Homepage
- Add a new web page and customize the navigation menu
- (Optional) Add a new blog
- (Optional) Add a custom domain 

The details of each step are as follows:


## Fork Repo and Enable Github Pages

Login with your Github account, go to https://github.com/harrywang/tailpages and fork the tailpages repo:

<img width="1371" src="https://user-images.githubusercontent.com/1081826/150206142-5bc8db16-6ca3-4a84-a7e5-775242587f02.png">


Rename the forked repo to any name you want. Here I rename it to `johndoe`:
<img width="1020" src="https://user-images.githubusercontent.com/1081826/150206457-cb65ff43-214b-4031-86de-2886b51c789a.png">

Enable the Github Pages: click the Settings option, choose Pages, select main branch and save. Now, you can access the new website at `https://<username>.github.io/<your-repo>`

![0_EcsPmERW8Dj9S5HO](https://user-images.githubusercontent.com/595772/150408998-915d3a62-db2b-4429-aff1-98bfbffc4294.png)

NOTE that the website right now should not look good as follows - we need to change some configurations next to fix it. 

<img width="430" src="https://user-images.githubusercontent.com/1081826/150208962-367a05a2-5b40-4b6d-8fdc-bd088eac61b2.png">

## Customize Homepage

Click the `_config.yml` file as shown below:
<img width="1010" src="https://user-images.githubusercontent.com/1081826/150207681-c28c6d01-338a-4a8d-826e-56b09a7cd4dd.png">


Edit the file:
<img width="1356" src="https://user-images.githubusercontent.com/1081826/150207856-a493fbd6-4f26-4265-9a33-451dfff681c8.png">

**IMPORTANT**: you have to change `baseurl` and `url` in `_config.yml` to match your repo name and username to make the website work. You should also change other basic information. 

<img width="665" src="https://user-images.githubusercontent.com/1081826/150208297-956f9794-d059-484d-a14b-e5d79802ef20.png">

Then save the page, wait for a few minutes (Github redeploys your website every time new changes are committed, which may take a few minutes to complete) and your website should look like:

<img width="1100" src="https://user-images.githubusercontent.com/1081826/150209796-23851c4d-e63f-449d-a043-6a34cb64c242.png">

Next, you can upload a profile image to replace the default avatar. Find the `assets\img` folder and add your own profile image (a square image is preferred. The one I uploaded was downloaded from https://unsplash.com/photos/1lGeOg6IULc and renamed to `johndoe.jpeg`):

<img width="995" src="https://user-images.githubusercontent.com/1081826/150210081-0a19af28-a9c8-4403-9025-12e65982db65.png">

<img width="1341" src="https://user-images.githubusercontent.com/1081826/150210372-8c7ac00b-624b-45f4-a10b-54c2c1ccf578.png">


<img width="1317" src="https://user-images.githubusercontent.com/1081826/150211110-a3c35537-8ee2-4a94-ab5f-ae00a2f2f761.png">

Now, go back to `_config.yml` file and change the value for `author-image` to `johndoe.jpeg` - wait a minute or two, you should see your profile image updated.

<img width="643" src="https://user-images.githubusercontent.com/1081826/150211303-39445033-25c0-402f-88c1-f1320096235b.png">


<img width="477" src="https://user-images.githubusercontent.com/1081826/150212047-f17186c0-f8a6-4088-bc06-e11b3bc02db9.png">

Similarly, you can change the social media links and other basic information such as adding google analytics, changing the default theme color and footer information by editing `_config.yml`. You can set the value to `false` to turn off any features you don't want.

## Customize Pages and Menu

Each page is a Markdown file, which is essentially a text file with `.md` file extension (you can learn some Markdown syntax [here](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax))

On top of each Markdown file, there is a section between two `---`, which is called "front matter":

<img width="663" src="https://user-images.githubusercontent.com/1081826/150214497-98005a5a-34fe-428d-a3a2-d75863841b67.png">

- `layout` is the predefined layout a page/blog can use - just use `page` for pages
- `permalink` is the url of the page, which does not need to match the name of the markdown file for the page
- `title` is the title of the page, which does not need to match the name of the markdown file for the page

<img width="910" src="https://user-images.githubusercontent.com/1081826/150215583-aa05097d-4e52-412b-96d8-9a5108f890f6.png">

The menu is defined in `_config.yml` file - text is the menu name, permalink must match the page permalink specified in page front matter:

```
nav-menu:
- text: About
  permalink: about
- text: Bitcoin
  permalink: bitcoin
- text: Blog
  permalink: blog
```

Next, let's create a new page and change the menu. Add the new file called `skills.md` with front matter and some basic markdown text:

<img width="1013" src="https://user-images.githubusercontent.com/1081826/150216249-6f575236-4ed9-4b01-924a-ac91535e12be.png">


```
---
layout: page
title: My Skills
permalink: skills
---

I have the following skills:

- HTML
- CSS
- Javascript
```

<img width="452" src="https://user-images.githubusercontent.com/1081826/150217146-5a363716-f42d-44b2-a373-c5ae06396b2f.png">

after creating the new page, go edit `_config.yml` file to link the page to the menu:

```
nav-menu:
- text: About
  permalink: about
- text: Skills
  permalink: skills
- text: Blog
  permalink: blog
```

You should be able to see the new menu and page in a few minutes:

<img width="726" src="https://user-images.githubusercontent.com/1081826/150230022-095f606b-96f1-4c15-b1ad-c1ac4e90308f.png">

## Add Blogs

Blog posts are very like pages as discussed above, except for a few things:

- Posts have to be created in the `_posts` folder with specific file name format: `YEAR-MM-DD-title.md`, where YEAR is a four-digit number, MM and DD are both two-digit numbers, such as `2022-01-05-my-first-blog.md`
- Posts can have tags in the front matter - tags are separated by spaces:

```
---
layout: post
title: Tailpages No-Code Tutorial
tags: tutorial no-code
---
```
- Posts use the `post` layout and will be automatically listed in `https://hjwang.github.io/johndoe/blog` page. 

let's create a new post named `2022-01-19-demos.md` in `_post` folder and add the following content:

<img width="872" src="https://user-images.githubusercontent.com/1081826/150232215-ea26e859-f582-4f7e-a8b5-a584f6c972d5.png">

```
---
layout: post
title: My Demo Blog Post
tags: demo design woodworking
---

In this post, I talk about my design philosophy and a recent coffee table I made.

<img class="mx-auto w-1/2" src="{{site.baseurl}}/assets/img/coffeetable.png">
```

Here I also uploaded a new image named `coffeetable.png` to the `assets\img` folder and inserted the image into the post using the following HTML code snippet: `<img class="mx-auto w-1/2" src="{{site.baseurl}}/assets/img/coffeetable.png">`. Here `w-1/2` defines the image width to be half of the container and you have to use `{{site.baseurl}}` in the path to show the image properly. 

Save the changes and wait for the website to update, then you should see your new post listed at `https://hjwang.github.io/johndoe/blog` page:

<img width="568" src="https://user-images.githubusercontent.com/1081826/150232628-7fe8d99d-d318-44b4-b163-8baf936e03cf.png">
<img width="665" src="https://user-images.githubusercontent.com/1081826/150232632-f39a40c0-f17c-4010-8a6e-f9ae9c14ce85.png">

## Remove Unused Pages and Assets (Disable Blog)

You can remove unused pages and other assets (such as images) if you want. For example, you can remove the default Bitcoin page:

<img width="1293" src="https://user-images.githubusercontent.com/1081826/150233079-77f4cf67-069c-46d2-b45f-e362c673a1d1.png">

If you don't have blogs, you can simply delete the posts in the `_post` folder and delete the blog menu in `_config.yml` file. I suggest you keep the `blog.md` file in case you want to blog later :). 

## Add Custom Domain

If you have your own domain name, you can follow the documentation [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) to link it to the site you just created.

**That's it!** Now you can add more content to your website and I hope you enjoy Tailpages template. 

## References

I referred to the following tutorials and code repos to develop this tutorial:

- https://medium.com/@mauddev/jekyll-tailwind-netlify-9496352b49ee
- https://medium.com/@mehdi.h/using-jekyll-with-tailwindcss-on-github-pages-50c3d8401230
- https://sergiokopplin.github.io/indigo
- https://github.com/creativetimofficial/notus-js
- https://longqian.me/2017/02/09/github-jekyll-tag/
- https://nikitagoncharuk.com/blog/my-custom-code-style-for-typography-by-tailwindcss-highlightjs/
- https://tjaddison.com/blog/2020/08/updating-to-tailwind-typography-to-style-markdown-posts/