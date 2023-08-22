import React, { Component, Fragment } from 'react';

export class CourseList extends Component {

    state = {
        isEditClicked : false,
        newValue : "",
    };

    renderCourseList = () => {
        return(
            <li>
                <span>{this.props.courseDetails.name}</span>
                <button onClick={() => this.toggleState()}>Edit Course</button>
                <button onClick={() => this.props.deleteCourse(this.props.indice)}>Delete Course</button>
            </li>
        );
    };

    toggleState = () => {
        const {isEditClicked} = this.state;
        this.setState({
            isEditClicked : !isEditClicked,
        });
    };

    editChangeHandler = (e) => {
        this.setState({
            newValue : e.target.value,
        });
    };

    updateCourseItem = (e) => {
        e.preventDefault();
        if (this.state.newValue !== "") {
            this.props.editCourse(this.props.indice , this.state.newValue);
            this.toggleState();
        }else{
            window.alert("Please enter the new data to update the course !");
        }
    };

    renderEditForm = () => {
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text" onChange={this.editChangeHandler} defaultValue={this.props.courseDetails.name}/>
                <button className="update-btn">Update Course</button>
            </form>
        );
    };

  render() {
    return (
        <Fragment>    
            {this.state.isEditClicked === false ? this.renderCourseList() : this.renderEditForm()}
        </Fragment>
    );
  };
};

export default CourseList;