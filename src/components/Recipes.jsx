import React, { useEffect, useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Loading from './loading';
import Searchbar from './SearchBar';
import RecipeCard from './RecipeCard';
import {fecthRecipes} from '../api/index'




const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('vegan');
    const [limit, setLimit] = useState(30);
    const [loading, setLoading] = useState(true);

    


    const handleChange = (e)=>{
        setQuery(e.target.value)
    }

    const fetchRecipe= async()=>{
        try {
            const data = await fecthRecipes({query, limit})
            setRecipes(data)

            setLoading(false)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    const handleSearchRecipe = async (e) =>{
        e.preventDefault()
        fetchRecipe()
    }

    const showMore = () =>{
        setLimit(prev => prev + 10)
        fetchRecipe()
    }

    useEffect(()=>{
        setLoading(true)
        fetchRecipe()
    },[])

    if(loading){
        return(
            <Loading/>
        )
    }
  return (
    <div className='w-full'>
        <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
            <form action="" className='w-full' onSubmit={handleSearchRecipe}>
                <Searchbar placeholder={'eg. cake, Vegan, meat'} handleInputChange={handleChange}
                rightIcon={<BiSearchAlt2 className='text-gray-600'/>}
                />
            </form>
        </div>

        {
            recipes?.length > 0 ? (
                <>
                    <div className='w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                        {
                            recipes?.map((item, index)=>(
                                <RecipeCard recipe={item} key={index}/>
                            ))
                        }
                    </div>

                    <div className='flex w-full items-center justify-center py-10'>
                        <button className='bg-green-800 text-white px-3 py-1 rounded-full text-sm'
                        onClick={showMore}
                        >Show More</button>
                    </div>
                </>
            ): <div className='text-white flex w-full items-center justify-center py-10'>
                <p>No Recipe Found</p>
            </div>
        }
    </div>
  )
}

export default Recipes