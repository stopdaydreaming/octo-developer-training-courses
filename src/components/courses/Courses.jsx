import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import courses from "../../data/courses.js";

const Courses = () => {
  return (
    <div className="mt-5">
      {/* // if course is js, give it js badge */}
      <h1>Currently Enrolled Courses</h1>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Tags</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.coursename}</td>
                  <td>{course.category}</td>
                  <td>
                    <a href={course.courselink}>
                      <button className="btn-tomato">Course</button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
