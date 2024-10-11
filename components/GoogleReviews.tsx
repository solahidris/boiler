import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Review {
  author_name?: string;
  author_url?: string;
  language?: string;
  original_language?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
  translated?: boolean;
}

const GoogleReviews = ({ reviews }: { reviews: Review[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="py-8 px-4 lg:px-[100px] lg:h-[342px] flex flex-col gap-8 lg:gap-4 w-full justify-center items-center">
      {reviews && (
        <div>
          <Carousel
            plugins={[plugin.current as any]}
            className="w-full max-w-[100vw] lg:max-w-[80vw] lg:px-[40px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="flex items-center">
                  <div className="p-1">
                    <Card className="bg-transparent border-0 shadow-none">
                      <CardContent className="flex flex-col gap-4 items-center justify-center p-6">
                        <p className="text-center w-full">{review?.text}</p>
                        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                          <div className="flex gap-2 lg:gap-4">
                            <span className="font-bold primary-color">
                              {review?.rating}
                            </span>
                            <div className="flex">
                              {review?.rating &&
                                Array.from({
                                  length: Math.round(review.rating),
                                }).map((_, starIndex) => (
                                  <StarIcon
                                    key={starIndex}
                                    className="primary-color-fill primary-color"
                                  />
                                ))}
                            </div>
                          </div>
                          <div className="flex gap-4 items-center">
                            <Image
                              src="/logo_google.png"
                              alt="logo_google"
                              width={400}
                              height={400}
                              className="max-w-[88px]"
                            />
                            <span>{`Customer Reviews`}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default GoogleReviews;
