declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function getRecaptchaSiteKey(): string | undefined {
  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || undefined;
}

export function getRecaptchaScriptSrc(siteKey: string): string {
  return `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
}

export async function getRecaptchaToken(siteKey: string): Promise<string> {
  if (typeof window === "undefined" || !window.grecaptcha) {
    throw new Error("reCAPTCHA not loaded");
  }

  return new Promise((resolve, reject) => {
    window.grecaptcha!.ready(() => {
      window
        .grecaptcha!.execute(siteKey, { action: "submit" })
        .then(resolve)
        .catch(reject);
    });
  });
}
