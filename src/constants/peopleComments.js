export const peopleComments = (rate,people) => {
	if(rate > 4){
		return (`${people} people says that this product is one of the bests!`)
	}
	if(rate < 4 && rate > 3) {
		return (`${people} people says that this product is fine.`)
	}

	return (`${people} people don't recommend this product!.`) 

}