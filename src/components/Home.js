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
          <a href="">
            <div class="card" style="width: 18rem;">
              <img
                src="https://e-commerce-app-4hom.onrender.com"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>{" "}
          </a>
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
