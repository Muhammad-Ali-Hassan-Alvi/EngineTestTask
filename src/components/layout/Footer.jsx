export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <div className="font-semibold mb-3">Connect With Engine</div>
          <ul className="space-y-1">
            <li>Phone: 042111364463</li>
            <li>Mon–Fri 9:30 to 5:30</li>
            <li>online@engine.com.pk</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Support</div>
          <ul className="space-y-1">
            <li>Track Your Order</li>
            <li>Size Guide</li>
            <li>Shipment & Delivery</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Store Locator</li>
            <li>Work with us</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Social</div>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}


