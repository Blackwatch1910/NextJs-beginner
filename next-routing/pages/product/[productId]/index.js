import { useRouter } from "next/router";

const ProductDetails = () => {
    const router = useRouter();
    const id = router.query.productId;
    return <h1>Order Id number {id} </h1>
}

export default ProductDetails;