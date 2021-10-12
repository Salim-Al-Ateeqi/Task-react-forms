import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const createStudent = (newStudent) => {
    console.log(newStudent);
    setStudentsInfo([...studentsInfo, newStudent]);
  };

  // const deleteStudent = (id) => {
  //   let tempStudent = studentsInfo.filter((student) => student.id !== id);     //The delete code I will activate it after I render the Attendees
  //   setStudentsInfo(tempStudent);
  // };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList list={studentsInfo} />
      ) : (
        <Form createStudent={createStudent} />
      )}
    </div>
  );
}

export default App;
