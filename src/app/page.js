// import Image from "next/image";
import HeroSlider from "@/components/home/HeroSlider";
import CategoryCard from "@/components/home/CategoryCard";
import Banner from "@/components/common/Banner";
import Carousel from "@/components/home/Carousel";
import Newsletter from "@/components/home/Newsletter";

const BANNERS = [
  "https://engine.com.pk/cdn/shop/files/Website-Banner_482d3837-e6be-4837-b12f-e7df1b295187_3840x.jpg?v=1758106185",
  "https://engine.com.pk/cdn/shop/files/Artboard_2_ac38b68b-75b4-454f-865c-067f2c42de98_3840x.jpg?v=1757912904",
  "https://engine.com.pk/cdn/shop/files/Artboard_3_aace9569-5353-4670-b482-6a0812f47dee_3840x.jpg?v=1757845671",
  "https://engine.com.pk/cdn/shop/files/Artboard_4_8ae822e3-ac64-4eca-9de7-c93ad0d69f99_3840x.jpg?v=1757845669",
];

const MEN_SLIDES = [
  {
    href: "/products?category=clothing",
    imageSrc:
      "//engine.com.pk/cdn/shop/collections/Men_Sale_edfccb4a-7138-47b9-9330-4c9150ed305e.jpg?v=1759712503",
    alt: "Summer Sale",
    buttonText: "Summer Sale",
  },
  {
    href: "/products?category=clothing",
    imageSrc: "//engine.com.pk/cdn/shop/collections/Polo.jpg?v=1757855160",
    alt: "Polo Shirts",
    buttonText: "Polo Shirts",
  },
  {
    href: "/products?category=clothing",
    imageSrc:
      "//engine.com.pk/cdn/shop/collections/MT1056-YEL_4.jpg?v=1757855191",
    alt: "T-Shirts",
    buttonText: "T-Shirts",
  },
  {
    href: "/products?category=clothing",
    imageSrc:
      "//engine.com.pk/cdn/shop/collections/mu1002-navy_3.jpg?v=1757855216",
    alt: "Trousers",
    buttonText: "Trousers",
  },
  {
    href: "/products?category=clothing",
    imageSrc:
      "//engine.com.pk/cdn/shop/collections/MD1013-WHT_4.jpg?v=1757855239",
    alt: "Bottoms",
    buttonText: "Bottoms",
  },
  {
    href: "/products?category=clothing",
    imageSrc: "//engine.com.pk/cdn/shop/collections/Casual.jpg?v=1757855281",
    alt: "Casual Shirts",
    buttonText: "Casual Shirts",
  },
  {
    href: "/products?category=clothing",
    imageSrc:
      "//engine.com.pk/cdn/shop/collections/FE5006-BLU_2.jpg?v=1757855334",
    alt: "Suits",
    buttonText: "Suits",
  },
  {
    href: "/products?category=clothing",
    imageSrc:
      "//engine.com.pk/cdn/shop/collections/Men_Fragrance.jpg?v=1742895896",
    alt: "Fragrance",
    buttonText: "Fragrance",
  },
];

const WOMEN_SLIDES = [
  {
    href: "/collections/women-sale",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/women-sale.jpg?v=1729930000",
    alt: "Women Sale",
    buttonText: "Sale",
  },
  {
    href: "/collections/women-dresses",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/women-dresses.jpg?v=1729930000",
    alt: "Dresses",
    buttonText: "Dresses",
  },
  {
    href: "/collections/women-tops",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/women-tops.jpg?v=1729930000",
    alt: "Tops",
    buttonText: "Tops",
  },
  {
    href: "/collections/women-bottoms",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/women-bottoms.jpg?v=1729930000",
    alt: "Bottoms",
    buttonText: "Bottoms",
  },
];

const KIDS_MALE_SLIDES = [
  {
    href: "/collections/kids-male-sale",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/kid-male-sale.jpg?v=1729930000",
    alt: "Kids Male Sale",
    buttonText: "Sale",
  },
  {
    href: "/collections/kids-male-shirts",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/kid-male-shirts.jpg?v=1729930000",
    alt: "Shirts",
    buttonText: "Shirts",
  },
  {
    href: "/collections/kids-male-pants",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/kid-male-pants.jpg?v=1729930000",
    alt: "Pants",
    buttonText: "Pants",
  },
];

const KIDS_FEMALE_SLIDES = [
  {
    href: "/collections/kids-female-sale",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/kid-female-sale.jpg?v=1729930000",
    alt: "Kids Female Sale",
    buttonText: "Sale",
  },
  {
    href: "/collections/kids-female-dresses",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/kid-female-dresses.jpg?v=1729930000",
    alt: "Dresses",
    buttonText: "Dresses",
  },
  {
    href: "/collections/kids-female-tops",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0554/9086/1383/files/kid-female-tops.jpg?v=1729930000",
    alt: "Tops",
    buttonText: "Tops",
  },
];

async function fetchJewelrySlides() {
  // Fetch jewelry category from fakestoreapi
  const res = await fetch('https://fakestoreapi.com/products/category/jewelery', { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  // Map to slide shape expected by Carousel
  return data.map((p) => ({
    href: `/products?category=jewelery`,
    imageSrc: p.image,
    alt: p.title,
    buttonText: 'Shop Jewelry',
  }));
}

export default async function Home() {
  const jewelrySlides = await fetchJewelrySlides();

  return (
    <main className="min-h-screen">
      <Banner src={BANNERS[0]} alt={"Hero Section Banner"} />

      <section className="mx-auto sm:px-6 lg:px-2 py-8">
        <Carousel
          title="Men's Collection"
          description="Explore our latest men's fashion"
          slides={MEN_SLIDES}
        />
      </section>

      <section className="mx-auto py-8">
        <Banner src={BANNERS[1]} alt={"Hero Section Banner"} />
        <Carousel
          title="Featured Jewelry"
          description="Explore our jewelery collection"
          slides={jewelrySlides.length ? jewelrySlides : MEN_SLIDES}
        />
      </section>

      <section className="mx-auto py-8">
        <Banner src={BANNERS[2]} alt={"Hero Section Banner"} />
        <Carousel
          title="Men's Collection"
          description="Explore our latest men's fashion"
          slides={MEN_SLIDES}
        />
      </section>

      <section className="mx-auto py-8">
        <Banner src={BANNERS[3]} alt={"Hero Section Banner"} />
        <Carousel
          title="Men's Collection"
          description="Explore our latest men's fashion"
          slides={MEN_SLIDES}
        />
      </section>

      <section className="mx-auto py-8">
        <Newsletter />
      </section>
    </main>
  );
}
