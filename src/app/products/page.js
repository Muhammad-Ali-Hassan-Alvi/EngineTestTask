import Image from "next/image";
import Link from "next/link";

const MOCK_PRODUCTS = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title: `Men Regular Fit Casual Shirt ${i + 1}`,
  price: 3999 + ((i % 5) * 200),
  image: "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/ENGINE-MEN-1.jpg?v=1729930000",
}));

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold mb-6">All Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map((p) => (
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


