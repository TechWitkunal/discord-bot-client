/* eslint-disable react/prop-types */
import "../css/card.css"; // for the keyframes animation
import { Badge, Image } from 'antd';
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react";


const CardComponent = ({ name, details, image, productId, price }) => {

    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <div className="m-[2rem]">

            <Badge count={productId}>
                <div className="main-card-div bg-white w-[20rem] h-[26rem] overflow-auto rounded-lg relative">
                    {/* <img className="w-full h-[14rem] rounded-tr-lg rounded-tl-lg border-2 border-dotted border-black" src="https://plus.unsplash.com/premium_photo-1668383778556-0efac06c34af?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                    {/* <div className="text-[#535766] pl-[1rem]"><b>ID</b> - {productId}</div> */}
                    <div className="image-container h-[15rem]">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full max-w-xs"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                        >
                            <CarouselContent>
                                {image && image.map((item, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex items-center justify-center p-6 aspect-square">
                                                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                                    <Image

                                                        src={item}
                                                    />
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
                    <h2 className="text-[19px] pl-[1rem] mt-[2rem] my-[1rem] font-bold leading-none text-[#282c3f] mb-[6px] overflow-hidden text-ellipsis whitespace-nowrap"><b>Name</b> -{name}</h2>
                    <p className="text-[#535766] pl-[1rem]"><b>Details</b> - {details}</p>
                    {/* <div className="absolute"> */}
                    <h2 className="text-[17px] pl-[1rem] my-[1rem] font-bold leading-none text-[#282c3f] mb-[6px] overflow-hidden text-ellipsis whitespace-nowrap absolute bottom-[5px]"><b>Price</b> - Rs. {price}</h2>
                    {/* </div> */}
                </div>
            </Badge>
        </div>
    )
}

export default CardComponent
