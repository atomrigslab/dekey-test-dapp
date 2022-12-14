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

    // TODO: request to wallet to check if wallet exists
    // If it does not exist, route to wallet page?
    const btn = document.createElement('button');
    btn.innerHTML = 'Wallet';
    btn.type = 'submit';
    btn.name = 'formBtn';
    btn.onclick = function () {
      // request to wallet module to route to wallet page or something
      // window.ethereum.request({ method: 'eth_requestAccounts' });
      window.ethereum.request({ method: 'toggle_wallet' });
    };
    document.body.insertBefore(btn, document.body.firstChild);
  } catch (err) {
    console.error('Dekey script injection failed', err);
  }
};
