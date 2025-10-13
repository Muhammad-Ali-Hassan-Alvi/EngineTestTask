import Image from "next/image";

function RoundedImage({ src }) {
  return (
    <div className="rounded-2xl overflow-hidden w-64 h-64 mx-auto">
      <Image src={src} alt="" width={256} height={256} className="h-full w-full object-cover" />
    </div>
  );
}

export default function StayInTouch() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="hidden md:flex flex-col gap-8">
          <RoundedImage src="https://cdn.shopify.com/s/files/1/0554/9086/1383/files/st-1.jpg?v=1729930000" />
          <RoundedImage src="https://cdn.shopify.com/s/files/1/0554/9086/1383/files/st-2.jpg?v=1729930000" />
        </div>
        <div className="text-center">
          <div className="text-[60px] sm:text-[96px] leading-none font-extrabold">Stay In<br/>Touch</div>
          <div className="mt-8 mx-auto max-w-md flex h-12 rounded-full overflow-hidden border">
            <input className="px-5 flex-1 outline-none" placeholder="Enter email..." />
            <button className="w-36 bg-black text-white">Join Engine</button>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-8">
          <RoundedImage src="https://cdn.shopify.com/s/files/1/0554/9086/1383/files/st-3.jpg?v=1729930000" />
          <RoundedImage src="https://cdn.shopify.com/s/files/1/0554/9086/1383/files/st-4.jpg?v=1729930000" />
        </div>
      </div>
    </section>
  );
}


