# Homepage Project

A simple homepage with responsive html/css features.

This is my entry for the [Homepage project](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-homepage) assignment, part of The Odin Project's [NodeJS WebDev course](https://www.theodinproject.com/paths/full-stack-javascript/).

Check out the [live view!](https://vicpues.github.io/odin-homepage/)

## Dev log

This went way, _waay_ smoother than previous projects. Either _I'm_ getting better at this, or I'm finally honing in on a good stack for static pages. Probably the latter. Vite makes me wish I never have to touch webpack again. I mean, [**a 21 line config file??**](https://github.com/vicpues/odin-homepage/blob/main/vite.config.js) This is progress, people.

Another tool I tried was yarn. Kinda unrelated to everything else, but my connection is pretty shoddy right now, and I have a few too many >100 MB node_modules dirs in my hard drive. I heard yarn could help with both issues, and I agree, it's quite nifty. Sure it's a little janky when it comes to npm compatibility, but the trade-off was pretty worth it for me.

As for the responsive features, I also tried a new approach: mobile-first design. I'll definitely stick with it in future projects. The reasoning goes: mobile layouts are nearly always simpler than desktop. Therefore, it's way more straightforward to design for mobile first and treat the desktop-specific layouts as an added feature on top of it. CSS nesting makes this workflow a lot easier, too. All in all, I'm pretty happy with the curriculum for this section!

Another challenge I imposed on myself was to try and optimize the images as much as possible. This was going to be a challenge; `<picture>` and `<source>` are very powerful, but they're a pain to set up. Fortunately, I stumbled upon a fantastic project: the [responsive-image library](https://responsive-image.dev/). It's an open-source, multi framework package that can generate multiple formats and sizes for every imported image, and it's just awesome. Matter of fact, I liked it so much I opened my first github issue on their page, to request a feature!

As a bonus, this was my first real project with React! I skipped ahead a little in the curriculum, but it was worth it. Generating the DOM programatically is way easier and more flexible this way. Seriously, vanilla JS is surprisingly clunky for DOM manipulation, considering _that's the whole reason the language was made_. My one complaint is that React is very flickery on page load. Oh that, and the JS bundle size is kinda daunting. Well, that's a trade-off for ya. I'll just have to live with it until I dig into SSR and proper frameworks.

## Technologies used

- Dependencies:
  - [React](https://react.dev/)
  - [Responsive Image React component](https://responsive-image.dev/frameworks/react#react-image-component)

- Build tools:
  - [Vite](https://vite.dev/)
  - [SVGR](https://react-svgr.com/)
  - [Responsive Image library](https://responsive-image.dev/)

- Style and linting:
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [CSS Declaration Sorter](https://www.npmjs.com/package/css-declaration-sorter) (plugin for [postcss](https://postcss.org/))

- Package management:
  - [Yarn](https://yarnpkg.com/)

## Contributing

I don't think anyone will be contributing to a student project like this, but if you do, just remember to run `yarn lint` to lint & format the source code before submitting a PR!

Also, I couldn't be bothered to set up GH actions for a project that, realistically, will only have one or two releases, so don't worry about `dist`. I'll pull your contribution and build the gh-pages branch on my machine with the yarn script.
