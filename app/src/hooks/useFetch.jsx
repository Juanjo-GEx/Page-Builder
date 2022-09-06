import { useQuery } from '@tanstack/react-query'
import fetchData from '../services/fetchData'

const useFetch = (url, query, dataname) => {

    const { data: collection, isSuccess, isLoading, isError, error } = useQuery([dataname], 
                                                                        async () => await fetchData(query, dataname, {url: url}));
    console.log(collection)
    
    if (isLoading) return 'Cargando…'    
    if (isError) return `Error: ${error}`

    return { collection, isSuccess }
}

export default useFetch