/// <reference types="astro/client" />

// Google Tag Manager types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
  
  const gtag: (...args: any[]) => void;
  const dataLayer: any[];
}

export { };

