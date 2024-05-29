import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLanguage,
  faBars,
  faUser,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import "./rooms.css";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import "./rooms.css";
import {
  faGrip,
  faHeart,
  faStar,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import {
  faCircleArrowRight,
  faRightLong,
  faUmbrellaBeach,
  faWifi,
  faWaterLadder,
  faSoap,
  faFan,
  faFireBurner,
  faSquareParking,
  faTv,
  faHandHoldingDroplet,
  faBellSlash,
  faKeyboard,
  faChevronDown,
  faFlag,
  faChevronRight,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <div className="rooms">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img
              src="./images/Airbnb_Logo.png"
              alt=""
              style={{ height: "35px", width: "150px", objectFit: "contain" }}
            />
          </Link>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Start your search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </div>
        <div className="profile">
          <div className="yourHome">Airbnb your home</div>&nbsp;
          <div className="langIcon">
            <FontAwesomeIcon icon={faLanguage} className="icon" />
          </div>
          &nbsp;
          <div className="menuIcon">
            <FontAwesomeIcon icon={faBars} className="icon" />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>
      </div>
      <div className="roomBody">
        <div className="hotelRoom">
          <div className="hotelTop">Luxury Sunset 3BR w/ BEACH access</div>
          <div className="hotelRating">
            <div className="hotelRatingLeft">
              <div className="hotelRatingOne">
                <FontAwesomeIcon icon={faStar} />
                &nbsp; 4.85
              </div>
              &nbsp;
              <div className="dot">-</div>&nbsp;
              <div
                className="hotelRatingTwo"
                style={{ textDecoration: "underline" }}
              >
                00 reviews
              </div>
              &nbsp;&nbsp;
              <div className="hotelRatingThree">-</div>&nbsp;
              <div className="hotelRatingFour">Thailand</div>
            </div>
            <div className="hotelRatingRight">
              <div className="hotelRatingRone">
                <FontAwesomeIcon icon={faShare} />
                &nbsp; Share
              </div>
              &nbsp;
              <div className="hotelRatingRtwo">
                <FontAwesomeIcon icon={faHeart} />
                &nbsp; Save
              </div>
            </div>
          </div>
          <div className="hotelRoomPhotos">
            <div className="gallery1">
              <img
                src="./images/destination.webp"
                alt=""
                style={{
                  height: "453px",
                  width: "560px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  objectFit: "cover",
                }}
                className="images"
              />
            </div>
            <div className="gallery2">
              <div className="gallery2i">
                <img
                  src="./images/destination2.webp"
                  alt=""
                  className="images"
                  style={{
                    height: "225px",
                    width: "272px",
                    objectFit: "cover",
                  }}
                />
                <img
                  src="./images/destination3.webp"
                  alt=""
                  className="images"
                  style={{
                    height: "225px",
                    width: "272px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="gallery2ii">
                <img
                  src="./images/destination5.webp"
                  alt=""
                  className="images"
                  style={{
                    height: "225px",
                    width: "272px",
                    borderTopRightRadius: "10px",
                    objectFit: "cover",
                  }}
                />
                <img
                  src="./images/destination4.jpg"
                  alt=""
                  className="images"
                  style={{
                    height: "225px",
                    width: "272px",
                    borderEndEndRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="showAllPics">
              <FontAwesomeIcon icon={faGrip} />
              &nbsp; Show All Photos
            </div>
          </div>
        </div>
        {/* hotel hotelFacility */}
        <div className="hotelFacility">
          <div className="hotelFacilityLeft">
            <div className="hostedBy">
              <div className="hostedByLeft">
                <div className="hostedByHeading">
                  <h2>Entire villa hosted by Daniel</h2>
                </div>
                <div className="hostedByInfo">
                  <div className="hostedByGuest">6 guest</div>&nbsp;
                  <div className="hostedByDot">-</div>&nbsp;
                  <div className="hostedByBedroom">3 bedrooms</div>&nbsp;
                  <div className="hostedByDot">-</div>&nbsp;
                  <div className="hostedByBeds">3 beds</div>&nbsp;
                  <div className="hostedByDot">-</div>&nbsp;
                  <div className="hostedByBathroom">3.5 bathrooms</div>
                </div>
              </div>
              <div className="hostedByRight">
                <img
                  src="./images/user.JPG"
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="line"></div>
            <div className="hotelPolicy">
              <div className="selfCheckIn">
                <FontAwesomeIcon icon={faPeopleRoof} />
                <div className="policyContent">
                  <h4>Self check-in</h4>
                  <p>You can check in with the doorperson.</p>
                </div>
              </div>
              <div className="disSuperhost">
                <FontAwesomeIcon icon={faPerson} />
                <div className="policyContent">
                  <h4>Daniel is a Superhost</h4>
                  <p>
                    Superhosts are experienced, highly rated hosts who are{" "}
                    <br />
                    committed to providing great stays for their guests.
                  </p>
                </div>
              </div>
              <div className="checkInExp">
                <FontAwesomeIcon icon={faCalendarDays} />
                <div className="policyContent">
                  <h4>Great check-in experience</h4>
                  <p>
                    95% of recent guests gave the check-in process a 5-star{" "}
                    <br />
                    rating.
                  </p>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="airCover">
              <div className="airCoverImg">
                <img
                  src="./images/airCover.webp"
                  style={{
                    width: "200px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
              <div className="airCovercontent">
                <p style={{ lineHeight: "1.5", padding: "10px 0px" }}>
                  Every booking includes free protection from Host
                  cancellations, <br /> listing inaccuracies, and other issues
                  like trouble checking in.
                </p>
                <h4 style={{ textDecoration: "underline", display: "flex" }}>
                  Learn more &nbsp;
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </h4>
              </div>
            </div>
            <div className="line"></div>
            <div className="hotelContent">
              <div
                className="hotelContentPara"
                style={{ padding: "20px 0px", lineHeight: "1.4" }}
              >
                BRAND NEW TO THE MARKET: Set in the most desirable and sought
                <br />
                after area of Koh Samui, this charming 3 bedroom villa offers
                the <br /> most luxurious and exclusive holiday destination
                available. Perfect <br /> for families, friends, and special
                events alike, with its breathtaking <br /> setting, elegant
                design and contemporary finish, it truly offers <br />
                everything for your holiday to Koh Samui. With a private path to
                <br /> the beach, you are only a 2 minute walk away from
                stepping foot <br /> into the warm ocean seawater.
              </div>
              <div
                className="hotelContentShowMore"
                style={{ textDecoration: "underline", display: "flex" }}
              >
                Show more <FontAwesomeIcon icon={faRightLong} />
              </div>
            </div>
            <div className="line"></div>
            <div className="hotelBedTypes">
              <h2 style={{ fontWeight: "500" }}>Where you'll sleep</h2>
              <div className="bedType-Size">
                <div className="bed">
                  <FontAwesomeIcon icon={faBed} />
                  <h4>Bedroom 1</h4>
                  <p>1 king bed</p>
                </div>
                <div className="bed">
                  <FontAwesomeIcon icon={faBed} />
                  <h4>Bedroom 2</h4>
                  <p>1 king bed</p>
                </div>
                <div className="bed">
                  <FontAwesomeIcon icon={faBed} />
                  <h4>Bedroom 3</h4>
                  <p>1 king bed</p>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="hotelMetaInfo">
              <div className="metaInfoHead">
                <h2 style={{ fontWeight: "500", margin: "30px 0px 10px 0px" }}>
                  What this place offers
                </h2>
              </div>
              <div
                className="metaInfo"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 180px 0px 0px",
                }}
              >
                <div className="leftSide">
                  <div className="offers">
                    <FontAwesomeIcon icon={faUmbrellaBeach} />{" "}
                    <p>Beach access - Beachfront</p>
                  </div>
                  <div className="offers">
                    <FontAwesomeIcon icon={faWifi} />
                    <p>Wifi</p>
                  </div>
                  <div className="offers">
                    <FontAwesomeIcon icon={faWaterLadder} />
                    <p>Private pool</p>
                  </div>
                  <div className="offers">
                    <FontAwesomeIcon icon={faSoap} />
                    <p>Washing machine</p>
                  </div>
                  <div className="offers">
                    <FontAwesomeIcon icon={faFan} />
                    <p>Air conditioning</p>
                  </div>
                </div>
                <div className="rightSide">
                  <div className="offers">
                    <FontAwesomeIcon icon={faFireBurner} />
                    <p>Kitchen</p>
                  </div>
                  <div className="offers">
                    <FontAwesomeIcon icon={faSquareParking} />
                    <p>Free parking on premises</p>
                  </div>
                  <div className="offers">
                    <FontAwesomeIcon icon={faTv} />
                    <p>
                      TV with standard <br /> cable/satellite
                    </p>
                  </div>
                  <div className="offers">
                    <FontAwesomeIcon icon={faHandHoldingDroplet} />
                    <p>Dryer</p>
                  </div>
                  <div className="offers">
                    <FontAwesomeIcon icon={faBellSlash} />
                    <p>Carbon monoxide alarm</p>
                  </div>
                </div>
              </div>
              <button
                style={{
                  padding: "15px 15px",
                  border: "1px solid grey",
                  outline: "none",
                  borderRadius: "10px",
                  background: "none",
                  fontSize: "15px",
                  fontWeight: "600",
                  margin: "25px 0px 20px 0px",
                }}
              >
                Show all 43 amenities
              </button>
            </div>
            <div className="line"></div>
            <div
              className="Hotelcalender"
              style={{ padding: "10px 0px 10px 0px" }}
            >
              <div className="calenderHeading">
                <h2 style={{ fontWeight: "500" }}>Select check-in date</h2>
                <p style={{ color: "grey", marginTop: "-10px" }}>
                  Add your travel dates for exact pricing
                </p>
              </div>
              <div
                className="calender"
                style={{ border: "1px solid gray", height: "300px" }}
              ></div>
              <div
                className="hotelCalenderBtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "15px 5px 10px 5px",
                  justifyContent: "space-between",
                }}
              >
                <FontAwesomeIcon icon={faKeyboard} />
                <button
                  style={{
                    background: "none",
                    outline: "none",
                    border: "none",
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Clear dates
                </button>
              </div>
            </div>
          </div>
          <div className="hotelFacilityRight">
            <div className="card">
              <div className="top">
                <div className="left">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  &nbsp; 20,983 &nbsp;night
                </div>
                <div className="right">
                  <p>
                    <FontAwesomeIcon icon={faStar} />
                    &nbsp; 4.86
                  </p>
                  &nbsp;
                  <p>.</p>&nbsp;
                  <p>104 reviews</p>
                </div>
              </div>
              <div className="middle">
                <div className="cart">
                  <div className="left">
                    <div className="head">CHECK-IN</div>
                    <div className="date">4/11/2023</div>
                  </div>
                  <div className="right">
                    <div className="head">CHECKOUT</div>
                    <div className="date">4/16/2023</div>
                  </div>
                </div>
                <div className="guest">
                  <div className="left">
                    <div className="head">GUESTS</div>
                    <div className="date">1 guest</div>
                  </div>
                  <div className="right">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
              </div>
              <div className="bottom">
                <button>Change dates</button>
              </div>
            </div>
            <div className="reportListing">
              <FontAwesomeIcon icon={faFlag} /> Report this listing
            </div>
          </div>
        </div>
        {/* <div className="line"></div> */}
        {/* <div className="reviewComp">
          <div className="heading">
            <p>
              <FontAwesomeIcon icon={faStar} />
              &nbsp; 4.86
            </p>
            <p>.</p>
            <p>104 reviews</p>
          </div>
          <div className="rating">
            <div className="left">
              <div className="ratingBar">
                <div className="head">Cleanliness</div>
                <div className="bar"></div>
              </div>
              <div className="ratingBar">
                <div className="head">Communication</div>
                <div className="bar"></div>
              </div>
              <div className="ratingBar">
                <div className="head">Check-in</div>
                <div className="bar"></div>
              </div>
            </div>
            <div className="right">
              <div className="ratingBar">
                <div className="head">Accuracy</div>
                <div className="bar"></div>
              </div>
              <div className="ratingBar">
                <div className="head">Location</div>
                <div className="bar"></div>
              </div>
              <div className="ratingBar">
                <div className="head">Value</div>
                <div className="bar"></div>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="reviewCard">
              <div className="top">
                <div className="left">
                  <img src="" alt="" />
                </div>
                <div className="right">
                  <p>Kunal</p>
                  <p>September 2023</p>
                </div>
              </div>
              <div className="middle">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, exercitationem in quia quo quos deleniti,
                  voluptatem expedita officiis cupiditate debitis sint rerum
                  distinctio? Itaque nam rerum, a vel at unde, error ad
                  assumenda nesciunt cumque perferendis ullam magni pariatur
                  aliquam officia fuga maiores deserunt expedita, animi ut
                  placeat quo alias.
                </p>
                <button>
                  Show more <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="bottom">
                <button>Show all reviews</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="line"></div>
        <div className="mapComp">
          <div className="head">Where you'll be</div>
          <div className="map"></div>
          <div className="details">
            <div className="dHead">Thailand</div>
            <div className="directions">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                necessitatibus cum perferendis atque suscipit reiciendis error a
                hic non, et modi veniam dignissimos, asperiores voluptates
                repellat cumque laborum, ducimus labore assumenda natus
                sapiente! Aliquid earum vero ipsa nam natus repudiandae aliquam,
                temporibus nemo totam eos porro est, modi quia molestiae
                laudantium possimus asperiores, tempore suscipit commodi animi.
                Autem ipsa vel suscipit esse tenetur? Quam unde, eum eius velit
                aliquid cupiditate aperiam totam delectus deleniti minus alias
                ab eveniet magni architecto esse necessitatibus nulla autem
                obcaecati molestias ad reiciendis perferendis libero quod
                veritatis! Eveniet, consequatur doloremque eos quas illo ut
                beatae?
              </p>
              <button>
                Show more <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="aboutUs">
          <div className="head">
            <div className="left">
              <img
                src="./images/sd .png"
                alt=""
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
            </div>
            <div className="right">
              <h2>Hosted by Daniel</h2>
              <p>Joined in August 2017</p>
            </div>
          </div>
          <div className="details">
            <div className="left">
              <div className="top">
                <div className="left">
                  <p>
                    <FontAwesomeIcon icon={faStar} />
                    &nbsp;1,399 Reviews
                  </p>
                </div>
                <div className="right">
                  <FontAwesomeIcon icon={faCertificate} />
                  &nbsp;Identity verified
                </div>
              </div>
              <div className="center">
                Hi, I'm Daniel. I have been living on the beautiful island of
                Koh Samui for more than 6 years now. It is a brilliant place to
                live and work, and allows lots of travel to other parts of
                Thailand and neighbouring countries in Asia.
              </div>
              <div className="bottom">
                <h3>During your stay</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt natus reprehenderit autem corrupti modi nam nisi
                  incidunt. Quas, repellat veniam. Nihil non minima, rem commodi
                  delectus cum beatae harum eligendi quis ratione reprehenderit
                  recusandae nemo, voluptate quae saepe laudantium! Neque eum
                  maiores obcaecati odit natus, provident accusantium aperiam
                  dolores animi.
                </p>
                <button>Read more</button>
              </div>
            </div>
            <div className="right">
              <div className="rRate">
                <p>Response rate: 100%</p>
              </div>
              <div className="rTime">
                <p>Response time: within an hour</p>
              </div>
              <div className="cHost">
                <button>Contact host</button>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="aboutProperty">
          <div className="top">
            <h2>Things to know</h2>
          </div>
          <div className="bottom">
            <div className="hRules">
              <div className="top">
                <h4>House rules</h4>
              </div>
              <div className="bottom1">
                <p>Check-in after 3:00 pm</p>
                <p>Checkout before 11:00 am</p>
                <p>6 guests maximum</p>
                <button>
                  Show more <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            <div className="hSafety">
              <div className="top">
                <h4>Safety & property</h4>
              </div>
              <div className="bottom1">
                <p>No carbon monoxide alarm</p>
                <p>Smoke alarm</p>
                <button>
                  Show more <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            <div className="cancelPolicy">
              <div className="top">
                <h4>Cancellation policy</h4>
              </div>
              <div className="bottom1">
                <p>
                  Review the Host’s full cancellation policy which <br />
                  applies even if you cancel for illness or disruptions <br />
                  caused by COVID-19.
                </p>
                <button>
                  Show more <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
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
                icon={faLanguage}
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
    </div>
  );
};

export default Rooms;
