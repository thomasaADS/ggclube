export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (typeof window.gtag === "function") {
    window.gtag("event", event.name, event.properties);
  }

  // Console in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", event.name, event.properties);
  }
}

export function trackPageView(url: string): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: url,
    });
  }
}

// Augment window type
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
