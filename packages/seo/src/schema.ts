type JsonLd = Record<string, unknown>;

export function generateSchema(schemas: JsonLd[]): string {
  return JSON.stringify(
    schemas.length === 1
      ? schemas[0]
      : schemas.map((s) => s)
  );
}

export function organizationSchema(params: {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: params.name,
    url: params.url,
    logo: params.logo,
    description: params.description,
    sameAs: params.sameAs || [],
  };
}

export function websiteSchema(params: {
  name: string;
  url: string;
  description: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: params.name,
    url: params.url,
    description: params.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${params.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(params: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl: string;
  publisherName: string;
  publisherLogo: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: params.headline,
    description: params.description,
    url: params.url,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@type": "Person",
      name: params.authorName,
      url: params.authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: params.publisherName,
      logo: {
        "@type": "ImageObject",
        url: params.publisherLogo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}

export function courseSchema(params: {
  name: string;
  description: string;
  url: string;
  providerName: string;
  providerUrl: string;
  image?: string;
  instructorName?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: params.name,
    description: params.description,
    url: params.url,
    provider: {
      "@type": "Organization",
      name: params.providerName,
      url: params.providerUrl,
    },
    ...(params.image && { image: params.image }),
    ...(params.instructorName && {
      instructor: {
        "@type": "Person",
        name: params.instructorName,
      },
    }),
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function videoSchema(params: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: params.name,
    description: params.description,
    thumbnailUrl: params.thumbnailUrl,
    uploadDate: params.uploadDate,
    ...(params.duration && { duration: params.duration }),
    ...(params.contentUrl && { contentUrl: params.contentUrl }),
    ...(params.embedUrl && { embedUrl: params.embedUrl }),
  };
}

export function personSchema(params: {
  name: string;
  url: string;
  image?: string;
  jobTitle?: string;
  description?: string;
  sameAs?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: params.name,
    url: params.url,
    ...(params.image && { image: params.image }),
    ...(params.jobTitle && { jobTitle: params.jobTitle }),
    ...(params.description && { description: params.description }),
    ...(params.sameAs && { sameAs: params.sameAs }),
  };
}
