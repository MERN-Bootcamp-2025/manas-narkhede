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


function App() {

  //DAY 5

  //Image Rendering 

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

  // const handleAddPatient = (newPatient) => {
  //   setPatients(prev => [newPatient, ...prev]);
  // };

  // return (
  //   <div>
  //     <PatientForm onAddPatient={handleAddPatient} />
  //     <PatientList patients={patients} />
  //   </div>
  // );


  //Day5 Assignment
  

  return <div className="app">
      <ThemeSwitcher />

      <div className="component-grid">
        <section className="card-section">
          <Counter />
        </section>

        <section className="card-section">
          <ContactForm />
        </section>

        <section className="card-section">
          <Checklist />
        </section>
      </div>
    </div>

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

}

export default App
