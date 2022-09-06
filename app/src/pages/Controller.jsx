import { GetContentFilterPageQuery } from '../graphql/queries'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react';

const Controller = () => {

    const { url } = useParams();    
    const navigate = useNavigate();  
    //const { data: pages, isSuccess, isLoading, isError, error } = useQuery(["pages"], async () => await fetchData(GetContentFilterPageQuery, 'pages', {url: url}));   
    const { collection, isSuccess } = useFetch(url, GetContentFilterPageQuery, 'pages')
    console.log(collection)

    useEffect(() => {
        if (isSuccess) {
            const { collection, isSuccess } = useFetch(url, GetContentFilterPageQuery, 'pages')
            navigate(`/${url}`);
            console.log('ENTRO')
        }
    }, [url])
    
    
    
    return (
        <div>Hola</div>
    )
}

export default Controller