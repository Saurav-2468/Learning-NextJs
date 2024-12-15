"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const navigate = useRouter();
  const handleClick = () => {
    navigate.push("/");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default OrderProduct;
