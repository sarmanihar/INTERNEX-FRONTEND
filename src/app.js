import React,{useState} from 'react';
import * as FavIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import WorkingMan from './using-lottie/loading.json'
import {FaHome,FaUserAlt } from "react-icons/fa";
import Navbar from './components/Navbar';
import Home from './components/Home';
import {  MdGroups } from "react-icons/md"
 import Slider from './components/Slider';
 import Experience from './Pages/Experience.jsx';
  import Profile from './Pages/Profile.jsx';
// import { BiAbacus, BiCodeAlt, BiImage } from "react-icons/bi";
import "./css/app.css";
const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [userId,setuserId]=useState(null);
    const [IDTOKEN,setIDTOKEN]=useState(null);
      const [clicked, setClicked] = useState(false);
    const [pageRoute, setPageRoute] = useState("home");
      const handleRouteChange = (e) => {
    // setPageRoute(!pageRoute);
    if (e && e.stopPropagation) {
      e.stopPropagation(); //for w3c browsers
      e.cancelBubble = true; //for microsoft browsers
    }
  };

    const cla1="controlBoard expandControl";
  const cla2="controlBoard shrinkControl";
      const [classs, setclasss] = useState(cla2);
  return (
    <>
    
    
     <Navbar setIn={setAuthenticated} In={authenticated} userId={userId} setuserId={setuserId} 
    IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}
    />
<div className="App">
    <div className={ clicked ? cla1 : cla2 }  title="Control Board (Click to expand)" >
    {!clicked ? (
      <h1 id="cont_ic" onClick={()=> setClicked(!clicked)}>
       <FavIcons.FaBars />
      </h1>):(
        <h1 id="cont_ic" onClick={()=> setClicked(!clicked)}>
       <AiIcons.AiOutlineClose />
      </h1>)}
      {/* {<div id="useingFlex">} */}
        <p id="mem" onClick={(e)=> { setPageRoute("home"); handleRouteChange(e); }} className={pageRoute === "home" ? "activeLink" : null} >
        {pageRoute === "home" ?<FaHome /> : ""}
             {(pageRoute !== "home"&& clicked!==false) ? "HOME" : ""}
        </p>
        <p id="eve" onClick={(e)=> { setPageRoute("experience"); handleRouteChange(e); }} className={pageRoute === "experience" ? "activeLink" : null} >
            {pageRoute === "experience" ? <MdGroups/> : ""}
             {(pageRoute !== "experience" && clicked!==false)? "POSTS" : ""}
        </p>
        { authenticated && (
        <p id="eve2" onClick={(e)=> { setPageRoute("profile"); handleRouteChange(e); }} className={pageRoute === "profile" ? "activeLink" : null} >
            {pageRoute === "profile" ? <FaUserAlt /> : ""}
             {(pageRoute !== "profile" && clicked!==false)? "PROFILE" : ""}
            
        </p>)}
      {/* {</div>} */}
    </div>
  <div className="pages">
        {pageRoute === "home" &&
        <Home setIn={setAuthenticated} In={authenticated} />}
        {pageRoute === "experience" && (
                <Experience setIn={setAuthenticated} In={authenticated} userId={userId} setuserId={setuserId}
                IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}
                />
        )}
        {pageRoute === "profile" && (
                <Profile setIn={setAuthenticated} In={authenticated} userId={userId} setuserId={setuserId}
    IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}
    />
        )}
    </div>
</div>
    </>
  )
}

export default App