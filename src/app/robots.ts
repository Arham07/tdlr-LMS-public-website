import type { MetadataRoute } from 'next';

/**
 * This is an unpublished design concept containing placeholder content and
 * unlicensed placeholder photography, so nothing here should be indexed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', disallow: '/' },
  };
}
