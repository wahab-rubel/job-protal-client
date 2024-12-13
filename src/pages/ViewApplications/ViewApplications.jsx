import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  // Ensure applications is an array
  const applicationList = Array.isArray(applications) ? applications : [];

  const handleStatusUpdate = (e, id) => {
    const updatedStatus = e.target.value;
    console.log(`Updating status to: ${updatedStatus}, for ID: ${id}`);

    const data = {
      status: updatedStatus,
    };

    fetch(`http://localhost:8000/jobs/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update status");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status has been updated.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to update status.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "An error occurred.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl">
        Applications for this job: {applicationList.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applicationList.map((app, index) => (
              <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.applicant_email || "N/A"}</td>
                <td>{app.status || "Not Specified"}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
