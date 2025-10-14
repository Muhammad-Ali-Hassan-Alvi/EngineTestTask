import Link from 'next/link';

export default function OrderConfirm() {
  const orderNumber = Math.floor(Math.random() * 900000) + 100000;

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto text-center bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-green-600">Order Confirmed</h1>
        <p className="mt-4">Thank you! Your order <strong>#{orderNumber}</strong> has been placed.</p>

        <div className="mt-6">
          <p className="text-sm text-gray-600">A confirmation email has been sent to you (mocked).</p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="px-6 py-2 border">Continue Shopping</Link>
          <Link href="/cart" className="px-6 py-2 bg-black text-white">View Cart</Link>
        </div>
      </div>
    </main>
  );
}
