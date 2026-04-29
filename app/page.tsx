import { ChevronRight } from "lucide-react";
import { LatestArticles } from "./article/page";
import Brand from "./brands/page";
import ContactCard from "./folder/page";
import { CategoriesGrid } from "./product-categories/page";
import { ProductGrid, products } from "./products/page";
import { CarouselPlugin } from './review/page';
import { CarouselDemo } from "./slider/page";


export default function Home() {
  return (
    <div className="relative min-h-screen">
     

      <div className="p-4">
        <section>
          <CarouselDemo />
        </section>

   
        <section className="py-8 container mx-auto">
          <h2
            className="text-[20px] leading-6 tracking-normal
 text-[#1A1A1A] mb-4   font-medium    "
          >
            Shop by Category
          </h2>

      
          <CategoriesGrid />
        </section>

     
        <section className="py-8 container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[20px] leading-6 tracking-normal  ">
              Featured Products
            </h2>

            <h1 className=" flex text-[#d04002] hover:underline ">
              {" "}
              View All <ChevronRight />{" "}
            </h1>
          </div>
          <div className="h-4" />
          <ProductGrid products={products} />
        </section>


  <Brand />
 

<LatestArticles />


      </div>

     <CarouselPlugin />
<ContactCard />


    </div>
  );
}
