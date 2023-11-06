
import  { FaTrash  } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const PostedJob = ({postedJob,handleDelete}) => {
    console.log(postedJob);
    const {_id,category,deadline,description,job} = postedJob;

    
   

    return (
        <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-xl h-[52px] font-bold">{job}</h2>
    <p className="text-base font-medium h-[192px]">{description} </p>
    <p className="text-base font-medium">{category}</p>
    <p className="text-base font-medium">{deadline}</p>
    <div className="flex justify-between">
        <button onClick={() => handleDelete(_id)} className='text-4xl font-bold'> <FaTrash></FaTrash> </button>
      <Link to={`/update/${_id}`} className="btn btn-primary">Update</Link>
    </div>
  </div>
</div>
    );
};

export default PostedJob;