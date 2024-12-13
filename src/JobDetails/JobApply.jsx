import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams(); 
    const { user } = useAuth(); 
    const navigate = useNavigate(); 

    
    const submitJobApplication = async (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value.trim();
        const github = form.github.value.trim();
        const resume = form.resume.value.trim();

       
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume,
        };

        try {
            const response = await fetch('http://localhost:8000/job-applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobApplication),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your job application has been submitted successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/myApplications'); 
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message || 'Something went wrong!',
            });
        }
    };

    return (
        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Apply for the Job and Good Luck!</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input
                        type="url"
                        name="linkedIn"
                        placeholder="LinkedIn Profile URL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub URL</span>
                    </label>
                    <input
                        type="url"
                        name="github"
                        placeholder="GitHub Profile URL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input
                        type="url"
                        name="resume"
                        placeholder="Online Resume URL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                        Apply
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;
