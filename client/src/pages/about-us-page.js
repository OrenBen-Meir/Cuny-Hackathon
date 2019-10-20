import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import "../css/about-us.css";
import '../css/sidebar.css';


// import Oren from "../img/Oren_Senpai.jpg";
// import Young from "../img/Young.PNG";
// import Rehman from "../img/Rehman.PNG";
// import Mohammed from "../img/Mohammed.PNG";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div className = "rows">
        {/* Team Member 1 */}
        <div className="about">
          <div className="card border-0 shadow">
            {/* <img src={Yong} className="card-img-top" alt="..." /> */}
            <div className="card-body text-center">
              <h5 className="card-title mb-0">Yong</h5>
              <div className="card-text text-black-50">Built the backend and databases using the MERN stack</div>
            </div>
          </div>
        </div>
          
        {/* Team Member 2 */}
        <div className="about">
          <div className="card border-0 shadow">
            {/* <img src={Oren} className="card-img-top" alt="..." /> */}
            <div className="card-body text-center">
              <h5 className="card-title mb-0">Oren</h5>
              <div className="card-text text-black-50">Built the backend and databases using MERN Stack</div>
            </div>
          </div>
        </div>
      
      {/* Team Member 3 */}
      <div className="about">
        <div className="card border-0 shadow">
          {/* <img src={Rehman} className="card-img-top" alt="..." /> */}
          <div className="card-body text-center">
            <h5 className="card-title mb-0">Rehman</h5>
            <div className="card-text text-black-50">Designed the frontend with React and built routes using Express</div>
          </div>
        </div>
      </div>
      
      {/* Team Member 4 */}
      <div className="about">
        <div className="card border-0 shadow">
          {/* <img src={Momo} className="card-img-top" alt="..." /> */}
          <div className="card-body text-center">
            <h5 className="card-title mb-0">Mohammed</h5>
            <div className="card-text text-black-50">Designed the frontend with React and built graphs using D3.js</div>
          </div>
        </div>
      </div>
      <section></section>
  </div>

    );
  }
}