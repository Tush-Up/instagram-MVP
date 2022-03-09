import React from "react";
import tushup from '../../asserts/tushup.jpg';
import "./Sidebar.css"
import Sticky from "react-sticky-el"
import Profile from "../Profile/Profile"
import Suggestions from "../suggestions/Suggestions"
import Footer from "../Footer/Footer"

const Sidebar = () => {
    return(
        
           <Sticky topOffset={-80}>
                <div className="sidebar">
        
                     <Profile
                     username="TushUp_"
                     caption="TushUp"
                     urlText="Switch"
                     iconSize="big"
                     image={tushup}
                   />
                   <Suggestions />
                   <Footer />
                </div>

            </Sticky>
                    
    )
}


export default Sidebar