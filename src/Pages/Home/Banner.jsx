import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero lg:relative my-10 min-h-[80vh]" style={{backgroundImage: 'url(https://i.postimg.cc/wThgtRDZ/low-poly-banner-design-1711.jpg)'}}>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="text-black mt-10">
          <div className="lg:absolute lg:left-36 lg:bottom-40">
          <div className="max-w-sm">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Your gateway to career success</h1>
            <p className="mb-5 text-base">Welcome to the ultimate job platform where opportunities meet ambition. Whether you're seeking the perfect job or looking to hire top talent, our platform offers a seamless experience. Post jobs with ease, connect with a diverse talent pool, and take your career to new heights. Your next big career move begins here."</p>
            <Link to="/register" className="btn btn-primary">Get Started</Link>
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