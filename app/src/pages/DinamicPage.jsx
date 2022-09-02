import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import fetchData from '../services/fetchData'
import { GetContentFilterPageQuery } from '../graphql/queries'
import Section from '../components/Section'
import { mountTemplate } from '../utils/handleTemplates'
import { Template } from '../models/template.class'

const DinamicPage = () => {
    
    const { url } = useParams();    
    const { data: pages, isSuccess, isLoading, isError, error } = useQuery(["pages"], async () => await fetchData(GetContentFilterPageQuery, 'pages', {url: url}));
        
    const handleTemplate = (page) => {
        const newTemplate = new Template(page.template_builder.key,
                                        page.template_builder.value,
                                        page.custom_css);
        
        return mountTemplate(newTemplate);
    }

    if (isLoading) return 'Cargando…'
    if (isError) return `Error: ${error}`
    
    return (
        <main className="m-10">
            { isSuccess && pages.map(page =>
                <div key={page.id}>
                    <h1 className="text-center mb-10">{page.title}</h1>
                    <div className={handleTemplate(page)}>
                        { isSuccess && page.section_builder.map(section => 
                            <Section 
                                key={section.id}
                                title={section.sections_id.title}
                                cod_section={section.sections_id.cod_section}
                                content={section.sections_id.content_builder}
                            />
                        )}
                    </div>
                </div>
            )}      
        </main>
    )
}

export default DinamicPage