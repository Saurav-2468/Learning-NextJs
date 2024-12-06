import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  params: {
    productid: ReactNode;
  };
}

const ProductDetails = async ({ params }: Props) => {
  let { productid } = await params;
  return (
    <div>
      <h1>Details about product : {productid}</h1>
      <Link href={`/products/${productid}/review/${productid}`}>Review</Link> <br></br>
      <Link href="/products">Back</Link>
    </div>
  );
};

export default ProductDetails;
