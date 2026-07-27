'use client'

import {
  Carousel as CustomCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselProps {
    images: string[];
    setInspectedImage: (image: string | null) => void;
}


export function Carousel({images, setInspectedImage}: CarouselProps) {
  return (
    <CustomCarousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              {/* <Card> */}
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                    <img src={image} onClick={() => setInspectedImage(image)}></img>
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
