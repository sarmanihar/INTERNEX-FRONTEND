import React from 'react'
import "../css/Navbar.css";
import Signin from "./SignIn"


const Navbar = ({ setIn, In,userId,setuserId,IDTOKEN,setIDTOKEN}) => {
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
    setIn(false);
  };
  return (
    <nav >
      <h2>INTERNEX</h2>
      <div>
        {In ? (
            <button className="btn" id="btnExtend" onClick={handleLogout}>Log Out</button>
        ) : (
           <Signin id="sig" setIn={setIn} In={In} userId={userId} setuserId={setuserId}
           IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}
           />
        )}
      </div>
    </nav>
  );
};

export default Navbar;