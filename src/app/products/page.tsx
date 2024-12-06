import Link from "next/link";

const Products = () => {
  return (
    <div>
      <h1>Products List</h1>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
    </div>
  );
};

export default Products;
