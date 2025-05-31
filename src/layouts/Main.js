import {useState, useEffect, useRef} from "react"
import Left from "../components/LeftSide"
import { CardDetails, CardEmpty } from "../components/CardDetails"
import WeatherDetails from "../components/Weather";
const Main = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("yogyakarta");
  const [loading, setLoading] = useState(true);
  const linkRef = useRef(null)
  
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const scrollRef = ref => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
    ref.focus()
  }

  useEffect(() => {
    const searchData = async() => {
      try {
        const resp = await fetch(`https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=${value}&aqi=no`);
        const respData = await resp.json();
        setData(respData)
        setLoading(false)
      } catch(err){
        console.error("error")
      }
    }
    searchData("yogyakarta")
  }, [value])

  return(
    <div className="flex flex-col lg:flex-row">
      <Left change={handleChange} value={value} data={data} refff={linkRef}/>
      <div className="bg-light-navy w-full lg:w-1/2 px-4 lg:px-28">
        
        {loading ? 
          <div className="middle ">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
            <div className="bar bar5"></div>
            <div className="bar bar6"></div>
            <div className="bar bar7"></div>
            <div className="bar bar8"></div>
          </div>
        : 
          <main className="lg:py-10">
            <h3 className="text-white text-2xl ">Weather <span className="text-lime font-medium">Forecast</span></h3>
            {
              value.length > 2 ? <CardDetails data={data}/> : <CardEmpty /> 
            }
            <h3 className="text-white text-xl pb-5">Today Overview</h3>
            <div className="box-details flex flex-wrap w-full h-full">
              <WeatherDetails weather={data} />
            </div>
          </main>
        }
        <a href="# " rel="noopener noreferrer" onClick={() => scrollRef(linkRef.current)}className="fixed no-underline p-1 w-10 h-10 flex items-center justify-center text-white rounded-lg bottom-8 right-8 z-10 bg-navy shadow-md lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
            viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Main;