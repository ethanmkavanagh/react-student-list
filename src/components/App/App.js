import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';

class App extends Component {
  state = {
    studentList: [],
  };

  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);


  componentDidMount(){
    axios ({
      method: 'POST',
      url: '/students',
      data: this.state.newStudent
    }).then(response =>{
      console.log('POST new student', response);
      console.log('data', response.data);
    // do we need getStudent() to fresh screen??
    }).catch(err => {
      console.log(err);
    });

    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>

        <StudentList studentList={this.studentList}/>


      </div>
    );
  }
}

export default App;
