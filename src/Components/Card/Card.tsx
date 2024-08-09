import React, { useEffect } from 'react';
import { loadedJobsInterface } from '../../Interface/Job';
interface AnimatedCardProps {
 jobData:loadedJobsInterface
  viewDetails: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ jobData, viewDetails }) => {  useEffect(() => {
    console.log("use effect");
  }, []);

  return (
    <div className="mb-3 card bg-base-100 w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 shadow-xl overflow-hidden">
      <figure className="h-60 overflow-hidden">
        <img
          loading="lazy"
          src={jobData.url}
          className="w-full h-full object-cover"
          alt="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{jobData?.title}</h2>
        <p className="text-ellipsis overflow-hidden">{jobData?.location}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={ viewDetails }>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
