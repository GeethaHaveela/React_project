const Thirdpage = () => {
  return (
    <main className="third">
      <img className="third_cone" src="images/cones.png" />
      <img className="third_juice" src="images/juices.png" />
      <img className="third_ice" src="images/ices.png" />
      <div className="thirdtitle">Products Range</div>
      <div className="thirdnav">
        <div className="third_one">
          Cones
          <br />
          <img className="thirdimg" src="images/cone.png" />
          <p>
            Arun Icecreams are rich, creamy, and full of vibrant flavors,
            appealing to children's taste buds with.
          </p>
          <button className="third_button">
            <span>&#8594;</span>
          </button>
        </div>
        <div className="third_one">
          Juices
          <br />
          <img className="thirdimg" src="images/juice.png" />
          <p>
            Arun Icecreams are rich, creamy, and full of vibrant flavors,
            appealing to children's taste buds with.
          </p>
          <button className="third_button">
            <span>&#8594;</span>
          </button>
        </div>
        <div className="third_one">
          Ice Creams
          <br />
          <img className="thirdimg" src="images/ice.png" />
          <p>
            Arun Icecreams are rich, creamy, and full of vibrant flavors,
            appealing to children's taste buds with.
          </p>
          <button className="third_button">
            <span>&#8594;</span>
          </button>
        </div>
      </div>
      <div className="round">
        <div className="forth">
          <div className="li_one">Vanilla</div>
          <div className="li_two">Blueberry</div>
          <div className="li_three">Chocolate</div>
          <div className="li_four">Strawberry</div>
          <div className="li_five">Pistachio</div>
          <div className="li_six">Mango</div>
        </div>
        <div className="five">
          <div className="imagefive">
            <img src="images/cone_ice.png" />
          </div>
          <div className="four_content">
            <div className="four_title">Heavenly Flavors</div>
            <p>
              Arun Icecreams are rich, creamy, and full of vibrant fla,
              appealing to children's taste buds with their smooth texture and
              colorful variety. Playful additions like chocolate chips and fruit
              chunks make each bite an exciting sensory delight.
            </p>
            <div className="buttons four_button">
              <div>
                <button className="button1">Learn More</button>
              </div>
              <div>
                <button className="button2">Try Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="six">
          <div>
            <img className="last_img" src="images/last_image.png" />
          </div>
          <div>
            <img className="last_image" src="images/contact.png" />
          </div>
          <div className="last_box">
            <div>
              <input
                className="text_box"
                type="email"
                value="Enter Your Email"
              />
            </div>
            <div>
              <button className="last_button">Contact Us</button>
            </div>
          </div>
          <div className="contact_icons">
            <img src="/images/fb_icon.png" alt="fb_logo" />
            <img src="/images/insta_icon.png" alt="insta_logo" />
            <img src="/images/twitter_icon.png" alt="twitter_logo" />
          </div>
        </div>
        <div className="seven">
          <ul>
            <li>
              <img className="seven_image" src="images/cone_pic.png" />
            </li>
            <li>
              <div className="fix_box">
                <div className="two">Home</div>
                <div className="two">AboutUs</div>
                <div className="two">ContactUs</div>
              </div>
            </li>
            <li>
              <div className="seventh_box">
                <div>
                  <input className="text_box" type="email" value="Subscribe" />
                </div>
                <div>
                  <button className="subscribe">Subscribe</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Thirdpage;
