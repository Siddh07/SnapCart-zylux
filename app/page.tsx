import { ChevronRight } from "lucide-react";
import { Nav } from "./nav/page";
import { CategoriesGrid } from "./product-categories/page";
import { ProductGrid, products } from "./products/page";
import { CarouselDemo } from "./slider/page";

export default function Home() {
  return (
    <div className="   ">
      <Nav />

      <div className="p-4">
        <section>
          <CarouselDemo />
        </section>

        {/* Categories */}
        <section className="py-8 container mx-auto">
          <h2
            className="text-[20px] leading-6 tracking-normal
 text-[#1A1A1A] mb-4   font-medium    "
          >
            Shop by Category
          </h2>

          {/*  category cards  */}
          <CategoriesGrid />
        </section>

        {/* Products */}
        <section className="py-8 container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[20px] leading-6 tracking-normal  ">
              Featured Products
            </h2>

            <h1 className=" flex text-[#d04002] hover:underline ">
              {" "}
              View All <ChevronRight />{" "}
            </h1>
            {/*  product grid */}
          </div>
          <div className="h-4" />
          <ProductGrid products={products} />
        </section>
      </div>
    </div>
  );
}
