"use client";
import { useSelector } from 'react-redux';

export default function OrdersPage() {
  const orders = useSelector((s) => s.orders.orders);

  if (!orders.length) return <main className="p-12">You have no orders yet</main>;

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">Your Orders</h1>
      <div className="space-y-6">
        {orders.map((o) => (
          <div key={o.id} className="border p-4 bg-white">
            <div className="flex justify-between">
              <div>Order #{o.id}</div>
              <div>{new Date(o.date).toLocaleString()}</div>
            </div>
            <div className="mt-2 text-sm text-gray-600">Total: PKR {o.total.toLocaleString()}</div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {o.items.map((it) => (
                <div key={it.id} className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gray-100 relative">
                    <img src={it.image} alt={it.title} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{it.title}</div>
                    <div className="text-xs text-gray-600">PKR {it.price.toLocaleString()} x {it.qty}</div>
                    {it.size && <div className="text-xs text-gray-600">Size: {it.size}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
