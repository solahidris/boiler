import WhileInViewAnimation from "./WhileInViewAnimation";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeInfiniteSlider = () => {

    const imageCarouselToDisplay = [
        "homepage_image_1.png", "homepage_image_2.png", "homepage_image_3.png", "homepage_image_4.png",
    ];

    return (
        <WhileInViewAnimation>
            <div>
                <Marquee direction="right">
                    {imageCarouselToDisplay.map((imageName, index) => (
                        <div key={index} className="flex h-[200px]">
                            <Image src={`/${imageName}`} alt="image" width={600} height={400} className="object-cover" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </WhileInViewAnimation>
    )
}

export default MarqueeInfiniteSlider;