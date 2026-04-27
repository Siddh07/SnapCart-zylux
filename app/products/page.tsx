import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  price: number;
  originalPrice: number;
  discount?: number;
  image: string;
  category: string;
  slug: string;
  rating: number;
  sold: number;
}

export const products: Product[] = [
  {
    name: "Fresh Apples",
    price: 3.99,
    originalPrice: 5.99,
    discount: 33,
    image: "/test.jpg",
    category: "Fruits & Vegetables",
    slug: "fresh-apples",
    rating: 4.5,
    sold: 150,
  },
  {
    name: "Fresh Bananas",
    price: 2.99,
    originalPrice: 4.99,
    discount: 40,
    image: "/test.jpg",
    category: "Fruits & Vegetables",
    slug: "fresh-bananas",
    rating: 3.7,
    sold: 24,

  },

  {
    name: "Dark Chocolate Bar",
    price: 2.99,
    originalPrice: 4.99,
    discount: 40,
    image: "/test.jpg",
    category: "Fruits & Vegetables",
    slug: "dark-chocolate-bar",
    rating: 3.7,
    sold: 24,
  },


  {
    name: "Mixed Nuts Premium",
    price: 2.99,
    originalPrice: 4.99,
    discount: 40,
    image: "/test.jpg",
    category: "Fruits & Vegetables",
    slug: "mixed-nuts-premium",
    rating: 3.7,
    sold: 24,
  },
];

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative flex flex-col items-center justify-center rounded-lg border bg-white p-4 transition-all hover:border-red-500 hover:shadow-lg"
    >
      <div className="absolute  top-0 right-0 flex items-center gap-1">
        {product.discount && (
          <span className="rounded-bl-sm rounded-tr-lg bg-[#ce4002] px-2 py-0.5 text-xs font-medium text-white">
            -{product.discount}%
          </span>
        )}
      </div>

      {product.image && (
        <Image
          src={product.image}
          alt={product.name}
          width={150}
          height={150}
          className="mb-4 h-40 w-40 object-contain"
        />
      )}

      <span className="text-[13]px font-normal text-[#1A1A1A] group-hover:text-red-500 mr-auto">
        {product.name}
      </span>

      <div className="mt-2 flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-red-600">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-xs text-gray-500 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>

        <div className="bg-[#ce4002] rounded-full  text-white p-1 hover:scale-110 ">
          <ShoppingBag />
        </div>
      </div>

      {product.rating && (
        <div className="mt-1 flex items-center gap-1 text-xs text-gray-500 mr-auto">
          <Star size={12} fill="#f59e0b" color="#f59e0b" />
          <span>{product.rating.toFixed(1)}</span>
          <span>({product.sold} sold) </span>
        </div>
      )}
    </Link>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
