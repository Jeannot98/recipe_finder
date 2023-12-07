import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fecthRecipe, fecthRecipes } from '../api';
import Loading from '../components/loading';
import Header from '../components/Header';
import { AiFillPushpin } from 'react-icons/ai'
import { BsPatchCheck } from 'react-icons/bs'
import RecipeCard from '../components/RecipeCard';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true)

      const data = await fecthRecipe(id)
      setRecipe(data)

      const recommend = await fecthRecipes({ query: recipe?.label, limit: 5 })

      setRecipes(recommend)

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getRecipe(id)
  }, [id])

  if (loading) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <Loading />
      </div>
    )
  }
  return (
    <div className='w-full'>
      <Header
        title={recipe?.label} image={recipe?.image}
      />

      <div className='w-full px-4 lg:px-20 pt-5'>
        <div className='flex gap-10 items-center justify-center pb-4'>
          <div className='flex flex-col justify-between'>
            <span className='text-white text-center border border-gray-500 py-1 px-2 rounded-full mb-2'>{recipe?.calories.toFixed(2)}</span>

            <p className='text-neutral-100 text-[12px] md:text-sm'>CALORIES</p>
          </div>

          <div className='flex flex-col justify-between'>
            <span className='text-white text-center border border-gray-500 py-1 px-2 rounded-full mb-2'>{recipe?.totalTime}</span>

            <p className='text-neutral-100 text-[12px] md:text-sm'>TOTAL TIME</p>
          </div>

          <div className='flex flex-col justify-between'>
            <span className='text-white text-center border border-gray-500 py-1 px-2 rounded-full mb-2'>{recipe?.yield}</span>

            <p className='text-neutral-100 text-[12px] md:text-sm'>SERVINGS</p>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row gap-8 py-20 px-4 md:px-10'>
          {/* LEFT SIDE */}
          <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
            <div className='flex flex-col gap-5'>
              <p className='text-green-500 text-2xl underline'>Ingredients</p>

              {
                recipe?.ingredientLines?.map((item, index) => (
                  <p key={index} className='text-neutral-100 text-[12px] md:text-sm flex gap-2'>
                    <AiFillPushpin className='text-green-800 text-xl' />
                    {item}
                  </p>
                ))
              }
            </div>

            <div className='flex flex-col gap-3 mt-20'>
              <p className='text-green-500 text-2xl underline'>Health Labels</p>

              <div className='flex flex-wrap gap-4'>
                {
                  recipe?.healthLabels.map((item, index)=>(
                    <p key={index} className='text-white flex items-center justify-center gap-2 bg-[#fff5f518] px-4 py-1 rounded-full'>
                      <BsPatchCheck color='green'/>
                      {item}
                    </p>
                  ))
                }
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='w-full md:w-2/4 xl:pl-10 mt-20 md:mt-0'>
            {
              recipes?.length > 0 && (
                <>
                  <p className='text-white text-2xl'>Also Try This</p>

                  <div className='flex flex-wrap gap-6 px-1 pt-3'>
                    {
                      recipes?.map((item, index)=>(
                        <RecipeCard recipe={item} key={index}/>
                      ))
                    }
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail