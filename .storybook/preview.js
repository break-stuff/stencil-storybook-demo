import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";
import {defineCustomElements} from '../loader';

defineCustomElements();
setCustomElementsManifest(customElements);

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
