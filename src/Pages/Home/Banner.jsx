

const Banner = () => {
    return (
        <div className="hero lg:relative my-10 min-h-[80vh]" style={{backgroundImage: 'url(https://i.postimg.cc/wThgtRDZ/low-poly-banner-design-1711.jpg)'}}>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="text-black">
          <div className="lg:absolute lg:left-36 lg:bottom-40">
          <div className="max-w-sm">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          </div>
          <div className="lg:absolute lg:-right-10 lg:-top-10">
            <img className="lg:w-[1000px]" src="https://i.postimg.cc/rs2yb1SG/List-of-Websites-to-make-image-background-transparent-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;