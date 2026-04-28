import brand1 from "@/public/brand/brand1.png";
import brand2 from "@/public/brand/brand2.png";
import brand3 from "@/public/brand/brand3.png";
import brand4 from "@/public/brand/brand4.png";
import brand5 from "@/public/brand/brand5.png";
import brand6 from "@/public/brand/brand6.png";

import brand7 from "@/public/brand/brand7.png";
import brand8 from "@/public/brand/brand8.png";

import Image from "next/image";

const brandImages = [
  { src: brand1, alt: "brand1" },
  { src: brand2, alt: "brand2" },
  { src: brand3, alt: "brand3" },
  { src: brand4, alt: "brand4" },
  { src: brand5, alt: "brand5" },
  { src: brand6, alt: "brand6" },
  { src: brand7, alt: "brand7" },
  { src: brand8, alt: "brand8" },
];

function Brand() {
  return (
    <div className=" p-2  pb-10">
      <h2 className=" mb-2 text-lg font-semibold "> Shop by Brand</h2>

      <div className="grid grid-cols-4 gap-2  ">
        {brandImages.map((brand, index) => (
          <div
            key={index}
            className=" bg-white  rounded-xl flex items-center justify-center  hover:outline-2 hover:outline-[#ce4002] transition-all duration-300   py-1" >
            <Image src={brand.src} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
