import Container from "../components/Container"
import Flex from "../Components/Flex"
import Image from "../Components/Image"
import Banner from "../assets/Banner.png"
import { FaArrowRight } from "react-icons/fa6";


const Home = () => {
  return (
       <div className="min-h-dvh pt-25" style={{ backgroundImage: "linear-gradient(284.23deg, rgba(255,245,230,0.8) 12.33%, rgba(255,255,255,0.5) 53.22%, rgba(179,255,233,0.8) 98.24%)", }}>
      <Container>
        <Flex>
          <div className="w-[50%]">
            <h1 className="font-semibold text-ink-800 text-5xl">Connecting Ideas <br/> with the Right Talent</h1>
            <p className="font-thin text-20px mt-5" >We make it’s easier for talents and businesses to connect and we make it<br/> absolutely less charges. Hire Talents or Get Hired from our platform and work <br/>independently</p>
            <div className=" flex gap-x-4 mt-20px mt-5">
                    <a 
                    href="#" 
                    className="px-6 py-3 border-1 rounded-lg border-[#417D6E] bg-[#007456] hover:bg-[#417D6E] hover:text-white  transition-all duration-300"> Find work</a>
                    <a 
                    href="#"
                    className="px-6 py-3 border-1 rounded-lg border-[#417D6E] hover:bg-[#417D6E] hover:text-white transition-all duration-300">
                    Find talent</a>
            </div>

            <div className="relative mt-5 flex">
                <input type="text" placeholder="Search by role, service, skill or keywords" className="w-full rounded-lg border p-3 pr-14"/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="absolute right-0 top-0">
                <rect
                  width="48"
                  height="48"
                  rx="8"
                  fill="#FA8C00"
                />

              <g clipPath="url(#clip0_119_1498)">
                <path
                  d="M15 22C15 22.9193 15.1811 23.8295 15.5328 24.6788C15.8846 25.5281 16.4002 26.2997 17.0503 26.9497C17.7003 27.5998 18.4719 28.1154 19.3212 28.4672C20.1705 28.8189 21.0807 29 22 29C22.9193 29 23.8295 28.8189 24.6788 28.4672C25.5281 28.1154 26.2997 27.5998 26.9497 26.9497C27.5998 26.2997 28.1154 25.5281 28.4672 24.6788C28.8189 23.8295 29 22.9193 29 22C29 21.0807 28.8189 20.1705 28.4672 19.3212C28.1154 18.4719 27.5998 17.7003 26.9497 17.0503C26.2998 16.4002 25.5281 15.8846 24.6788 15.5328C23.8295 15.1811 22.9193 15 22 15C21.0807 15 20.1705 15.1811 19.3212 15.5328C18.4719 15.8846 17.7003 16.4002 17.0503 17.0503C16.4002 17.7003 15.8846 18.4719 15.5328 19.3212C15.1811 20.1705 15 21.0807 15 22Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M33 33L27 27"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              <defs>
                <clipPath id="clip0_119_1498">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(12 12)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

            <div className=" flex gap-x-4 mt-20px mt-8">
                    <a 
                    href="#" 
                    className="px-2 py-3 border-1 rounded-lg border-[#417D6E] hover:bg-[#417D6E] hover:text-white transition-all duration-300 gap-x-2 justify-between flex items-center"> 
                    Design & Creative <FaArrowRight /></a>
                    <a 
                    href="#"
                    className="px-2 py-3 border-1 rounded-lg border-[#417D6E] hover:bg-[#417D6E] hover:text-white transition-all duration-300 gap-x-2 justify-between
                    flex items-center">
                    website Development<FaArrowRight /></a>
                    <a 
                    href="#"
                    className="px-2 py-3 border-1 rounded-lg border-[#417D6E] hover:bg-[#417D6E] hover:text-white transition-all duration-300 gap-x-2 justify-between
                    flex items-center">
                    SEO  <FaArrowRight /></a>
                </div>
            <div className=" flex gap-x-4 mt-20px mt-5">
                    <a 
                    href="#" 
                    className="px-2 py-3 border-1 rounded-lg border-[Text/400] hover:bg-[#417D6E] hover:text-white transition-all duration-300 gap-x-2 justify-between flex  items-center"> 
                    Digital Marketing<FaArrowRight /></a>
                    <a 
                    href="#"
                    className="px-2 py-3 border-1 rounded-lg border-[#417D6E] hover:bg-[#417D6E] hover:text-white transition-all duration-300 gap-x-2 justify-between
                    flex items-center">
                    App Developer<FaArrowRight /></a>
                </div>
            </div>
        
          <div className="w-[50%]">
            <Image imgSrc={Banner}/>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Home