import React from 'react';
import PatientCard from './PatientCard';
import '../PatientForm.css'; // Reuse the same CSS file for simplicity

const PatientList = ({ patients, onEdit, onDelete }) => {
  if (!patients || patients.length === 0) return <p>No patients added yet.</p>;

  return (
    <div className="card-wrapper">
      <div className="patient-grid">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientList;