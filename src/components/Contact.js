import React from "react";
import Layout from "./layout/Layout";

const Contact = () => {

   
  const handleChange=async(e)=>{
e.preventDefault();

alert("hii")
  }

  return (
    <Layout height={"100vh"}>
      <div className="cnavbar">
        <div className="cl-navbar">logo</div>
        <div className="cr-navbar">
          <ul id="list" onChange={(value)=>handleChange(value)}>
            <li>
              <a id="name" className="anchor" href="">
                opera
              </a>
            </li>{" "}
            <li>
              <a id="name" className="anchor" href="">
                opera
              </a>
            </li>{" "}
            <li>
              <a id="name" className="anchor" href="">
                opera
              </a>
            </li>{" "}
            <li>
              <a id="name" className="anchor" href="">
                opera
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
