// https://dummyjson.com/products

const base_url = 'https://dummyjson.com/products';

async function fetchProducts() {
    try {
        const res = await fetch(base_url);
        if (!res.ok) throw new Error('Failed to fetch products');
        const { data } = await res.json();
        return data.products;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export { fetchProducts };