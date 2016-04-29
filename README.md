# Boilermaker

A quick boilerplate/tool for prototyping, blogging, or static pages. Boilermaker is a template for easily building and deploying static pages for those comfortable with the Ruby/Rails ecosystem.

### Boilermaker is built on top of:

- **[Middleman](https://middlemanapp.com/):** Static Page Generator
- **[Thoughtbot](https://thoughtbot.com/):** Sass framework
  - [Bourbon](http://bourbon.io/): Sass mixin library
  - [Neat](http://neat.bourbon.io/): Semantic grid
  - [Bitters](http://bitters.bourbon.io/): Lightweight scaffolded structure
- **[Surge.sh](http://surge.sh/):** Easy & Free deployment

## Getting Started

```term
$ git clone https://github.com/david-ray-wc/boilermaker.git your-project-name
$ cd your-project-name
$ bundle install
$ git remote rm origin
$ middleman -p 3030
```

**That's it.**

## Features

Boilermaker very quickly gets you up and running with a well layed out document structure. There is a very intuitive document structure to easliy write organized modular code using erb & scss partials.

**Semantic Grid**

**Responsive Typography**

**Sticky Footer** (That works without needing to declare a height for your footer)

**Mobile First**

**Markdown Parsing**

**jQuery** (If you don't like it, you can get rid of it)

**ERB templating**

## Deployment

One of the best features of Boilermaker is how easy Surge makes it to deploy. It makes Github Pages look confusing in comparison.

**Requirements**

[Surge](http://surge.sh)

**Steps**

When you're done with you're site and want to deploy it just do the following.

```
$ middleman build #this builds the static site into the build directory
$ surge build #this tells surge to deploy only the build directory
```

That's it. Assets are automatically gziped and all routes are clean (*/about instead of /about.html*). Surge also provides redirects to a custom 404 page and free custom domain. Make sure you enter your own domain in the CNAME file and that your domain hostnames @ and www are set to

```
na-west1.surge.sh
```

## Why the name?

I figured since Thoughtbot named all of their Sass tools after whiskey, I'd do the same for my boilerplate. A Boilermaker cockatil is when you drop a shot of whiskey in a pint of beer.

## Special Thanks

- [Middleman](https://middlemanapp.com/)
- [Thoughtbot](https://thoughtbot.com/)
- [Font Awesome](http://fontawesome.io/)
- [Surge.sh](http://surge.sh)
- [jQuery](http://jquery.com/)
