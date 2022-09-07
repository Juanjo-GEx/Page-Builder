import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { GetContentPagesQuery, GetContentFilterPageQuery } from '../graphql/queries';
import fetchData from '../services/fetchData'
import DinamicPage from './DinamicPage';

const Controller = () => {

    const { url } = useParams(); 
    let filteredCollection = [];
    //Realizar la gestión de estado con un manejador de estado global para que cargue la página inicialmente
    const [collection, setCollection] = useState(filteredCollection)
    
    //const { data: initialPage, isSuccess: initialSuccess } = useQuery(["pages"], async () => await fetchData(GetContentFilterPageQuery, 'pages', {url: url}));
    const { data: pages, isSuccess, isLoading, isError, error } = useQuery(["pages"], async () => await fetchData(GetContentPagesQuery, 'pages'));   
    
    const handlePages = () => {
        console.log(collection)
        if (pages !== undefined) {
            pages.forEach(page => {
                if(url === page.url){
                    filteredCollection.push(page)
                }
            });
            setCollection(filteredCollection);
        }
    }

    useEffect(() => {
        handlePages();  
        console.log('INICIO')
        return () => {
            filteredCollection = [];
        }            
    }, [url]);

    if (isLoading) return 'Cargando…'    
    if (isError) return `Error: ${error}`
    
    return (
        <div>
            {isSuccess && <DinamicPage collection={collection} isSuccess={isSuccess}/>}
        </div>        
    )
}

export default Controller