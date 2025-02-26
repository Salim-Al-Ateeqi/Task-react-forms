import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const createStudent = (newStudent) => {
    const id = studentsInfo.length + 1;
    const studentID = { ...newStudent, id: id };
    setStudentsInfo([...studentsInfo, studentID]);
    console.log(newStudent);
  };

  const deleteStudent = (id) => {
    let tempStudent = studentsInfo.filter((student) => student.id !== id);
    setStudentsInfo(tempStudent);
  };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList list={studentsInfo} deleteStudent={deleteStudent} />
      ) : (
        <Form createStudent={createStudent} />
      )}
    </div>
  );
}

export default App;
