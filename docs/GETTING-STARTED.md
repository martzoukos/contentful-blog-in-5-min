# Gettings started

To get you started you have to be registered at [Contentful](https://www.contentful.com).

## Clone the repo

```bash
$ git clone git@github.com:stefanjudis/contentful-blog-in-5-min.git
```

## Create a new space and import the needed content model

To import the data needed to get you started you have to retrieve a Content Management API Access token. Then you can run `npm run import-data` with additional environment variables to fill your space with provided data.

```bash
$ npm run import-data -- --space-id YOUR_SPACE_ID --management-token YOUR_MANAGEMENT_TOKEN
```

## Create a config file

To make this project run locally you have to create a `.contentful.js` in the root of the directory. You can find a `.contentful.sample` file which shows you what you have to define.

Needed config data:

- the ID of the `person` content type
- the ID of the `blogPost` content type
- the ID of the space where your data lives
- the CDA access token so that you can fetch the data

```javascript
module.exports = {
  CTF_PERSON_ID: 'PERSON_ID',
  CTF_BLOG_POST_TYPE_ID: 'BLOG_POST_TYPE_ID',
  CTF_SPACE_ID: 'YOUR_SPACE_ID',
  CTF_ACCESS_TOKEN: 'YOUR_DELIVERY_ACCESS_TOKEN'
};
```

## Preview your the site

To see the site working with your newly created data all you have to do is to run `npm run dev`. This command starts a server at `localhost:3000`.

## Deploy the site to Netlify

```bash
$ npm run deploy
```

