/** Respect Astro's base path for both user Pages and project Pages. */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
