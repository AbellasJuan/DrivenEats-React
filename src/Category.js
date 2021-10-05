import React from "react";
import styled from 'styled-components';
import Product from "./Product";


export default function Category({ title, products, changeQuantity }) {

  return (
    <Container>
      <h3>{title}</h3>

      <ul>

        {products.map((product, index) => 
            <Product 
                key={index}
                product={product}
                changeQuantity={changeQuantity}
             />)}
        
      </ul>
    </Container>
  );
}

const Container = styled.div`

 ul {
   display: flex;
   flex-wrap: nowrap;
   padding: 15px;
   overflow: scroll;
 }
`;

