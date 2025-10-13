import Image from "next/image";
import HeroSlider from "@/components/home/HeroSlider";
import CategoryCard from "@/components/home/CategoryCard";
import Banner from "@/components/common/Banner";

const BANNERS = [
  "https://engine.com.pk/cdn/shop/files/Website-Banner_482d3837-e6be-4837-b12f-e7df1b295187_3840x.jpg?v=1758106185",
  "https://engine.com.pk/cdn/shop/files/Artboard_2_ac38b68b-75b4-454f-865c-067f2c42de98_3840x.jpg?v=1757912904",
  "https://engine.com.pk/cdn/shop/files/Artboard_3_aace9569-5353-4670-b482-6a0812f47dee_3840x.jpg?v=1757845671",
  "https://engine.com.pk/cdn/shop/files/Artboard_4_8ae822e3-ac64-4eca-9de7-c93ad0d69f99_3840x.jpg?v=1757845669",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      {/* <HeroSlider images={BANNERS} /> */}

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-4 gap-6">
          <CategoryCard
            title="Summer Sale"
            src="https://cdn.shopify.com/s/files/1/0554/9086/1383/files/kid-1.jpg?v=1729930000"
          />
          <CategoryCard
            title="Polo Shirts"
            src="https://cdn.shopify.com/s/files/1/0554/9086/1383/files/men-2.jpg?v=1729930000"
          />
          <CategoryCard
            title="T-Shirts"
            src="https://cdn.shopify.com/s/files/1/0554/9086/1383/files/men-3.jpg?v=1729930000"
          />
          <CategoryCard
            title="Trousers"
            src="https://cdn.shopify.com/s/files/1/0554/9086/1383/files/men-4.jpg?v=1729930000"
          />
        </div>
      </section>
    </main>
  );
}
