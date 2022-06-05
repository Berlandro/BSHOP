import React, {Component} from "react";
import BannerGame from "../Components/BannerGame";
import Carousel from "../Components/Carousel";
import DiscountProd from "../Components/DiscountProd";
import Navbar from "../Components/Navbar";
import Superiority from "../Components/Superiority";
import SuperiorityBshop from "../Components/SuperiorityBshop";
import Try from "../Components/Try";

class Home extends Component {
    render(){
        return(
            <div className="">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-full" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,192C840,213,960,267,1080,256C1200,245,1320,171,1380,133.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
                <Navbar/>
                {/* <Superiority/> */}
                <Carousel/>
                <SuperiorityBshop/>
                <Superiority/>
                <DiscountProd/>
                {/* <BannerGame/>
                <Try/> */}
                
            </div>
        )
    }
}

export default Home;