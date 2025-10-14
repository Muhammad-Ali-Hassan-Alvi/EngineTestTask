"use client";
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { removeWish } from '@/store/wishlistSlice';
import AddToCartButton from '@/components/cart/AddToCartButton';

export default function WishlistPage() {
  const items = useSelector((s) => s.wishlist.items);
  const dispatch = useDispatch();

  if (!items.length) return <main className="p-12">Your wishlist is empty</main>;

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.id} className="flex gap-4 items-center border p-4 bg-white">
            <div className="w-28 h-28 relative bg-gray-100">
              <Image src={it.image} alt={it.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-gray-600">PKR {it.price.toLocaleString()}</div>
            </div>
            <div className="flex flex-col gap-2">
              <AddToCartButton item={{ id: it.id, title: it.title, price: it.price, image: it.image }} />
              <button onClick={() => dispatch(removeWish(it.id))} className="text-red-600">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
