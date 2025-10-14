import Image from "next/image";
import Link from "next/link";

async function fetchProducts({ category } = {}) {
  if (category === 'clothing') {
    // fakestore categories: "men's clothing" and "women's clothing"
    const menRes = await fetch("https://fakestoreapi.com/products/category/men's%20clothing", { cache: 'no-store' });
    const womenRes = await fetch("https://fakestoreapi.com/products/category/women's%20clothing", { cache: 'no-store' });

    const [menData, womenData] = await Promise.all([
      menRes.ok ? menRes.json() : [],
      womenRes.ok ? womenRes.json() : [],
    ]);

    const combined = [...menData, ...womenData].slice(0, 24);

    return combined.map((p) => ({
      id: p.id,
      title: p.title,
      price: Math.round(p.price * 280),
      image: p.image,
    }));
  }

  // default: fetch first 24 products
  const res = await fetch("https://fakestoreapi.com/products?limit=24", { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Failed to fetch products from fakestoreapi");
  }
  const data = await res.json();
  return data.map((p) => ({
    id: p.id,
    title: p.title,
    price: Math.round(p.price * 280),
    image: p.image,
  }));
}

export default async function ProductsPage({ searchParams }) {
  const category = searchParams?.category ?? null;
  const products = await fetchProducts({ category });

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold mb-6">All Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.id}`} className="group">
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
              <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="mt-3 text-sm">
              <div className="line-clamp-1">{p.title}</div>
              <div className="font-semibold">PKR {p.price.toLocaleString()}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}


