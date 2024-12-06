import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  params: {
    productid: ReactNode;
  };
}

const ProductDetails = async ({ params }: Props) => {
  let paramsResolved = await params;
  return (
    <div>
      <h1>Details about product : {paramsResolved.productid}</h1>
      <Link href="/products">Back</Link>
    </div>
  );
};

export default ProductDetails;
