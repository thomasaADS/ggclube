import type { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  url: string;
  siteName: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  canonical?: string;
}

const DEFAULT_IMAGE = "/og-default.jpg";

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    url,
    siteName,
    image = DEFAULT_IMAGE,
    type = "website",
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    noIndex = false,
    canonical,
  } = config;

  return {
    title,
    description,
    metadataBase: new URL(url),
    alternates: {
      canonical: canonical || url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: type === "article" ? "article" : "website",
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
