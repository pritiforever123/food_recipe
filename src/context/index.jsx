


import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Globalcontext = createContext(null)

export default function GlobalState({children}){
    const [searchparam , setSearchparam ] = useState('')
    const[loading , setLoading ] =useState(false)
    const [recipelist ,setRecipelist] = useState([])
    const [recipedetail , setRecipeDetails] = useState(null)
    const [favriteslist, setFavriteslist ] = useState([])

    const navigate = useNavigate()

    async function handlesubmit(event){
        event.preventDefault()
        try{
const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchparam}`)
const data =await res.json()
if(data?.data?.recipes){
    setRecipelist(data?.data?.recipes)
    setLoading(false)
    setSearchparam('')
    navigate('/')
}
console.log(data)
        }catch(e){
console.log(e)
setLoading(false)
setSearchparam('')
        }

    }
    console.log(loading, recipelist)

     function Addtofavrates(getcurrentItem){
console.log(getcurrentItem)
let cpyfavitemlist = [...favriteslist]
const index = cpyfavitemlist.findIndex(item=> item.id === getcurrentItem.id)
if(index=== -1){
    cpyfavitemlist.push(getcurrentItem)
}else{
    cpyfavitemlist.splice(index)
}
setFavriteslist(cpyfavitemlist)

     }
     console.log(favriteslist ,recipelist)

    return <Globalcontext.Provider value={{searchparam ,loading, recipelist, setSearchparam ,handlesubmit,recipedetail , setRecipeDetails , Addtofavrates,favriteslist }}>{children}</Globalcontext.Provider>

}