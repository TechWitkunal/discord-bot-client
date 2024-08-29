import Card from "@/myComponent/CardComponent"
import PageTemplate from "@/myComponent/PageTemplate"
import { Request } from "@/Request";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const Shop = () => {
    // const { slug } = useParams();
    const location = useLocation();
    const [userProduct, setUserProduct] = useState([]);

    useEffect(() => {
        const func = async () => {
            const slug = location.pathname.split('/')[1];
            console.log(slug);

            // let response = await Request({ "apiPath": "/v1/product/user-product", "body": { slug: slug  }, "title": "Get User Data" });
            // console.log(response)
            const response = await Request({
                apiPath: "/v1/product/user-product",
                body: { "slug": `${slug}` }, // Ensure `slug` has a value
                method: 'GET', // Or the method you need
                title: "Get User Data",
                authToken: 'your-auth-token' // If required
            });

            console.log(response.data[0].productDetails);
            setUserProduct(response.data[0].productDetails);

            // apiPath, body, method = 'POST', authToken, title, authSlice
        }

        func();


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <PageTemplate>
                <div className="w-[100%] h-[95vh] flex items-center flex-wrap px-[10px] gap-[10px]">
                    {/* userProduct.map(() => {}) */}
                    {userProduct && userProduct.map((item, ) => (
                        <>
                            <Card key={item.productId} details={item.details} price={item.price} name={item.name} image={item.image} productId={item.productId} />
                        </>
                    ))}
                    {/* <Card /> */}
                    {/* <Card /> */}
                </div>
            </PageTemplate>

        </>
    )
}

export default Shop
