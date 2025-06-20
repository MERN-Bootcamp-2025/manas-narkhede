import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './Day5/components/SearchBar'
import searchImages from './Day5/api'
import ImageList from './Day5/components/ImageList'
import PatientForm from './Day5/patientDetailApp/components/PatientForm'
import PatientList from './Day5/patientDetailApp/components/PatientList'
import './Day5/patientDetailApp/PatientForm.css'

import ThemeSwitcher from './Day5/Assignment/ThemeSwitcher'
import ContactForm from './Day5/Assignment/ContactForm'
import Counter from './Day5/Assignment/Counter'
import Checklist from './Day5/Assignment/CheckList'
import './Day5/Assignment/ThemeSwitcher.css'
import TodoList from './Day6/Assignement/components /TodoList'


import CharacterSearch from './Day7/SearchFormApp/components/CharacterSearch';


function App() {

  //DAY 5

  // Image Rendering 

  // const[images, setImages] = useState([])

  // const handleSubmit = async (term) => {
  //   console.log('Do a search with ,'+ term)
  //   const result = await searchImages(term);
  //   setImages(result)
    
  // }

  // return (
  //   <div>
  //     <SearchBar onSubmit={handleSubmit}/>   
  //     <ImageList images={images}/>
  //   </div>
  // )

  //Patient Form 

// const [patients, setPatients] = useState([]);
//   const [editingPatient, setEditingPatient] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     age: '',
//     gender: '',
//     address: '',
//     medicalHistory: ''
//   });

//   const handleAddPatient = (newPatient) => {
//     setPatients(prev => [newPatient, ...prev]);
//   };

//   const handleEditPatient = (patient) => {
//     setEditingPatient(patient);
//     setFormData(patient);
//   };

//   const handleUpdatePatient = (updatedPatient) => {
//     setPatients(prev =>
//       prev.map(p => (p.id === updatedPatient.id ? updatedPatient : p))
//     );
//     clearEdit();
//   };

//   const handleDeletePatient = (id) => {
//     if (window.confirm("Are you sure you want to delete this patient?")) {
//       setPatients(prev => prev.filter(p => p.id !== id));
//     }
//   };

//   const clearEdit = () => {
//     setEditingPatient(null);
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       age: '',
//       gender: '',
//       address: '',
//       medicalHistory: ''
//     });
//   };

//   return (
//     <div>
//       {/* <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#4c51bf' }}>
//         🏥 Patient Management System
//       </h1> */}

//       <PatientForm
//         formData={formData}
//         setFormData={setFormData}
//         editingPatient={editingPatient}
//         onAddPatient={handleAddPatient}
//         onUpdatePatient={handleUpdatePatient}
//         clearEdit={clearEdit}
//       />

//       <PatientList
//         patients={patients}
//         onEdit={handleEditPatient}
//         onDelete={handleDeletePatient}
//       />
//     </div>
//   );


  //Day5 Assignment
  

  // return <div className="app">
  //     <ThemeSwitcher />

  //     <div className="component-grid">
  //       <section className="card-section">
  //         <Counter />
  //       </section>

  //       <section className="card-section">
  //         <ContactForm />
  //       </section>

  //       <section className="card-section">
  //         <Checklist />
  //       </section>
  //     </div>
  //   </div>

  //Day6 Assignment 

  // return <div>
  //   <TodoList/>
  // </div>


  //BookApp

  // const[books, setBooks] =  useState([])

  // const createBook = (title) =>{
  //   console.log('Need to add book with :', title)
  // };

  // return <div>
  //   <BookCreate onCreate={createBook}/>
  // </div>



  //Day7 

  //API Fetch Assignment 

  return (
    <div className="app-container">
      <CharacterSearch />
    </div>
  );



};





export default App
