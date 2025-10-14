"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "@/store/wishlistSlice";
import { addItem as addToCart } from "@/store/cartSlice";
import Link from "next/link";

export default function WishlistPage() {
  const items = useSelector((s) => s.wishlist.items);
  const dispatch = useDispatch();

  const handleAddToCart = (it) => {
    // Add to cart with a default quantity of 1
    dispatch(addToCart({ ...it, qty: 1 }));
    // Remove from wishlist after adding to cart
    dispatch(removeItem(it.id));
  };

  return (
    <main className="overflow-hidden min-h-screen bg-gray-50 mt-20 mx-10">
      {/* Background Banner Section */}
      <div
        className="relative w-full h-[950px] md:h-[750px] -mt-24 bg-center bg-cover "
        style={{
          backgroundImage:
            "url('https://engine.com.pk/cdn/shop/files/cart-desktop.jpg?v=9518130545091612451')",
        }}
      >
        {/* Overlay Content Container */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-8">
              Your Cart
            </h1>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    Wishlist Items ({items.length})
                  </h2>
                </div>

                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500">Your wishlist is empty.</p>
                    <Link
                      href="/"
                      className="inline-block mt-4 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Discover Products
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((it) => (
                      <div
                        key={it.id}
                        className="flex flex-col sm:flex-row gap-4 items-center border-b pb-4"
                      >
                        {/* The wrapper div already has rounded-md, which is great. */}
                        <div className="w-28 h-28 relative bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={it.image}
                            alt={it.title}
                            layout="fill"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="font-semibold text-lg text-gray-900">
                            {it.title}
                          </h3>
                          <p className="text-md text-gray-600">
                            PKR {it.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 mt-4 sm:mt-0">
                          <button
                            onClick={() => handleAddToCart(it)}
                            className="bg-black text-white py-2 px-5 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => dispatch(removeItem(it.id))}
                            className="text-red-500 hover:text-red-700 transition-colors text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Summary/Actions */}
              <aside className="bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-4 mb-4">
                  Next Steps
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Ready to buy? Add items to your cart to proceed with your
                  purchase.
                </p>
                <Link
                  href="/"
                  className="w-full block text-center bg-gray-800 text-white py-3 rounded-md hover:bg-black transition-colors"
                >
                  Continue Shopping
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* "You might also like these" Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example placeholder items */}
          <div className="bg-white border rounded-lg shadow-sm overflow-hidden group">
            {/* UPDATED: Added rounded-lg and overflow-hidden to the image container */}
            <div className="w-full h-64 relative rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Men Relax Fit Casual Shirt"
                layout="fill"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                Men Relax Fit Casual Shirt
              </h3>
              <p className="text-gray-600 mt-1">PKR 2,000</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                Add
              </button>
            </div>
          </div>
          <div className="bg-white border rounded-lg shadow-sm overflow-hidden group">
            {/* UPDATED: Added rounded-lg and overflow-hidden to the image container */}
            <div className="w-full h-64 relative rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Women Dress"
                layout="fill"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Women Dress</h3>
              <p className="text-gray-600 mt-1">PKR 3,000</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}