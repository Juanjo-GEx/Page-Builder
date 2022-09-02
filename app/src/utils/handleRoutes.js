import { useQuery } from '@tanstack/react-query'
import fetchData from '../services/fetchData'
import { GetRoutesQuery } from '../graphql/HomeQueries'

export const getRoutes = () => {
    
    const routes = [];
    const { data: pages, isSuccess} = useQuery(["pages"], async () => await fetchData(GetRoutesQuery, 'pages'));
  
    if (isSuccess){  

        if (pages.length === 0){
            return routes
        }

        pages.forEach(page => {
            routes.push(page?.url);  
        });      
              
    }    

    return routes
}

export const checkCustomRoute = (routes, currentRoute) => {
    
    let isEqual = false;

    routes.forEach(route => {
        console.log(route, currentRoute)
        if(route === currentRoute){
            isEqual = true;
        }
    });

    return isEqual
}