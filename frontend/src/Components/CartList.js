import React/* , { useContext, useEffect } */ from "react";
/* import CartContext from "../Context/Cart/CartContext"; */

const CartList = () => {
  return(
    <div></div>
  );
/*   const cartContext = useContext(CartContext);

  useEffect(() => {
    cartContext.getCart();
  }, []);

  console.log(cartContext, 'cartContext')
  console.log(cartContext.cart.items, 'cartContext.cart')

  const testingProduct = {
    dish: "607c84a92388fa08ec814e2e",
    quantity: 2,
    size: "md",
    title: "Pizza Muzarella",
    unit_price: 600,
  }

  return (
    <div className="list-group h-100">
      <a key={cartContext.cart.total_amount} href="#!" onClick={() => cartContext.addCartItem(testingProduct)}>
        <p style={{color:"white"}}>Add to Cart</p>
      </a>
      {cartContext.cart.items ? cartContext.cart.items.map((item) => 
      <div style={{color:"white"}}> 
        <p>Title: {item.title}</p>
        <p>Size: {item.size}</p>
        <select name="size" id="size" onChange={() => cartContext.updateCartItemQuantity(item.dish, 'increment')}>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        <p>Unit Price: {item.unit_price}</p>
        <p>Quantity: {item.quantity}</p>
        <span onClick={() => cartContext.updateCartItemQuantity(item.dish, 'decrement')}>Decrement </span>
        <span onClick={() => cartContext.updateCartItemQuantity(item.dish, 'increment')}>Increment</span>
        <p onClick={() => cartContext.deleteCartItem(item.dish)}>Delete</p>
      </div>
      ) : ''}
      {cartContext.cart.total_amount ?
        <a key={cartContext.cart.total_amount} href="#!" onClick={() => cartContext.updateCartItemQuantity()} >
            <p style={{color:"white"}}>{cartContext.cart.total_amount}</p>
        </a>
      : null }
    </div>
  ); */
};

export default CartList;