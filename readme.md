# Stencil / Storybook Demo

This is a demo project for building a standalone Web Component using Stencil with Storybook integration.

To test this out run:

```bash
npm install
npm run dev
```

Most of this is using the default [Stencil template for components](https://stenciljs.com/docs/introduction) and the [Web Components version of Storybook](https://storybook.js.org/docs/web-components/get-started/install). 

This also uses the (CEM Analyzer)[https://custom-elements-manifest.open-wc.org/analyzer/getting-started/] for generating the Custom Elements Manifest as well as the [Web Component Storybook Helpers package](https://www.npmjs.com/package/wc-storybook-helpers). 

The main confiurations for this are in `.storybook/preview.js`. Please also note the [jsDoc information](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/#supported-jsdoc) in the component. This is used to generate the metadata in the CEM.

The CEM Analyzer, Stencil build, and Storybook are run in parallel to keep everything in sync using `npm-run-all` with the `dev` script in the `package.json`.