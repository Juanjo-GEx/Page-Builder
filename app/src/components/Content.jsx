const Content = ({ title, content }) => {
    
  return (
    <div className="w-full flex flex-col items-center justify-center pb-6">
        <h3>{title}</h3>
        {content.blocks.map(block => 
            <p key={block.id}>{block.data.text}</p>
        )} 
    </div>
  )
}

export default Content





