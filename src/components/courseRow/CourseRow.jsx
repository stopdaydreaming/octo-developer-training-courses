import React from "react";

const CourseRow = ({ title, link, category }) => {
  return (
    <div>
      <tr>
        <td>{title}</td>
        <td>{category}</td>
        <td>
          <a href={link}>
            <button>Course</button>
          </a>
        </td>
      </tr>
    </div>
  );
};

export default CourseRow;
