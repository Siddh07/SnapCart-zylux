"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import * as React from "react"

import { CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"


const slides = [
  {
    image: "/slides/slide1.png",
    texth1: "Fresh Arrivals",
    texth2: "Get the best quality groceries",
  },
  {
    image: "/slides/slides2.png",
    texth1: "Big Sale Today",
    texth2: "Up to 50% off on vegetables",
  },
];


export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative  w-[550px] mx-11"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent >
{slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="">
       
                <CardContent className="flex items-center   relative h-[300px] rounded-2xl overflow-hidden      "> 
               <Image src={slide.image} alt={`Slide ${index + 1}`} fill className=" object-cover rounded-md" />
                <div className="  pl-8 pt-25   absolute top-0 left-0 w-full h-full flex flex-col   text-white">
                  <h1 className="text-2xl font-bold">{slide.texth1}</h1>
                  <p className="text-lg mt-2">{slide.texth2}</p>
                  <button className="mt-2 px-4 py-2 bg-[#ce4002] text-white rounded hover:transition-transform hover:scale-105 w-fit">
                    Shop Now
                  </button>
                </div>
                </CardContent>
           
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>


      {/* <CarouselPrevious />
      <CarouselNext /> */}

    </Carousel>
  )
}
