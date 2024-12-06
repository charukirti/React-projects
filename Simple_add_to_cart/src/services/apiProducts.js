// https://fakestoreapi.com/products

const base_url = 'https://fakestoreapi.com/products';

async function fetchProducts() {
    try {
        const res = await fetch(base_url);
        if (!res.ok) throw new Error('Failed to fetch products 🥲');
        const  data  = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export { fetchProducts };