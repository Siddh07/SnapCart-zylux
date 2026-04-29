"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import brand1 from "@/public/brand/brand1.png";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

type Review = {
  id: number;
  text: string;
  name: string;
  rating: number;
  avatar: typeof brand1;
};

const reviews: Review[] = [
  {
    id: 1,
    text: "Second time ordering here  ",
    name: "Nathan Carter",
    rating: 4,
    avatar: brand1,
  },
  {
    id: 2,
    text: "Absolutely love the quality!",
    name: "Sarah Mills",
    rating: 5,
    avatar: brand1,
  },
  {
    id: 3,
    text: "Good experience overall.",
    name: "James Owen",
    rating: 3,
    avatar: brand1,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill={i < rating ? "#f5a623" : "none"}
          stroke={i < rating ? "#f5a623" : "#ccc"}
          strokeWidth={1.5}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <div className="relative bg-white w-full px-4 py-6 ">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-gray-900">
          Customer Reviews
        </h2>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="basis-3/4">
              <div className="p-1">
                <Card className="border-0 shadow-none  bg-[#f2f2f2]">
                  <div className="relative  ">
                    <p className="text-[15px] text-gray-800  pl-5 leading-relaxed mb-2 max-w-[88%]">
                      {review.text}
                    </p>

                    <div className="flex items-center gap-3 pl-5 pt-5">
                      <div className="relative w-11 h-11  ">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="rounded-full object-cover   border-2 border-gray-200"
                        />
                      </div>
                      <div>
                        <p className="text-[15px] font-medium text-gray-900">
                          {review.name}
                        </p>
                        <StarRating rating={review.rating} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="right-0 bg-[#e8521a] hover:bg-[#c94414] text-white border-0 my-0.2" />
      </Carousel>
    </div>
  );
}
