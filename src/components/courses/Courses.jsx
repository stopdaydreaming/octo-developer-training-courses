import React, { Component } from "react";
import CourseRow from "../courseRow/CourseRow";

class Courses extends Component {
  state = {
    courses: [],
    filteredCourses: [],
  };

  componentDidMount() {
    fetch("../../data/courses.json")
      .then(res => res.json())
      .then(data => {
        const courses = data.results.map(result => {
          const course = {
            title: result.coursename,
            link: result.courseurl,
            category: result.category
          };
          return course;
        });
        this.setState({ courses, filteredCourses: courses });
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
