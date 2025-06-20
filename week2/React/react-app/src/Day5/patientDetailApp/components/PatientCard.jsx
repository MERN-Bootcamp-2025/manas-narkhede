import React from 'react';
import '../PatientForm.css';

const PatientCard = ({ patient, onEdit, onDelete }) => {
  return (
    <div className="patient-card">
      <h3>{patient.firstName} {patient.lastName}</h3>
      <p><strong>Email:</strong> {patient.email}</p>
      <p><strong>Phone:</strong> {patient.phone}</p>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Address:</strong> {patient.address}</p>
      {patient.medicalHistory && (
        <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
      )}
      <small className="timestamp">Added on {patient.dateAdded} at {patient.timeAdded}</small>
      <div className="card-actions">
        <button onClick={() => onEdit(patient)} className="edit-btn">Edit</button>
        <button onClick={() => onDelete(patient.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default PatientCard;
