import Link from "next/link";

const Review = () => {
  return (
    <div>
      <h1>Review List</h1>
      <Link href="/review/1">Product 1</Link>
      <Link href="/products">Back</Link>
    </div>
  );
};

export default Review;
