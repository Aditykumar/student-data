import React from "react";
import StudentTable from "./StudentTable";
import { Link } from "react-router-dom";

export default function Student() {

  return (
    <div>
        <div className="headStudent">
            <div className="headingStudent">Student Details </div>
            <div><Link to="#"> <button className="btnStudent">Add Student</button></Link></div>
        </div>
        <div className="tableContainer">
            <div className="table"><StudentTable /> </div>
        </div>
    </div>
  );
}
