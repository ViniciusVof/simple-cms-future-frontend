import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

const MAIN_KEYWORDS = '';

const DEFAULT_TITLE = `${import.meta.env.VITE_APP_TITLE}`;
const DEFAULT_DESCRIPTION = `${import.meta.env.VITE_APP_TITLE}`;

const POSTFIX_TITLE = ` | ${import.meta.env.VITE_APP_TITLE}`;

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  largeTwitterCard?: boolean;
  addPostfixTitle?: boolean;
  noIndex?: boolean;
  children?: ReactNode | null;
}

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = '',
  largeTwitterCard = false,
  addPostfixTitle = true,
  noIndex = false,
  children = null,
}: SEOProps) {
  let metaTitle;

  if (addPostfixTitle) {
    metaTitle = title + POSTFIX_TITLE;
  } else {
    metaTitle = title;
  }

  const metaDesc = description ?? DEFAULT_DESCRIPTION;

  const metaKeywords = keywords.length
    ? `${MAIN_KEYWORDS}, ${keywords}`
    : MAIN_KEYWORDS;

  const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow';

  const twitterCardType = largeTwitterCard ? 'summary_large_image' : 'summary';

  return (
    <Helmet>
      <html lang="pt-br" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />

      <meta property="og:title" title={metaTitle} />
      <meta property="og:description" title={metaDesc} />
      <meta property="og:type" content="..." />

      <meta property="twitter:title" title={metaTitle} />
      <meta property="twitter:description" title={metaDesc} />
      <meta property="twitter:card" content={twitterCardType} />

      <meta name="referrer" content="origin-when-crossorigin" />

      {children}
    </Helmet>
  );
}
