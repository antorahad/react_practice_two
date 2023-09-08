export default function Product({product}){
    return(
        <>
            <div className="singer-card">
                <h3>{product.name}</h3>
                <p>Color: {product.color}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
            </div>
        </>
    )
}