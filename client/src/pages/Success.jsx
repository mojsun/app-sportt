// import React, { useEffect } from "react";
// import { useMutation } from "@apollo/client";
// import Jumbotron from "../components/Jumbotron";
// import { ADD_ORDER } from "../utils/mutations";
// import { idbPromise } from "../utils/helpers";

// function Success() {
// const [addOrder] = useMutation(ADD_ORDER);

// useEffect(() => {
//   async function saveOrder() {
//     const cart = await idbPromise("cart", "get");
//     const products = cart.map((item) => item._id);

//     if (products.length) {
//       const { data } = await addOrder({ variables: { products } });
//       const productData = data.addOrder.products;

//       productData.forEach((item) => {
//         idbPromise("cart", "delete", item);
//       });
//     }

//     setTimeout(() => {
//       window.location.assign("/");
//     }, 3000);
//   }

//   saveOrder();
// }, [addOrder]);

//   return (
//     <div>
//       <Jumbotron>
//         <h1>Success!</h1>
//         <h2>Thank you for your purchase!</h2>
//         <h2>You will now be redirected to the home page</h2>
//       </Jumbotron>
//     </div>
//   );
// }

// export default Success;

import { useEffect } from "react";
// import { Jumbotron } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Main from "../layouts/Main/index";
import "./Contact.css";
import "./Success.css";
function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate redirection back to home page after 10 seconds
    setTimeout(() => {
      navigate("/", { replace: true }); // Replace current history entry with home page
    }, 10000); // Redirect after 10 seconds
  }, [navigate]);

  return (
    <div>
      <Main id="success-container">
        <section id="success-content">
          <h1>Success!</h1>
          <h2>Thank you for joining!</h2>
          <h2>You will now be redirected to the home page</h2>
        </section>
      </Main>
    </div>
  );
}

export default Success;
