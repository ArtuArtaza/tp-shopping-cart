import {useState, useEffect} from 'react'


const useFetch = (url) => {

	const [isLoading,setLoading] = useState(true);
	const [data, setData] = useState()
	
	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(data => {
			setData(data)
			setLoading(false)
		})
	},[url])

	return {data,isLoading}
}