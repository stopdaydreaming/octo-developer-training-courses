import React, { Component } from "react";
import CourseRow from "../courseRow/CourseRow";

import data from '../../data/courses.json';

class Courses extends Component {
  state = {
    courses: [],
    filteredCourses: [],
  };

  componentDidMount() {
    fetch(data)
      .then(res => res.text())
      .then(text => {
        console.log('data:', data);
        console.log('data:', data.courses[0].coursename);
        console.log('data:', data.courses[0].courselink);
        console.log('data:', data.courses[0].category);
        // const courses = data.results.map(result => {
        //   const course = {
        //     title: result.coursename,
        //     link: result.courselink,
        //     category: result.category
        //   };
        //   return course;
        // });
        // this.setState({ courses, filteredCourses: courses });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="mt-5">
        {/* // if course is js, give it js badge */}
        <h1>Currently Enrolled Courses</h1>

        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Title</th>
                  <th scope="col">Tags</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody>
                {this.state.courses.map(course => (
                  <CourseRow {...course} />
                //   <CourseRow {...course} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
