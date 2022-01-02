
const Products = ({
	productsList = [],
}) => {
	return (
		<div>
			<ul style={{
				display :'grid',
				gridTemplateColumns: 'repeat(3,1fr)',

			}}>
				{ 
					productsList.map((product) => (
						<li className="card" key={product.id}>
							<img className="card-img-top w-25 align-self-center" src={product.image} alt={product.title}/>
							<div className="card-body">
								<h5 className="card-title">{product.title}</h5>
								<p className="card-text">{product.description}</p>
							</div>
							<div className="card-footer d-flex justify-content-between align-items-center">
								<span className="text-success">{`$${product.price}`}</span>
								<button className="btn btn-success">Buy Now!</button>
							</div>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Products