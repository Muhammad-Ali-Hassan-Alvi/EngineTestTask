"use client";
import { useState } from 'react';
import SizeSelector from './SizeSelector';
import WishlistButton from './WishlistButton';
import AddToCartButton from './cart/AddToCartButton';
import { useDispatch } from 'react-redux';
import { addWish } from '@/store/wishlistSlice';

export default function ProductActions({ product }) {
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addWish({ id: product.id, title: product.title, price: product.price, image: product.images[0] }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {/* explicit Add to Wishlist button separate from AddToCart */}
        <button onClick={handleAddToWishlist} className="px-3 py-2 border rounded text-sm">Add to Wishlist</button>
        <WishlistButton item={{ id: product.id, title: product.title, price: product.price, image: product.images[0] }} />
      </div>

      <SizeSelector onChange={(s) => setSize(s)} />

      <AddToCartButton item={{ id: product.id, title: product.title, price: product.price, image: product.images[0] }} size={size} />
    </div>
  );
}
