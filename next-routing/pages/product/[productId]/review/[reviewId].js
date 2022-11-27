import { useRouter } from "next/router";

const ReviewDetails = () => {
    const router = useRouter();
    const { reviewId, productId } = router.query;
    return (
        <h1>humra review {reviewId} for ee wala product {productId}</h1>
    )
}

export default ReviewDetails;