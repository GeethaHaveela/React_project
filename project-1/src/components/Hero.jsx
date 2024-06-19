const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Grab The Best Ice Cream</h1>
        <p>
          Arun Icecreams are rich, creamy, and full of vibrant flavors,
          appealing to children's taste buds with their smooth texture and
          colorful variety. Playful additions like chocolate chips and fruit
          chunks make each bite an exciting sensory delight.{" "}
        </p>
        <div className="hero-button">
          <button className="first_button">Learn More</button>
        </div>
        <div className="shopping">
          <p>Contact us</p>
          <div className="contact-icons">
            <img src="/images/fb_icon.png" alt="fb_logo" />
            <img src="/images/insta_icon.png" alt="insta_logo" />
            <img src="/images/twitter_icon.png" alt="twitter_logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/icecream.png" alt="icecream_logo" />
      </div>
    </main>
  );
};
export default HeroSection;
