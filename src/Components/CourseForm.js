import React from 'react';

function CourseForm(props) {

    return (
        <form onSubmit={props.addCourse}>
            <input type="text" id="courseAddInput" onChange={props.changeHandler} value={props.emptyInput}/>
            <button type="submit">Add Course</button>
        </form>
    );
};

export default CourseForm;