# Portfolio with Componently

https://componently-com.github.io/portfolio-with-componently/

[![Deploy with Vercel](https://vercel.co/button)](https://vercel.com/import/settings?s=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fgatsby-portfolio-dev&c=1&env=GATSBY_PORTFOLIO_GITHUB_TOKEN%2CGATSBY_PORTFOLIO_FORMIK_ENDPOINT%2CGATSBY_PORTFOLIO_RECAPTCHA_KEY&envDescription=Required%20to%20fetch%20your%20repositories%20from%20GitHub&envLink=https://github.com/smakosh/gatsby-portfolio-dev&framework=nextjs)

[![Powered by Vercel](./powered-by-vercel.svg)](https://vercel.co?utm_source=smakosh)

If you like this template, check out [componently.com](https://componently.com/), a marketplace where developers can search, compare and integrate web application building blocks.

Strongly based on [the theme from smakosh](https://github.com/smakosh/gatsby-portfolio-dev/). 

## Theme

[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.co/?utm_source=smakosh)
- Or with Netlify, check [Netlify branch](https://github.com/smakosh/gatsby-portfolio-dev/tree/netlify)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)
- One click deployment to Vercel
- Contact form powered by [Static Forms](https://www.staticforms.xyz/)
- Appointment booking with [Acuity Scheduling](https://acuityscheduling.com/)
- Feature switches from [Split](https://www.split.io/)
- CMS from [Contentful](https://www.contentful.com/)

## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## Prerequisites

### Online

1. Fetch an access key for [Static Forms](https://www.staticforms.xyz/)
2. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
3. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=repo&description=portfolio-dev)
4. Set up an account at [Acuity Scheduling](https://acuityscheduling.com/signup.php?action=form&type=professional&freeTrial=1&lite=1&btn=nav/) and find your owner id
5. Set up an account at [Split](https://www.split.io/signup/) and fetch your key and authorization key
6. Set up an account at [Contentful](https://www.contentful.com/sign-up/), set up a content model for "Skill" with a name as short text and a description as rich text and add at least one skill, then fetch your space id and access token
7. Click [![Deploy with Vercel](https://zeit.co/button)](https://vercel.com/import/settings?s=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fgatsby-portfolio-dev&c=1&env=GATSBY_PORTFOLIO_GITHUB_TOKEN%2CGATSBY_PORTFOLIO_FORMIK_ENDPOINT%2CGATSBY_PORTFOLIO_RECAPTCHA_KEY&envDescription=Required%20to%20fetch%20your%20repositories%20from%20GitHub&envLink=https://github.com/smakosh/gatsby-portfolio-dev&framework=nextjs) and pass in your:
  
  - Static Forms access key
  - Google recaptcha public key
  - Github token

To Env variables section.

### Locally

1. Fetch an access key for [Static Forms](https://www.staticforms.xyz/)
2. Install [Yarn](https://yarnpkg.com/en/)
3. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
4. Set up an account at [Acuity Scheduling](https://acuityscheduling.com/signup.php?action=form&type=professional&freeTrial=1&lite=1&btn=nav/) and find your owner id
5. Set up an account at [Split](https://www.split.io/signup/) and fetch your key and authorization key
6. Set up an account at [Contentful](https://www.contentful.com/sign-up/), set up a content model for "Skill" with a name as "Text" and a description as "Rich text" and add at least one skill, then from "API Keys" fetch your Space ID and Content Delivery API access token.
7. Run `cp .env.development.template .env.development`
8. Run `yarn && yarn start`

> You could run `vercel env pull` to get your env variables from Vercel.

### Deploying locally to Vercel

I highly recommend that you push to GitHub/GitLab and deploy your repository to Vercel instead or just hit the Deploy button.

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## Built with

- Adobe XD
- Gatsby
- React & GraphQL
- Formik
- Google recaptcha
- VSCode
- Static Forms
- Acuity Scheduling
- Split
- Contentful
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors

- [Ajay NS](https://github.com/ajayns) https://github.com/smakosh/gatsby-portfolio-dev/pull/3
- [Ryan Lee](https://github.com/drdgvhbh) https://github.com/smakosh/gatsby-portfolio-dev/pull/6
- [David](https://github.com/davidavz) https://github.com/smakosh/gatsby-portfolio-dev/pull/8
- [Léu Almeida](https://github.com/LeuAlmeida) https://github.com/smakosh/gatsby-portfolio-dev/pull/21
- [Kudakwashe Mupeni](https://github.com/2wce) https://github.com/smakosh/gatsby-portfolio-dev/pull/20
- [sasannnn](https://github.com/sasannnn) https://github.com/smakosh/gatsby-portfolio-dev/pull/22
- [Michael Seifarth](https://github.com/Kageetai) https://github.com/smakosh/gatsby-portfolio-dev/pull/27
- [Daniel Bartholomae](https://github.com/dbartholomae) Changes in this repository
- [Smakosh](https://smakosh.com) Original template

## Support

If you love this Gatsby template and want to support Smakosh, you can do so through his GitHub profile.
