// import React, { useState } from "react";
// import RestaurantButton from "./RestaurantButton";

// const Order = ({ orderType }) => {
//   const [orders, setOrders] = useState(0);

//   function orderOne() {
//     setOrders(count => count + 1);
//   }
//   return (
//     <li>
//       {orderType}: {orders}
//       <RestaurantButton handleClick={orderOne} />
//     </li>
//   );
// };

// export default Order;
import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(count => count + 1);
  }

  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;
