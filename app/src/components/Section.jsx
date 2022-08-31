import Content from './Content'

const Section = ({ title, cod_section, content }) => {

  return (
    <section className="flex flex-col items-center justify-center py-10 w-full bg-slate-100">
        <h2 className="border-b border-b-slate-500 mb-6 w-full text-center">{title}</h2>
        <section className="flex flex-col items-center justify-center w-full">
            {content.map(c => 
                <Content 
                    key={c.id}
                    title={c.components_id.title}
                    content={c.components_id.content}
                />
            )}
        </section>        
    </section>
  )
}

export default Section