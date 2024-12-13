import React from 'react';
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
  const { title, company, company_logo, requirements, description, location, salaryRange, _id } = job;

  return (
    <div className="card bg-base-100 w-100 shadow-2xl">
      <div className='flex gap-2 m-2'>
        <figure>
          <img className='w-12' src={company_logo} alt="Company Logo" />
        </figure>
        <div>
          <h4 className='text-2xl'>{company}</h4>
          <p className='flex gap-2 items-center'><FaMapMarkerAlt /> {location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className='flex gap-2 flex-wrap'>
          {
            requirements.map((skill, index) => (
              <p
                key={index}
                className='border rounded-md text-center p-2 hover:text-white hover:bg-teal-400'
              >
                {skill}
              </p>
            ))
          }
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className='flex items-center'>
            Salary: <FaDollarSign /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn badge badge-outline">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
