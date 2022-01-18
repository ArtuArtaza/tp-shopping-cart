import { Link } from "react-router-dom"
import useLocalStorage from "../../hooks/useLocalStorage"
import { useStore } from "../../store/useStore"
import Icons from '../Icons'
import {useEffect} from 'react'
const Products = ({
	productsList = [],
}) => {

	const {productList,addProduct,setProductList} = useStore()
	const [productSavedList,setProductSavedList] = useLocalStorage("productlist",[])
	console.log(productList)
	/*useEffect(() => {
		productSavedList 
		? console.log('xD')
		: console.log('Theres nothing')
	},[])*/

	useEffect(() => {
		productSavedList ? setProductList(...productSavedList) : console.log('Empty')
	},[])
	return (
		<div>
			<ul style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3,1fr)',
				columnGap: '1rem',
				rowGap: '1rem',

			}}>
				{
					productsList.map((product) => (
						<li className="card" key={product.id}>
							<img className="card-img-top w-25 align-self-center" src={product.image} alt={product.title} />
							<div className="card-body">
								<h5 className="card-title">{product.title}</h5>
								<p className="card-text">{product.description}</p>
							</div>
							<div className="card-footer d-flex justify-content-between align-items-center">
								<span className="text-success">{`$${product.price}`}</span>
								<div>
									<Link to={`/products/:${product.id}`} className="btn btn-primary">Go to product</Link>
									<button onClick={async () => {
										 addProduct(product) 
										 setProductSavedList([productList])
									}}
										className="btn btn-success ms-2">
										+{<Icons size={1.2} icon={'ShoppingCart'} />}</button>
								</div>
							</div>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Products