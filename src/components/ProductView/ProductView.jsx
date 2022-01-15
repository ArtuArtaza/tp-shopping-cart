import { useStore } from "../../store/useStore"
import {useParams} from 'react-router-dom'
import {peopleComments} from '../../constants/peopleComments'
import Icons from '../Icons'
const ProductView = ({
    data
}) => {
    const {id} = useParams();
    const {addProduct} = useStore()
    const idParsed = parseInt(id.replace(':',''));
    const product = data? data.find((item) => item.id === idParsed) : undefined
    const peopleSays = peopleComments(product.rating.rate,product.rating.count)
    console.log(product);
    return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">
                        {product.title}
                    </h4>
                    <img style={{
                        width:'7rem',
                    }} src={product.image} alt="img"/>
                </div>
                <div className="card-body d-flex justify-content-center">
                    <p className="w-25">
                        {product.description}
                    </p>
                </div> 
                <div className="card-footer">
                        <h6>
                            {peopleSays}
                        </h6>
                        <button onClick={() => addProduct(product)}
                        className="btn btn-success ms-2">
                        + Add to Shopping Cart {<Icons size={1.2} icon={'ShoppingCart'} />}</button>
                </div>
            </div>
    )
}

export default ProductView