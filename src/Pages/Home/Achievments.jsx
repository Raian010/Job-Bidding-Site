import { motion} from "framer-motion"
const Achievments = () => {
    return (
        <motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}>
  <div className="flex justify-center">
  <div className="stats shadow hidden md:block">

<div className="stat lg:w-[400px]">
<div className="stat-figure text-primary">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
</div>
<div className="stat-title text-xl font-bold text-black">Total Likes</div>
<div className="stat-value text-primary">15.6K</div>
<div className="stat-desc text-base font-medium text-black">21% more than last month</div>
</div>

<div className="stat lg:w-[400px]">
<div className="stat-figure text-secondary">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
</div>
<div className="stat-title text-xl font-bold text-black">Page Views</div>
<div className="stat-value text-secondary">100K</div>
<div className="stat-desc text-base font-medium text-black">21% more than last month</div>
</div>

<div className="stat lg:w-[400px]">
<div className="stat-figure text-secondary">
<div className="avatar online">
<div className="w-32 rounded-full">
<img src="https://i.postimg.cc/9fHW6xz9/find-job-logo-icon-design-vector-22742492-1-removebg-preview.png" />
</div>
</div>
</div>
<div className="stat-value">60%</div>
<div className="stat-title text-xl font-bold text-black">Jobs done</div>
<div className="stat-desc text-secondary text-base font-medium">Many remaining</div>
</div>

</div>
</div>
</motion.div>
      
    );
};

export default Achievments;