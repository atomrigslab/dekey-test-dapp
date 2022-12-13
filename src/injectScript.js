import { inpageBundle } from './inpage';

export const injectScript = () => {
  try {
    console.log('injectScript called');
    const container = document.head || document.documentElement;
    console.log('container', container);

    // synchronously execute script in page context
    const scriptTag = document.createElement('script');
    console.log('scriptTag', scriptTag);

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
