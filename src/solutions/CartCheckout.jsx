import React from "react";

const CartCheckout = ({ name, group }) => {
  return (
    <main className="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img
          class="activator"
          src="https://underarmour.scene7.com/is/image/Underarmour/SS20_Digital_TRN_GTE_NewColors_Site_2_1?qlt=75&fmt=jpg&wid=1440&op_sharpen=1&hei=720&"
        />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          User View<i class="material-icons right">more_vert</i>
        </span>
        <p>
          Thank you {name} for verifying your {group} status with ID.me.
        </p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          Card Title<i class="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
      <div class="card-action">
        <a href="#">User View</a>
        <a href="#">ID.me Passes Back</a>
        <a href="#">Partner Receives</a>
        {/* <a href="#">Cart/Checkout</a>
        <a href="#">Within Account</a>
        <a href="#">In-Store</a>
        <a href="#">Landing Page</a>
        <a href="#">SSO</a>
        <a href="#">EPCS</a> */}
      </div>
    </main>
  );
};

export default CartCheckout;
