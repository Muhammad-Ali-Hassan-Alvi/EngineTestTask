"use client";
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';

export default function AddToCartButton({ item, size }) {
  const dispatch = useDispatch();
  const handle = () => {
    const payload = { ...item };
    if (size) payload.size = size;
    // ensure qty if not provided
    if (!payload.qty) payload.qty = 1;
    console.debug('Dispatching addItem', payload);
    dispatch(addItem(payload));
  };
  return (
    <button onClick={handle} className="mt-2 w-full bg-black text-white py-2 rounded text-sm">Add</button>
  );
}
