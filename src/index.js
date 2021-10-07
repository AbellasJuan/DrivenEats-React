import ReactDOM from 'react-dom';
import Category from './Category';
import Header from './Header';
import OrderButton from './OrderButton';
import React from 'react';

//esta é a div mãe. As divs filhas alteram os valores e passam os valores pra ela mandar pro 'OrderButton'

function App() {
    const [categories, setCategories] = React.useState(initalCategories);

    function changeQuantity (product, newQuantity) {
        product.quantity = newQuantity;
        setCategories([...categories])
    }
    return (
        <>
            <Header />
           {categories.map((category, index) => <Category key={index} title={category.title} products={category.products} changeQuantity={changeQuantity}/>)}
            <OrderButton categories={categories}/>
        </>
    );
}

const initalCategories = [
    { 
        title: 'Primeiro, seu prato',
        name: 'Prato',
        products: [
            {
                id: 1,
                name: "Frango Fit",
                description: "Acompanha batatas e salada",
                price: 16.90,
                quantity: 0,
                imageUrl: "images/frangoFit.jpeg"
            },
            {
                id: 2,
                name: "Salmão",
                description: "Acompanha salada e batatas cozidas",
                price: 19.00,
                quantity: 0,
                imageUrl: "images/salmao.jpeg"
            },
            {
                id: 3,
                name: "Frango Grelhado",
                description: "Acompanha batata e salada",
                price: 14.90,
                quantity: 0,
                imageUrl: "images/frangoGrelhado.jpeg"
            }
        ]
    },
    { 
        title: 'Agora, sua bebida',
        name: 'Bebida',
        products: [
            {
                id: 4,
                name: "Suco de laranja",
                description: "Temos 300ml, 500ml e 700ml",
                price: 11.90,
                quantity: 0,
                imageUrl: "images/sucoDeLaranja.jpeg"
            },
            {
                id: 5,
                name: "Suco de Morango",
                description: "Temos 300ml, 500ml e 700ml",
                price: 5.90,
                quantity: 0,
                imageUrl: "images/vitaminaDeMorango.jpeg"
            },
            {
                id: 6,
                name: "Limonada",
                description: "Temos 300ml, 500ml e 700ml",
                price: 8.90,
                quantity: 0,
                imageUrl: "images/limonada.jpeg"
            }
        ] 
    },
    { 
        title: 'Por fim, sua sobremesa',
        name: 'Sobremesa',
        products: [
            {
                id: 7,
                name: "Petit Gateau",
                description: "Chocolate, doce de leite ou baunilha",
                price: 14.90,
                quantity: 0,
                imageUrl: "images/sobremesaPetit.jpeg"
            },
            {
                id: 8,
                name: "Pavê",
                description: "Com certeza é pacumê",
                price: 14.90,
                quantity: 0,
                imageUrl: "images/sobremesaPaveBolado.jpeg"
            },
            {
                id: 9,
                name: "Torta Alemã",
                description: "Torta diretamente da Alemanha",
                price: 14.90,
                quantity: 0,
                imageUrl: "images/sobremesaTortaAlema.jpeg"
            }
        ]   
    },
]

ReactDOM.render(<App />, document.querySelector(".root"));