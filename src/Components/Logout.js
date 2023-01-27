import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "../features/userSlice";
import Leftbar from "./leftbar";

const Logout = () => {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logout = (e) => {
    dispatch(logout());
  };

  return (
    <>
      <div className="navbar">
       <div className="navbarWrapper">
          <div className="navbarleft">
            <span className="logo">SOLGURUZ</span>
          </div>
          <div className="navbarright">
            <button className='logout_btn' onClick={(e) => logout(e)}>Logout</button>
          </div>
        </div>
      </div>
      
        <Leftbar />
    </>
  );
};

export default Logout;