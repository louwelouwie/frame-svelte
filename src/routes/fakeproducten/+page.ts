import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const producten = await res.json();
  return { producten };
};
