import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefix for files in public/img/. Vite's `base` config only rewrites asset
 * URLs it can see statically (index.html, imported modules) — plain string
 * paths built at runtime like `/img/${name}.webp` are not rewritten, so they
 * break once the site is deployed under a sub-path (e.g. GitHub Pages).
 */
export const IMG_BASE = `${import.meta.env.BASE_URL}img/`
