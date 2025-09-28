import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { producten } from '$lib/data/producten'

export const load: PageLoad = ({ params }) => {
    const product = producten.find((p) => p.id === params.id);

    if (!product) {
        throw error(404, 'Geen product gevonden');
    }

    return {
        title: product.name,
        content: `<p>Prijs: ${product.price}</p>`,
        image: product.image
    };
};
