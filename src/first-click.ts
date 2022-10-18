import { retry } from '@sensearena/ui';
import { isSSR } from './constants';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const firstClick = () =>
  retry(
    () =>
      new Promise<void>(res => {
        if (isSSR) return res();
        let pv = 1;
        if (sessionStorage.pv) {
          pv = pv + 1;
          sessionStorage.setItem('pv', String(pv));
        } else if (!sessionStorage.pv) {
          sessionStorage.setItem('pv', String(pv));
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'first_click',
          });
          console.log('firstClick');
        }
        res();
      }),
  );
