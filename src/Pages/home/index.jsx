import { useContext } from "react"
import { Globalcontext } from "../../context"
import Recipeitem from "../../components/recipeitem"


export default function Home(){
    const {loading, recipelist} = useContext(Globalcontext)
    
    if(loading)return<div> loding plese wait .....</div>

    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipelist && recipelist.length > 0 ?
            recipelist.map((item)=> (<Recipeitem  item={item}/>))
             : <div>
                <p className="lg:text-4xl text-xl text-center text-black font-extrabold">nothing to show please search something..... </p>
             </div>
        }
    </div>
}