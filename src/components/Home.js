import React, { useState } from "react";
import Layout from "./layout/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Public.css";
import { NavLink, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileno, setMobileno] = useState();
  const [address, setAddress] = useState();
  const submit = async (e) => {
    try {
      alert(`${process.env.REACT_APP_BASEURL}`);
      // e.preventdefault()
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASEURL}/api/user/contact`,
        { name, email, mobileno, address }
      );
      //  alert("hii")

      if (data?.success) {
        toast(data?.message);
      } else {
        toast(data?.message);
      }
    } catch (error) {
      toast("something is wrong");
    }
  };
  return (
    <Layout height={"100%"}>
      <div className="sec-1" id="home">
        <div className="left">
          <div className="head">Hello,</div>
          <div className="para">
            Wellcome, to My profile ,My name is <span>Dinesh</span> I am a{" "}
            <span>Mern </span>stack developer
          </div>
        </div>
        <div className="right">
          <img src="./dd.png" alt="" />
        </div>
      </div>
      {/* <hr /> */}
      <div className="sec-2" id="services">
        <h1>My Projects</h1>
        <div className="services">
          <div className="card">
            <img
              src="./logo192.png
            "
              alt=""
            />
            <div className="card-body">
              <h4>E-commerce web </h4>
              <NavLink
                style={{ textDecoration: "none" }}
                to="https://e-commerce-app-4hom.onrender.com"
              >
                <button>View project</button>
              </NavLink>
            </div>
          </div>

          <div className="card">
            <img
              src="./logo192.png
            "
              alt=""
            />
            <div className="card-body">
              <h4>E-Agro-web</h4>
              <NavLink
                style={{ textDecoration: "none" }}
                to="https://agro-services.onrender.com "
              >
                <button>View project</button>
              </NavLink>
            </div>
          </div>
          <div className="card">
            <img
              src="./logo192.png
            "
              alt=""
            />
            <div className="card-body">
              <h4>basic crud operations</h4>
              <NavLink
                style={{ textDecoration: "none" }}
                to="https://crud-web-w6gf.onrender.com"
              >
                <button>View project</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="sec-3" id="contact">
        <div className="form">
          <h1>contact us</h1>

          <div className="">
            {" "}
            <label htmlFor="name">Name</label>{" "}
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="">
            {" "}
            <label htmlFor="name">Email</label>{" "}
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="">
            {" "}
            <label htmlFor="name">Mobile number</label>{" "}
            <input
              onChange={(e) => {
                setMobileno(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="">
            {" "}
            <label htmlFor="name">Address</label>{" "}
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="dic">
            <button onClick={(e) => submit(e)} style={{ margin: "2vh" }}>
              submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
