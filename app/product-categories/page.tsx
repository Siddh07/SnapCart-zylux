import Image from "next/image";
import Link from "next/link";

interface Category {
  name: string;
  slug: string;
  image?: string;
}

const categories: Category[] = [
  {
    name: "Fruits & Vegetables",
    slug: "fruits-vegetables",
    image: "/veg1.png",
  },
  { name: "Dairy & Eggs", slug: "dairy-eggs", image: "/dairy1.png" },
  { name: "Meat & Seafood", slug: "meat-seafood", image: "/meat1.png" },
  { name: "Beverages", slug: "beverages", image: "/beverage1.png" },
  { name: "Bakery", slug: "bakery", image: "/bakery1.png" },
];





export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col items-center"
    >
      {category.image && (
        <div className="mb-2  rounded-full  p-1 ring-2 ring-border
         transition-all duration-200 group-hover:ring-red-500">
          <Image
            src={category.image}
            alt={category.name}
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
        </div>
      )}

      <span className="text-[15.6px] font-normal text-[#1A1A1A] group-hover:text-red-500">
        {category.name}
      </span>
    </Link>
  );
}




export function CategoriesGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard key={category.slug} category={category} />
      ))}
    </div>
  );
}
