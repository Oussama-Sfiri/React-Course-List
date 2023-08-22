import React, { Component } from 'react';
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList';

class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JQuery" },
    ],
    newCourse : "",
  };

  //changeHandler
  changeHandler = (e) => {
    this.setState({
      newCourse : e.target.value,
    });
  };

  //addCourse
  addCourse = (e) => {
    e.preventDefault();
    if(e.target.courseAddInput.value !== ""){
      const newCourse = this.state.newCourse;
      const allCourses = this.state.courses;
      allCourses.push({name : newCourse});
      this.setState({
        courses : allCourses,
        newCourse : "",
      });
    }else{
      window.alert("Please Entere Course Name !")
    };
  };

  //deleteCourse
  deleteCourse = (indice) => {
    const allCourses = this.state.courses;
    const filteredCourses = allCourses.filter((course,index) => {
      if(index !== indice){
        return course;
      };
    });
    this.setState({
      courses : filteredCourses,
    });
  };

  // editCourse
  editCourse = (courseIndex, newValue,e) => {
    let allCourses = this.state.courses;
    let editedCourse = allCourses[courseIndex];
    editedCourse.name = newValue;
    this.setState({
      courses : allCourses,
    });
  };

  render(){
    const {courses} = this.state;
    const courseList = courses.length ? courses.map((course , index) => <CourseList key={index} courseDetails={course} indice={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>) : <p>There is no course to show</p>;

    return (
      <section className="App">
        <h2>Course List</h2>
        <CourseForm changeHandler={this.changeHandler} addCourse={this.addCourse} emptyInput={this.state.newCourse}/>
        <ul>{courseList}</ul>
      </section>
    );
  }
};

export default App;
