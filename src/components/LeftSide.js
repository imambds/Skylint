import { Link } from "react-router-dom"
import ExCity from "./City"
const Left = ({...props}) => {
  const styleInput = {
    backgroundImage: "url(/img/search.png)",
    backgroundSize: "1.5em", 
    backgroundPosition: "16px 48%"
  }
  return(
    <div className="left-side bg-navy w-full lg:w-1/2 px-4 md:px-8 lg:px-4 lg:px-28 ">
      <nav className="py-7 flex justify-between lg:block">
        <Link to="/" className="flex items-center text-xl font-semibold whitespace-nowrap text-white">
          <img src="/img/logo.png" width="40" alt="logo" /> &nbsp;
            Ap<span className="text-lime">Skylint</span>
        </Link>
        
      </nav>
      <main className="py-5 lg:py-3 flex flex-col lg:block md:max-w-4xl lg:max-w-md " >
        <div className="search-bar h-12" >
          <input type="text" value={props.value} onChange={e => props.change(e)} className="w-full h-full bg-light-navy rounded-lg px-12 bg-no-repeat text-light-gray focus:outline-none " placeholder="Search Location" ref={props.refff} style={styleInput}/>
        </div>
        <div className="py-4 md:flex flex-wrap ">
          <ExCity />
        </div>
      </main>
    </div>

  )
}

export default Left;