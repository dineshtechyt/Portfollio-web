import React from "react";
import Layout from "./layout/Layout";
import "./Public.css";
const Home = () => {
  return (
    <Layout height={"100%"}>
      <div className="sec-1" id="home">
        <div className="left">
          <div className="head">Hello,</div>
          <div className="para">
            Wellcome, to <span>Dinesh</span> profile I am a Mern stack developer
          </div>
        </div>
        <div className="right">
          <img src="./dd.png" alt="" />
        </div>
      </div>
      <hr />
      <div className="sec-2" id="services">
        <h1>My Projects</h1>
        <div className="services">
          <div className="card">
            <a href="https://e-commerce-app-4hom.onrender.com">
              <img src="./dv2.png" alt="image" />
              <div className="card-body">
                <h3>E-commerce web</h3>
              </div>
            </a>
          </div>{" "}
          <div className="card">
            <a href="https://e-commerce-app-4hom.onrender.com">
              <img src="./dv2.png" alt="image" />
              <div className="card-body">
                <h3>Agro services web</h3>
              </div>
            </a>
          </div>{" "}
          <div className="card">
            <a href="https://e-commerce-app-4hom.onrender.com">
              <img src="./dv2.png" alt="image" />
              <div className="card-body">
                <h3>Crud operations web</h3>
              </div>
            </a>
          </div>{" "}
        </div>
      </div>
      <hr />
      <div className="sec-3" id="contact">
        <div className="form">
          <h1>contact us</h1>
          <label htmlFor="name">
            Name
            <input type="text" />
          </label>{" "}
          <label htmlFor="name">
            Email
            <input type="text" />
          </label>{" "}
          <label htmlFor="name">
            Mobile
            <input type="text" />
          </label>{" "}
          <label htmlFor="name">
            Location
            <input type="text" />
          </label>{" "}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
