import { useStore } from "../../store/useStore"

const ShoppingCart = () => {
    const {productList,addProduct,removeProduct} = useStore()
    
    return (
        <div className="card text-start">
            <div className="card-header">
                <h2 className="card-title">Shopping Cart</h2>
            </div>
            <div className="card-body">
                <ul className="card">
                {
                    productList.map((product) => ( 
                        <div className="card">
                            <div className="card-header">
                                <h6 className="card-title">{product.title}</h6>
                            </div>
                            <div className="card-body d-flex flex-row">
                                <div className="w-25 d-flex justify-content-center">
                                    <img className="w-50" src={product.image} 
                                    alt={`${product.title}-img`}/>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <p>{product.description}</p>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary mx-2" onClick={() => removeProduct(product)}>-</button>
                                        <span className="align-self-center">{product.amount}</span>
                                        <button className="btn btn-primary mx-2" onClick={() => addProduct(product)}>+</button>
                                        <span className="text-success align-self-center border border-success p-2 rounded">
                                            {`$${product.price * product.amount}`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    ))
                }
                </ul>
            </div>
            <div className="card-footer">
                <span className="bg-success">
                    
                </span>
            </div>
        </div>
    )
}

export default ShoppingCart