import React from "react";
import Student from "./Student";

function StudentsList(props) {
  const list = props.list.map((student) => <Student student={student} />);
  return <div>{list}</div>;
}

export default StudentsList;
