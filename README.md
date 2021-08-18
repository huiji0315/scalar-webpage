# scalar-webpage

Link: will be deployed to Github Page.

This is a static webpage generator and starter gatsby repo. A port of [Casper](https://github.com/TryGhost/Casper) v3 a theme from [Ghost](https://ghost.org/) for [GatsbyJS](https://www.gatsbyjs.org/) using [TypeScript](https://www.typescriptlang.org/).

### Progress

- [x] component
  - [x] header
  - [x] Footer
  - [x] PostContent
  - [x] Field
  - [x] FieldItem
  - [x] Introduction
  - [x] Profile
  - [x] ProfileItem
  - [x] PublicationList
  - [x] PublicationItem
- [x] pages
  - [x] 404
  - [x] about
  - [x] members
  - [x] publications
- [x] templates
  - [x] index
  - [x] post
- [x] content (image, md file)
- [x] website-config
- [ ] polish ✨
  - [ ] meta tags
  - [x] page titles

## How to edit your site title and description

Edit `gatsby-config.js` section `siteMetadata`

```javascript
 siteMetadata: {
    title: 'My awesome site name',
    description: 'This is a description for my site',
    siteUrl: 'https://mysite.com', // full path to page - no ending slash
  },
```

## How to adjust pagination (\* will not be covered)

In `gatsby-node.js`, edit the `postsPerPage` constant. The default value is
six posts per page.
