import ProgressBar from "@ramonak/react-progress-bar";

const Progress = () => {
    return (
        <div className="mt-10">
            <h2 className="text-4xl text-center font-bold mb-10">
        Our <span className="text-blue-600">Progress</span>
      </h2>
            <div className="flex justify-center mt-10">
            <div className="space-y-5">
            <div className="flex items-center flex-col md:flex-row gap-3"><h2>Jobs Pending</h2>
            <ProgressBar className="w-[200px] md:w-[500px]" completed={40} /></div>
            <div className="flex items-center flex-col md:flex-row  gap-3"><h2>Jobs Done</h2>
            <ProgressBar className="w-[200px] md:w-[500px]" completed={80} /></div>
            <div className="flex items-center flex-col md:flex-row  gap-3"><h2>Jobs posted</h2>
            <ProgressBar className="w-[200px] md:w-[500px]" completed={60} /></div>
            </div>
            </div>
        </div>
    );
};

export default Progress;