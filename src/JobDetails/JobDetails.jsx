import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL parameters
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job details based on ID
  useEffect(() => {
    fetch(`http://localhost:8000/jobs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch job details");
        }
        return res.json();
      })
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Handle loading state
  if (loading) {
    return <p>Loading job details...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Destructure job data
  const {
    _id = "unknown", 
    title = "Job Title",
    location = "Location not provided",
    jobType = "Job Type not specified",
    category = "Category not available",
    applicationDeadline = "Deadline not specified",
    salaryRange = { min: 0, max: 0, currency: "USD" },
    description = "No description available",
    company = "Company Name",
    requirements = [],
    responsibilities = [],
    hr_email = "hr@example.com",
    hr_name = "HR Contact",
    company_logo = "default-logo.png",
  } = job;

  const salaryText = salaryRange.min && salaryRange.max
    ? `${salaryRange.min} - ${salaryRange.max} ${salaryRange.currency}`
    : "Salary not specified";

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="card bg-base-100 shadow-xl w-full max-w-4xl">
        <div className="card-body">
          <div className="flex gap-4 items-center mb-4">
            <img
              src={company_logo || "default-logo.png"}
              alt={company}
              className="w-16 h-16 object-cover rounded-md"
              onError={(e) => e.target.src = "default-logo.png"}
            />
            <div>
              <h2 className="card-title text-2xl font-bold">{title}</h2>
              <p className="text-lg text-gray-600">{company}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mb-6">
            <p className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt /> {location}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaBriefcase /> {jobType} - {category}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaDollarSign /> {salaryText}
            </p>
            <p className="text-gray-700">
              <strong>Application Deadline:</strong> {applicationDeadline}
            </p>
          </div>

          <p className="mb-4">{description}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
            {requirements.length > 0 ? (
              <ul className="list-disc pl-5">
                {requirements.map((req, index) => (
                  <li key={index} className="text-gray-700">{req}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No specific requirements mentioned.</p>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
            {responsibilities.length > 0 ? (
              <ul className="list-disc pl-5">
                {responsibilities.map((res, index) => (
                  <li key={index} className="text-gray-700">{res}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No specific responsibilities mentioned.</p>
            )}
          </div>

          <div className="flex items-center gap-4 text-gray-700 mb-6">
            <p className="flex items-center gap-2">
              <FaEnvelope /> {hr_email}
            </p>
            <p>
              <strong>Contact HR:</strong> {hr_name}
            </p>
          </div>

          <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
