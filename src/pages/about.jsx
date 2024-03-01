import React from "react";
function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mt-4 ">
            <div className="col-sm-12 p-4 about">
              <h1 className="about_text">ABOUT</h1>
              <hr />
              <h5>
                Introducing Vistapiggy's Energetic Mascots: Fun Facts Galore!
              </h5>
              <p>
                Welcome to Vistapiggy.com, where our lively mascots are here to
                entertain you with fun-fact-filled articles! Since our humble
                beginnings in 2023, we have been dedicated to curating the best
                content from across the web, ensuring your time is well-spent.
                With a team of experienced writers and editors spanning borders,
                Vistapiggy aims to bring you a diverse range of perspectives and
                leave it up to you to discern what you believe to be true. We
                strive to cover a wide array of topics, gathering credible
                information from reliable sources.
              </p>
              <p>
                At Vistapiggy, we create engaging content that can impact both
                your daily life and long-term aspirations. Whether you're
                seeking uplifting profiles of unconventional history or
                refreshing entertainment topics, you'll find it right here on
                our platform!
              </p>
              <p>
                Vistapiggy is a place that exudes fun and welcomes you back time
                and time again. We believe that reading should be an enjoyable
                experience! When you delve into Vistapiggy, you'll encounter a
                fresh approach to evergreen interesting topics and trending
                stories that you may not typically come across elsewhere. From
                Japanese otters stealing things to the latest on notable
                personalities and veganism, as well as side-splitting puns and
                entertaining listicles, we've got you covered.
              </p>
              <p>
                We're eagerly waiting for that one big "Hey Jude" moment, just
                yearning for someone to say, "Bring it on!" Join us at
                Vistapiggy and let the fun-filled journey begin!
              </p>
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

export default About;
