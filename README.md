# svelte app

This is a project template for svelte based DIPS apps. It lives at https://github.com/eliseeaster/template-dips.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit eliseeaster/template-dips svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies....

```bash
cd svelte-app
npm install
```

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:9000](http://localhost:9000). You should see your app running. Edit a component file in `src`, save it, and the page should reload with your changes.

## Launch page
Change iss parameter to change FHIR api.
Change launch parameter to change document refrence. 


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```

