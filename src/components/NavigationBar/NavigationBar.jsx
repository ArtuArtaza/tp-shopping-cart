import {Menu} from '../../constants/Menu.js'
import Icons from '../Icons'
import { Link } from 'react-router-dom'
import {useStore} from '../../store/useStore'
const NavigationBar = ({

}) => {
	const {productList} = useStore()
	return (
		<nav className="navbar h-20">
			<ul className="navbar-nav d-flex flex-row justify-content-end border-bottom w-100">
				{
					Menu.map((item) => (
						<li className="nav-item mx-3 p-2 border-bottom border-primary" key={item.name}>
							<Icons size={2} icon={item.name}/>
							<Link className="text-decoration-none" to={item.path}>{item.name}</Link>
							{
								item.name === 'Shopping Cart' 
								? <span className="badge bg-danger rounded m-2">{productList.length}</span>
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