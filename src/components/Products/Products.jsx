
const Products = ({
	productsList = [],
}) => {
	return (
		<div>
			<ul>
				{
					productsList.map((product) => (
						<li className="card" key={product.id}>
							<img className="card-img-top" src={product.img} alt={product.title}/>
							<div className="card-body">
								<h5 className="card-title">{product.title}</h5>
								<p className="card-text">{product.description}</p>
							</div>
							<div className="card-footer">
								<span className="text-success">{`$${product.price}`}</span>
								<button className="btn-success">Buy Now!</button>
							</div>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Products