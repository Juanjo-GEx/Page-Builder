import { useQuery } from '@tanstack/react-query'
import fetchData from '../services/fetchData'
import { GetTemplatesQuery } from '../graphql/HomeQueries'
import { formatCSS } from './formatCSS'

export const createEnumTemplate = () => {
    
    const TEMPLATES = {};
    const { data: templates, isSuccess} = useQuery(["templates"], async () => await fetchData(GetTemplatesQuery, 'templates'));
    
    const handleTemplate = (item) => {
        let key = item.key;
        let value = item.value;
        TEMPLATES[key] = value;
    }

    if(isSuccess){
        templates.forEach(item => 
            handleTemplate(item))
    }

    return TEMPLATES;
}

export const mountTemplate = (typeTemplate, TEMPLATES, customCSS='') => { 
  
  let formatedCSS = formatCSS(customCSS);

    switch (typeTemplate) {
        case TEMPLATES.Column:
          return `flex flex-col justify-start items-center gap-4 w-full pt-10 ${formatedCSS}`
        case TEMPLATES.Row: 
          return `flex justify-between items-start gap-4 w-full pt-10 ${formatedCSS}`
        default:
          return `${formatedCSS}`;
    }
}