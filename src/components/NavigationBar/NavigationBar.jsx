import {Menu} from '../../constants/Menu.js'
import Icons from '../Icons'
const NavigationBar = ({
	cartCounter,
	setCartCounter,
}) => {
	return (
		<nav className="navbar">
			<ul className="navbar-nav d-flex flex-row justify-content-end border-bottom w-100">
				{
					Menu.map((item) => (
						<li className="nav-item mx-3 p-2 border-bottom border-primary" key={item.name}>
							<Icons size={2} icon={item.name}/>
							<span>{item.name}</span>
							{
								item.name === 'Shopping Cart' 
								? <span className="badge bg-danger rounded m-2">1</span>
								: ''
							}
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default NavigationBar