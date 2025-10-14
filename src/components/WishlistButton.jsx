"use client";
import { useDispatch, useSelector } from 'react-redux';
import { toggleWish } from '@/store/wishlistSlice';
import { FaHeart } from 'react-icons/fa';

export default function WishlistButton({ item }) {
  const dispatch = useDispatch();
  const exists = useSelector((s) => s.wishlist.items.find((x) => x.id === item.id));

  const handle = () => {
    dispatch(toggleWish(item));
  };

  return (
    <button onClick={handle} aria-label="Wishlist" className={`p-2 rounded ${exists ? 'text-red-600' : 'text-gray-600'}`}>
      <FaHeart />
    </button>
  );
}
