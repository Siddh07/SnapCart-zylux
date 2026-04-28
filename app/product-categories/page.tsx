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
      className="group flex flex-col items-center   "
    >
      {category.image && (
        <div className="mb-2  rounded-full   ring-2 ring-border
         transition-all duration-200 group-hover:ring-red-500 w-18">
          <Image
            src={category.image}
            alt={category.name}
            width={70}
            height={70}
            className=" "
          />
        </div>
      )}

      <span className="text-[11px]  text-[#1A1A1A] group-hover:text-red-500 
      text-center ">
        {category.name}

      </span>
    </Link>
  );
}




export function CategoriesGrid() {
  return (
<div className="flex flex-row gap-4 pt-1  pr-1 ">
      {categories.map((category) => (
        <CategoryCard key={category.slug} category={category} />
      ))}
    </div>
  );
}
