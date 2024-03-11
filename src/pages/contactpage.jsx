import React from "react";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mt-4 ">
            <div className="col-sm-12 p-4 about">
              <h1 className="about_text">CONTACT</h1>
              <hr />
              <p style={{ textAlign: "center" }}>
                Need to get in touch or have any questions? Feel free to reach
                out to us via email using the address provided below. If you
                have a query regarding a specific story, kindly include the link
                to that story for our reference:
              </p>
              <p style={{ textAlign: "center", margin: "30px" }}>HOPIFFY</p>
              <p style={{ textAlign: "center" }}>vistapiggy@gmail.com</p>
            </div>
          </div>
          
          <div className="col-sm-4 mt-4">
            <div className="col-sm-12 follow_us p-2">
              <h4 className="follow_text">FOLLOW US</h4>
              <button className="icons_button1">
                <i className="fa-brands fa-instagram follow_icons"></i>
              </button>
              <button className="icons_button2">
                <i className="fa-brands fa-facebook follow_icons"></i>
              </button>
            </div>
            <div className="col-sm-12  most_popular p-4 mt-4">
              <h4 className="most_text">MOST POPULAR</h4>
              <hr />
              <div className="most_content">
                <div className="row">
                  <div className="col-sm-5 ">
                    <img
                      className="most_img" alt="imge"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQeYeClZMrqqq2aaTT2UdbuWtVktz8jQ9gw&usqp=CAU"
                    />
                  </div>
                  <div className="col-sm-6 ">
                    {" "}
                    <p>
                      Are Sirens Real? Gruesome Facts About Dark Siren Mermaid
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5 ">
                    <img
                      className="most_img" alt="imge"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQeYeClZMrqqq2aaTT2UdbuWtVktz8jQ9gw&usqp=CAU"
                    />
                  </div>
                  <div className="col-sm-6 ">
                    {" "}
                    <p>
                      Are Sirens Real? Gruesome Facts About Dark Siren Mermaid
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5 ">
                    <img
                      className="most_img" alt="imge"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQeYeClZMrqqq2aaTT2UdbuWtVktz8jQ9gw&usqp=CAU"
                    />
                  </div>
                  <div className="col-sm-6 ">
                    {" "}
                    <p>
                      Are Sirens Real? Gruesome Facts About Dark Siren Mermaid
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5 ">
                    <img
                      className="most_img" alt="imge"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQeYeClZMrqqq2aaTT2UdbuWtVktz8jQ9gw&usqp=CAU"
                    />
                  </div>
                  <div className="col-sm-6 ">
                    {" "}
                    <p>
                      Are Sirens Real? Gruesome Facts About Dark Siren Mermaid
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12  p-2 mt-4 mb-4 categories">
              <h4 className="categories_text">Categories</h4>
              <ul className="categories_list">
                <li>Animals</li>
                <li>Culture&Mythology</li>
                <li>Entertainment</li>
                <li>History</li>
                <li>TECHNOLGY</li>
                <li>Travel</li>
                <li>Weird</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
