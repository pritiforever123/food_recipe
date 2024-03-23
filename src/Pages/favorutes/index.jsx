import { useContext } from "react"
import Recipeitem from "../../components/recipeitem"
import { Globalcontext } from "../../context"

export default function Favourates(){

    const { favriteslist } = useContext(Globalcontext)
    
    // if(loading)return<div> loding plese wait .....</div>

    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
           favriteslist  && favriteslist.length > 0 ?
           favriteslist.map((item)=> (<Recipeitem item={item}/>))
             : <div>
                <p className="lg:text-4xl text-xl text-center text-black font-extrabold">nothing is added in Favourates..... </p>
             </div>
        }
    </div>
}