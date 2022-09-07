import Section from '../components/Section'
import { mountTemplate } from '../utils/handleTemplates'
import { Template } from '../models/template.class'

const DinamicPage = ({ collection, isSuccess }) => {
    
    const handleTemplate = (page) => {
        const newTemplate = new Template(page.template_builder.key,
                                        page.template_builder.value,
                                        page.custom_css);
        
        return mountTemplate(newTemplate);
    }

    return (
        <main className="m-10" >
            { isSuccess && collection.map(page =>
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