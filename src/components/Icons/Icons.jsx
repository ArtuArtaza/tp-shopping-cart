

const Icons = ({size,icon}) => {
	return(
		<>
		{
			icon === 'Home' 
			? <HomeIcon size={size}/>
			: icon === 'Products' 
			? <CategoriesIcon size={size}/>
			: <ShoppingCartIcon size={size}/>
		}
		</>
	)

}



const HomeIcon = ({size}) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" 
		width={`${size}rem`} height={`${size}rem`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
		</svg>
	)
}


const CategoriesIcon = ({size}) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" 
		width={`${size}rem`} height={`${size}rem`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
		</svg>
	)
}

 const ShoppingCartIcon = ({size}) => {
 	return(
 		<svg xmlns="http://www.w3.org/2000/svg" 
 		width={`${size}rem`} height={`${size}rem`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
		</svg>
 	)
 }

export default Icons