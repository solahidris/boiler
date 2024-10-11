import { StarIcon } from "lucide-react";
import Image from "next/image";

const GoogleReviewsSimple = () => {

    const review = {
        text: "Our dedication to holistic and preventive care has earned us your trust and appreciation",
        rating: 4.6,
    }

    // Round off the rating to the nearest integer
    const roundedRating = Math.round(review.rating);

    return (
        <div className="h-[242px] flex flex-col gap-2 w-full justify-center items-center">
            <p>{review.text}</p>
            <div className="flex gap-4 justify-center items-center">
                <span className="font-bold text-primary-color">{review.rating}</span>
                <div className="flex">
                    {Array.from({ length: roundedRating }).map((_, index) => (
                        <StarIcon key={index} className="text-primary-color-fill text-primary-color" />
                    ))}
                </div>
                <Image src="/logos/logo_google.png" alt="logo_google" width={400} height={400} className="max-w-[88px]"/>
                <span>{`Customer Reviews`}</span>
            </div>
        </div>
    )
};

export default GoogleReviewsSimple;