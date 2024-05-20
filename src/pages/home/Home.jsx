import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { links } from "./images";
import "./home.css";
import Swiper from "../../components/swiper/Swiper";
import { Link } from "react-router-dom";

const Home = () => {
  const [isShown, setIsShown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState();

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsShown(!isShown);
  };

  return (
    <div className="home">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="./images/Airbnb-logo.jpeg" alt="" />
          </Link>
        </div>
        <div className="searchItem">
          <div className="searchItem-text">Anywhere</div>
          <div className="searchItem-text">Any week</div>
          <div className="searchItem-text2">Add guest</div>
          <div className="searchIcon">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          </div>
        </div>
        <div className="profile">
          <div className="host">Airbnb your home</div>
          <div className="host">
            <FontAwesomeIcon icon={faGlobe} style={{ fontSize: "20px" }} />
          </div>
          <div className="dropDown" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faUser} />
          </div>
          {isShown && (
            <div className="drop">
              <div className="dropItem">Sign up</div>
              <div className="dropItem">Log in</div>
              <div className="dLine"></div>
              <div className="dropItem">Airbnb your home</div>
              <div className="dropItem">Help Center</div>
            </div>
          )}
        </div>
      </div>
      <div className="destinationBar">
        {/* <button>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="icon" />
        </button> */}
        {links.map((item, i) => (
          <div
            key={i}
            className={`places ${i === selectedPlace && "selected-place"}`}
            onClick={() => {
              console.log("selecting key", i);
              setSelectedPlace(i);
            }}
          >
            <img src={item.imgSrc} alt="" className="placeImg" />
            <p
              className={`placeLabel ${
                i === selectedPlace && "selected-label"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
        {/* <button>
          <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
        </button> */}
        <div className="filters">
          <button className="destButton">
            <FontAwesomeIcon icon={faFilter} /> &nbsp; Filters
          </button>
        </div>
      </div>
      <div className="destinationLabel">
        <div className="destLabel">
          <div className="destinationView">
            <Link to="/destination">
              <div className="images">
                <Swiper />
              </div>
            </Link>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>{" "}
          <div className="destinationView">
            <div className="images">
              <Swiper />
            </div>
            <div className="favIcon">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="title">
              <div className="heading">TH, Thailand</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 5.0
              </div>
            </div>
            <div className="type">Mountain views</div>
            <div className="date">11-16 Apr</div>
            <div className="price">32,524 night</div>
          </div>
        </div>
        <h4>Continue exploring amazing views</h4>
        <button>Show more</button>
      </div>
      <div className="footer">
        <div className="left">
          <p>@ 2023 Airbnb, Inc</p>&nbsp;&nbsp;
          <p>.</p>&nbsp;&nbsp;
          <p>Privacy</p>&nbsp;&nbsp;
          <p>.</p>&nbsp;&nbsp;
          <p>Terms</p>&nbsp;&nbsp;
          <p>.</p>&nbsp;&nbsp;
          <p>Sitemap</p>&nbsp;&nbsp;
          <p>.</p>&nbsp;&nbsp;
          <p>Company details</p>
        </div>
        <div className="right">
          <p>
            <FontAwesomeIcon
              icon={faGlobe}
              style={{ fontSize: "25px", margin: "0px 10px" }}
            />
            &nbsp; English (IN)
          </p>
          &nbsp;&nbsp;
          <p>
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            INR
          </p>
          &nbsp;
          <FontAwesomeIcon icon={faSquareFacebook} />
          &nbsp;
          <FontAwesomeIcon icon={faSquareTwitter} />
          &nbsp;
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};

export default Home;
