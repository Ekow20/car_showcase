
export const  fetchCars=async()=>{
    const headers={
		'X-RapidAPI-Key': '610c1784aemsh89611a85f5c1a2bp1adbb6jsnfb4a8c2bcb41',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response =await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {headers:headers})
    const data=await response.json()
    return data
}