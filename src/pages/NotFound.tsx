import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Page Not Found | REST Reset";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      const created = !el;
      if (!el) {
        el = document.createElement("meta");
        const [key, val] = selector.replace(/^meta\[|\]$/g, "").split("=");
        el.setAttribute(key, val.replace(/['"]/g, ""));
        document.head.appendChild(el);
      }
      const prev = el.getAttribute(attr);
      el.setAttribute(attr, value);
      return () => {
        if (created) el?.remove();
        else if (prev !== null) el?.setAttribute(attr, prev);
      };
    };

    const url = `https://rest.learningwhilehealing.com${location.pathname}`;
    const desc =
      "This page could not be found. Return to the REST Reset home page to learn about our guided inner decluttering experience.";

    const restores = [
      setMeta('meta[name="description"]', "content", desc),
      setMeta('meta[property="og:title"]', "content", "Page Not Found | REST Reset"),
      setMeta('meta[property="og:description"]', "content", desc),
      setMeta('meta[property="og:url"]', "content", url),
      setMeta('meta[name="twitter:title"]', "content", "Page Not Found | REST Reset"),
      setMeta('meta[name="twitter:description"]', "content", desc),
    ];

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    return () => {
      document.title = prevTitle;
      restores.forEach((r) => r());
      if (createdCanonical) canonical?.remove();
      else if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
