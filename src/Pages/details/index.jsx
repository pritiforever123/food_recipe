import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Globalcontext } from "../../context"

export default function Details(){
    const {id} = useParams()

    const{recipedetail , setRecipeDetails, Addtofavrates} = useContext(Globalcontext)

    useEffect (()=>{
        async function getrecipedetails(){
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = await response.json()
            console.log(data)
            if(data?.data){
                setRecipeDetails(data?.data)
            }

        }
        getrecipedetails()  
    },[])

    return <div className=" container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
<div className="h-96 overflow-hidden rounded-xl group">
    <img
    src={recipedetail?.recipe?.image_url}
    className="w-full h-full object-cover block group-hover:scale-105 duration-300"
    />

</div>
        </div>
        <div className="flex flex-col gap-3">
            <span className="text-sm text-cyan-700 font-medium">{recipedetail?.recipe?.publisher}</span>
            <h3 className="font-bold text-2xl truncate text-black">{recipedetail?.recipe?.title}</h3>
            <div>
                <button onClick={()=> Addtofavrates( recipedetail?.recipe)} className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-medium bg-black text-white">
                    Save as Favorites
                </button>
            </div>
            <div>
                <span className="text-2xl font-semibold text-black ">Ingredients:</span>
                <ul className="flex flex-col gap-3 ">
                    {
                        recipedetail?.recipe?.ingredients.map(ingredient=> <li>
                            <span  className="text-sm text-cyan-700 font-medium">{ingredient.quantity}{ingredient.unit}</span>
                            <span  className="text-sm text-cyan-700 font-medium">{ingredient.description}</span>
                        </li>)
                    }

                </ul>
            </div>

        </div>

    </div>
}