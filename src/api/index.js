
export async function fecthRecipes (filter){
    
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ADAMAM_APP_ID}&app_key=${process.env.REACT_APP_ADAMAM_API_KEY}&from=0&to=${limit}`;

   const response = await fetch(url)

   const data = await response.json();

   console.log(data)

   return data?.hits;
}

export async function fecthRecipe(id){
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_ADAMAM_APP_ID}&app_key=${process.env.REACT_APP_ADAMAM_API_KEY}`;

    const response = await fetch(url)

   const data = await response.json();

   console.log(data)

   return data[0];
}