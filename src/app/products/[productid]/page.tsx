import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    productid: string;
  }>;
}

const ProductDetails = async ({ params }: Props) => {
  const { productid } = await params;

  if (parseInt(productid) > 100) {
    notFound();
  }

  return (
    <div>
      <h1>Details about product: {productid}</h1>
      <Link href={`/products/${productid}/review/${productid}`}>Review</Link>
      <br />
      <Link href="/products">Back</Link>
    </div>
  );
};

export default ProductDetails;
