import { Button, message } from "antd";
import { useState } from "react";
import { addToCart } from "../../services/products";

const AddToCartButton = ({ item }) => {
  const [loading, setLoading] = useState(false);

  const addProductToCart = () => {
    setLoading(true);
    addToCart(item.id)
      .then(res => {
        message
          .success(`${item.title} has been added to the shopping cart`);
      });
      setLoading(false);
  };

  return (
    <Button
      type='primary'
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to cart
    </Button>
  )
};

export default AddToCartButton;