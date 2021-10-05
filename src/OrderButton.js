export default function OrderButton (props) {
    
    const { categories } = props;
    const canFinisishOrder = checkIfAllCategoriesWereSelected(categories);
    
    return (
        <div class="fechar-pedido">
        <button class={ canFinisishOrder ? "habilitado" : ""} onClick={() => sendToZapZap(categories, canFinisishOrder)}>
        { canFinisishOrder ? "Fechar pedido" : "Selecione itens das 3 categorias"}
        </button>
    </div>
    );
}

function checkIfAllCategoriesWereSelected (categories) {
    const selectedCategories = categories.filter(category => {
        return category.products.find(product => product.quantity > 0)
    })
    return selectedCategories.length === categories.length;   
}

function sendToZapZap (categories, canFinisishOrder) {
    if (!canFinisishOrder) return;

    let message = "Olá, gostaria de fazer um pedido:\n\n";
    let total = 0;

    categories.forEach(category => {
        category.products
            .filter(product => product.quantity > 0)
            .forEach(product => {
                message += `- *${category.name}:* ${product.name} ${product.quantity > 1 ? `(${product.quantity}x)` : ''} \n\n`;

                total += product.price * product.quantity;
            })
    })

    message += `  *Total: ${total.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })}*`
    let encodeMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/5521986270774?text=${encodeMessage}`
}