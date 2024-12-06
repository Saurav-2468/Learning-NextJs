import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  params: {
    productid: ReactNode;
  };
}

const Review = async ({ params }: Props) => {
  let paramsResolved = await params;
  return (
    <div>
      <h1>Review about product : {paramsResolved.productid}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi harum ullam nam numquam
        assumenda deleniti perferendis soluta maiores modi necessitatibus alias consequuntur,
        tenetur sed accusamus recusandae neque sit vitae ratione.
      </p>
      <Link href="/products">Back</Link>
    </div>
  );
};

export default Review;
