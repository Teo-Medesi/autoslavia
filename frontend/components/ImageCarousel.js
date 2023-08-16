"use client"
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
    return (
        <Carousel className="w-full bg-black" showArrows={true} stopSwipingHandler={true} showIndicators={true}>
            {images?.map((image, index) => {
                return (
                    <div key={index} className="min-h-[50vh]">
                        <img src={image.url} />
                    </div>
                )
            })}
        </Carousel>
    )
}

export default ImageCarousel;