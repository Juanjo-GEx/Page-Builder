import { useQuery } from '@tanstack/react-query'
import fetchData from '../services/fetchData'
import { GetPageQuery } from '../graphql/HomeQueries'
import Section from '../components/Section'

const Home = () => {
  
  const { data: pages, isSuccess, isLoading, isError, error } = useQuery(["pages"], async () => await fetchData(GetPageQuery, 'pages'));
  
  if (isLoading) return 'Cargando…'
  if (isError) return `Error: ${error}`
  
  return (
    <main className="m-10">
      <h1 className="text-center pb-10 mb-10 border-b border-b-slate-500">{pages.title}</h1>
      <div className="flex justify-between items-start gap-4 w-full">
        { isSuccess && pages.section_builder.map(section => 
          <Section 
            key={section.id}
            title={section.sections_id.title}
            cod_section={section.sections_id.cod_section}
            content={section.sections_id.content_builder}
          />
        )}
      </div>
    </main>
  )
}

export default Home