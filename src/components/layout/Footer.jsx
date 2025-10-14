import { IoCallSharp } from "react-icons/io5";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <div className="text-black font-bold text-lg mb-3">
            Connect With JewelMine
          </div>
          <ul className="space-y-1">
            <li className="flex items-center gap-1">
              {" "}
              <span>
                <IoCallSharp />
              </span>
              <span>Phone: 042111364463</span>
            </li>
            <li className="flex items-center gap-1">
              {" "}
              <span>
                <IoCallSharp />
              </span>
              <span>Mon–Fri 9:30 to 5:30</span>
            </li>
            <li className="flex items-center gap-1">
              {" "}
              <span>
                <FaEnvelope />
              </span>
              <span>online@jewelmine.com.pk</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-black font-bold text-lg mb-3">Support</div>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline hover:font-bold">
              Track Your Order
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold">
              Cart
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold">
              Size Guide
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold">
              Shipment & Delivery
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold">
              Exchange Policy
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold">
              How to Order
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold">
              Terms & Conditions
            </li>
          </ul>
        </div>
        <div>
          <div className="text-black font-bold text-lg mb-3">Company</div>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline hover:font-bold">
              About us
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold">
              Store Locator
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold">
              Work with us
            </li>
          </ul>
        </div>
        <div>
          <div className="text-black font-bold text-lg mb-3">Social</div>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline hover:font-bold flex items-center gap-1">
              <span>
                <FaFacebookF />
              </span>
              <span>Facebook</span>
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold flex items-center gap-1">
              <span>
                <FaInstagram />
              </span>
              <span>Instagram</span>
            </li>
            <li className="cursor-pointer hover:underline hover:font-bold flex items-center gap-1">
              <span>
                <FaYoutube />
              </span>
              <span>Youtube</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
