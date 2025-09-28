import type { PageLoad } from './$types';

export const ssr = false;
export const csr = true;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {rate: string, count: number};
}

export const load: PageLoad = async ({ params, fetch }) => {
  const { id } = params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error('Fetch gefaald');
  }

  const product: Product = await res.json();
  return { product };
};
