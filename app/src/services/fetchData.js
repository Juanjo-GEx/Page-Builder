const graphQLAPI = import.meta.env.VITE_NEXT_PUBLIC_GRAPHQL;

const fetchData = async ( query, dataName, variables = {} ) => {
          
    
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(graphQLAPI, {
        headers,
        method: 'POST',
        body: JSON.stringify({
            query,
            variables
        })
    })
        
    const json = await res.json();

    if (json.errors) {
        throw new Error(json.errors);
    }
    
    return json.data[dataName];
}

export default fetchData;