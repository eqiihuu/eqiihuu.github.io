const rawBaseUrl = import.meta.env.VITE_API_BASE_URL ?? '';

/**
 * Base URL for Phase-2 FastAPI backend (empty on GitHub Pages static build).
 * Set VITE_API_BASE_URL in .env when running against a home server or AWS backend.
 */
export const API_BASE_URL = rawBaseUrl.replace(/\/+$/, '');

export const isBackendConfigured = API_BASE_URL.length > 0;

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${API_BASE_URL}${normalizedPath}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    ...init,
  });

  if (!response.ok) {
    throw new Error(`API request failed (${response.status}): ${response.statusText}`);
  }

  return (await response.json()) as T;
}
