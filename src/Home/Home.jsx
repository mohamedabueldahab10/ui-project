import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="homeContent w-100 d-flex">
        {/* ----------------- */}
        <div className="homeLink">
          <Link className="text-decoration-none" to="home">
            <i className="fa-solid fa-house ms-4"></i>
            <p className="text-capitalize d-inline ms-1">home</p>
          </Link>
        </div>

        {/* ----------------- */}
        <div className="container w-75 my-4">
          <aside className="mx-5">My Dashboard</aside>

          {/* ----------------- */}
          <div className="d-flex justify-content-center mb-2">
            <div className="searchbtn w-25 mx-5">
              <form className="d-flex position-relative" role="search">
                <div className="searchicon">
                  <i className="fa-solid fa-magnifying-glass position-absolute top-50 end-0 translate-middle pe-2"></i>
                </div>
                <input
                  className="form-control me-2 rounded-pill shadow-sm "
                  type="search"
                  placeholder="Search for contacts"
                  aria-label="Search"
                />
              </form>
            </div>

            <div className="filterDay w-25 rounded-pill d-flex justify-content-between align-items-center p-2 mx-5">
              <div>Filter by day</div>
              <div>
                <i className="fa-solid fa-caret-down me-3"></i>
              </div>
            </div>

            <button type="button" className="w-25 rounded-pill mx-5">
              Search
            </button>
          </div>
          {/* ----------------- */}

          <div className="d-flex justify-content-between mx-5 mb-1 ">
            <div className="allClients p-1">
              <div className="d-flex justify-content-between align-top">
                <div className="textSize">500</div>
                <div>
                  <i className="fa-solid fa-dollar-sign"></i>
                </div>
              </div>
              <p className="lowerText mt-1">All clients</p>
            </div>

            <div className="allAwd p-1">
              <div className="d-flex justify-content-between align-top">
                <div className="textSize">500</div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p className="lowerText mt-1">All Awd</p>
            </div>
          </div>
          {/* ------------------- */}

          <div className="d-flex justify-content-center mx-5 mt-1">
            <div className="onlineDeliver p-1">
              <div className="d-flex justify-content-between align-top">
                <div className="textSize">500</div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between align-bottom mt-1">
                <div className="lowerTextDel">Online Deliverers</div>
                <div className="lowerTextDel">All Deliverers 500</div>
              </div>
            </div>
          </div>
          {/* ------------------- */}

          <div className="statics m-2 d-flex justify-content-start overflow-hidden">
            <div className="staticsLeft py-3">
              <div className="staticWord text-center my-2">STATISTICS</div>
              <div className="cut"></div>
              <div className="row text-center my-4">
                <div className="col-8">Done AWD</div>
                <div className="col-2 greenNo">72.593</div>
                <div className="col-8">Pending AWD</div>
                <div className="col-2 yellowNo">9.307</div>
                <div className="col-8">Returns AWD</div>
                <div className="col-2 orangeNo">3.307</div>
              </div>
            </div>

            <div className="staticsChart">
              <svg
                className="chartBackground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#C5CEEF"
                  fillOpacity="0.3"
                  d="M0,192L21.8,181.3C43.6,171,87,149,131,144C174.5,139,218,149,262,160C305.5,171,349,181,393,181.3C436.4,181,480,171,524,192C567.3,213,611,267,655,245.3C698.2,224,742,128,785,80C829.1,32,873,32,916,58.7C960,85,1004,139,1047,154.7C1090.9,171,1135,149,1178,122.7C1221.8,96,1265,64,1309,42.7C1352.7,21,1396,11,1418,5.3L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
                ></path>
              </svg>
              <svg viewBox="0 0 500 100" class="chart chartGreen">
                <polyline
                  fill="none"
                  stroke="#36CD59"
                  stroke-width="2"
                  points="
       00,80
       20,70
       40,60
       60,120
       80,100
       100,100
       120,0
       140,40
       160,100
       180,100
       200,70
       220,10
       240,110 
       260,80 
       280,90 
       300,100 
       320,60 
       340,80 
       360,80 
       380,20 
       400,80 
       420,60 
       440,120 
     "
                />
              </svg>
              <svg viewBox="0 0 500 100" className="chart chartGreen">
                <polyline
                  fill="none"
                  stroke="#FFDF00"
                  stroke-width="2"
                  points="
       00,40
       20,37
       40,34
       60,31
       80,28
       100,25
       120,27
       140,29
       160,30
       180,50
       200,80 
       220,110
       240,130
       260,125
       280,110
       300,80
       320,60 
       340,90
       360,90
       380,100
       400,120
       420,90
       440,50
     "
                />
              </svg>
              <svg viewBox="0 0 500 100" className="chart chartGreen">
                <polyline
                  fill="none"
                  stroke="#F00B0B"
                  stroke-width="2"
                  points="
       00,120
       20,60
       40,80
       60,20
       80,80
       100,80
       120,60
       140,100
       160,90
       180,80
       200, 110
       220, 10
       240, 70
       260, 100
       280, 100
       300, 40
       320, 0
       340, 100
       360, 100
       380, 120
       400, 60
       420, 70
       440, 80
     "
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
