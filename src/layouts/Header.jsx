import { Link } from "react-router-dom"
import Container from "../components/Container"
import Flex from "../Components/Flex"
import Image from "../Components/Image"
import logo from "../assets/logo (2).png"
import Button from "../Components/Button"

const Header = () => {
  return (
    <div className={"fixed w-full top-0 left-0 bg-transparent border-b border-[#ECEDEF] backdrop-blur-md  py-4"}>
      <Container>
        <Flex>
          <div className="w-[20%]">
            <Image imgSrc={logo}/>
          </div>
          <div className="w-[50%]">
            <ul className={"flex gap-x-7 text-xl" }>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/Jobs"} >Jobs</Link></li>
              <li><Link to={"/Talents"} >Talents</Link></li>
              <li><Link to={"/Subscriptions"}>Subscriptions</Link></li>
              <li><Link to={"/Pages"} >Pages</Link></li>
              <li><Link to={"/Contact"} >Contact</Link></li>
            </ul>
          </div>
          <div className="W-[30%] flex justify-between gap-x-4">
            <Button className="text-black text-[16px] font-medium border  border-[#007456] rounded-full " btnText="Community"/>
            <Button className="bg-[#007456] rounded-full text-[16px] font-medium text-white" btnText="Sign Up"/>
          </div>
        </Flex>
      </Container>
    </div>
  )


}

export default Header
