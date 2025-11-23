import * as React from "react"

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel as CustomCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselProps {
    images: string[];
}


export function Carousel({images}: CarouselProps) {
  return (
    <CustomCarousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              {/* <Card> */}
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                    <img src={image}></img>
                {/* </CardContent> */}
              {/* </Card> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CustomCarousel>
  )
}
