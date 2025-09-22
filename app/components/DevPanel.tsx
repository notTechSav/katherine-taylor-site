"use client";

export default function DevPanel() {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <div className="fixed bottom-4 right-4 z-[9999] rounded-xl border bg-white/90 backdrop-blur px-4 py-3 text-sm shadow">
      <div className="font-medium mb-2">Dev Links</div>
      <ul className="space-y-1">
        <li><a className="underline" href="/icon.svg" target="_blank">/icon.svg</a></li>
        <li><a className="underline" href="/manifest.webmanifest" target="_blank">/manifest.webmanifest</a></li>
        <li><a className="underline" href="/opengraph-image" target="_blank">/opengraph-image</a></li>
        <li><a className="underline" href="/robots.txt" target="_blank">/robots.txt</a></li>
        <li><a className="underline" href="/sitemap.xml" target="_blank">/sitemap.xml</a></li>
      </ul>
      <details className="mt-2">
        <summary className="cursor-pointer">JSON-LD check</summary>
        <div className="mt-1 text-xs text-neutral-700">
          Open View-Source and search for <code>application/ld+json</code>. Expect 3 blocks: WebSite, Person, Organization.
        </div>
      </details>
    </div>
  );
}

