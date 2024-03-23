import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Globalcontext } from "../../context";

  

  export default function Navbar (){

    const {searchparam , setSearchparam , handlesubmit }= useContext(Globalcontext)
    console.log(searchparam)

    return <nav className=" flex justify-between item-center py-8 container nx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">food recipe</h2>
        {/* <NavLink to={'/'} className= 'text-black hover:text-grey-700 duration-300'>FoodRecipe</NavLink> */}
        <form onSubmit={handlesubmit}>
            <input type="text"
            name="search"
            value={searchparam}
            onChange={(event)=> setSearchparam(event.target.value)}
            placeholder="enter items...."
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
            />
        </form>
        <ul className="flex gap-5">
<li>
  <NavLink to={'/'} className= 'text-black hover:text-grey-700 duration-300'>Home</NavLink>
</li>
<li>
  <NavLink to={'/favrates'} className= 'text-black hover:text-grey-700 duration-300'>Favrates</NavLink>
</li>

        </ul>

    </nav>
  }