import { inpageBundle } from './inpage';

export const injectScript = () => {
  try {
    const container = document.head || document.documentElement;

    // synchronously execute script in page context
    const scriptTag = document.createElement('script');

    scriptTag.setAttribute('async', false);
    scriptTag.textContent = inpageBundle;
    container.insertBefore(scriptTag, container.children[0]);

    // script executed; remove script element from DOM
    container.removeChild(scriptTag);

    window._dekeySetupProvider();
  } catch (err) {
    console.error('Dekey script injection failed', err);
  }
};
