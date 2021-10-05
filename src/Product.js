import React from 'react';

export default function Product(props) {
  const { product, changeQuantity } = props;

  const { name, description, price, imageUrl, quantity } = product;

  function selectedProduct() {
    if (quantity === 0) {
      changeQuantity(product, 1);
    }
  }
 
  function incrementQuantity() {
    changeQuantity(product, quantity + 1);
  }

  function decrementQuantity() {
    changeQuantity(product, quantity - 1);
  }
  return (
    <li
      class={quantity > 0 ? 'opcao selecionada' : 'opcao'}
      onClick={selectedProduct}
    >
      <img src={imageUrl} alt="" />
      <h4>{name}</h4>
      <p class="descricao">{description}</p>
      <div class="container-preco">
        <p class="preco"> R$ {price.toFixed(2)}</p>
        {quantity > 0 ? (
          <div class="container-qtd">
            <button class="btn-menos" onClick={decrementQuantity}>
              -
            </button>
            <span>{quantity}</span>
            <button class="btn-mais" onClick={incrementQuantity}>
              +
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </li>
  );
}