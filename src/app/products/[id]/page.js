import Image from "next/image";

async function fetchProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    return null;
  }
  const p = await res.json();
  // Map fields to expected UI shape
  return {
    id: p.id,
    title: p.title,
    price: Math.round(p.price * 280),
    description: p.description,
    images: [p.image],
    category: p.category,
  };
}

export default async function ProductDetail({ params }) {
  const id = params.id;
  const product = await fetchProduct(id);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div>Product not found</div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
          {product.images.map((src, i) => (
            <div key={i} className="relative aspect-square bg-gray-100">
              <Image src={src} alt={`${product.title} ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <div className="text-xl">PKR {product.price.toLocaleString()}</div>
          <div>
            <div className="text-sm text-gray-600">Category: {product.category}</div>
            <div className="mt-2 text-sm">{product.description}</div>
          </div>

          <div>
            <div className="mb-2 text-sm font-medium">Size</div>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button key={s} className="w-10 h-10 border rounded text-sm hover:bg-gray-100">{s}</button>
              ))}
            </div>
          </div>

          <button className="w-full h-10 rounded bg-black text-white">Add to cart</button>

          <div className="divide-y">
            <details className="py-4"><summary className="cursor-pointer font-medium">Size Chart</summary><div className="pt-2 text-sm text-gray-600">Chest, Length, Sleeves etc.</div></details>
            <details className="py-4"><summary className="cursor-pointer font-medium">Product Description</summary><div className="pt-2 text-sm text-gray-600">{product.description}</div></details>
            <details className="py-4"><summary className="cursor-pointer font-medium">Note</summary><div className="pt-2 text-sm text-gray-600">Care instructions and notes.</div></details>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-semibold mb-4">You might also like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-[3/4] bg-gray-100">
              <Image src={product.images[i % product.images.length]} alt="Related" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


