import React, { useState, useEffect } from "react";
import { initWeb3, getContract, getWeb3 } from "./contract";
import "./index.css";

const App = () => {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [studentID, setStudentID] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const loadWeb3 = async () => {
      await initWeb3();
      const accounts = await getWeb3().eth.getAccounts();
      setAccount(accounts[0]);
    };
    loadWeb3();
  }, []);

  const registerStudent = async () => {
    const contract = getContract();
    await contract.methods
      .registerStudent(name, dob, studentID)
      .send({ from: account });
    alert("Student registered successfully!");
  };

  const getStudentInfo = async () => {
    const contract = getContract();
    const studentInfo = await contract.methods.getStudent(address).call();
    setInfo(
      `Name: ${studentInfo[0]}, Date of Birth: ${studentInfo[1]}, Student ID: ${studentInfo[2]}`
    );
  };

  return (
    <div className="App">
      <h1>Student Registration</h1>
      <button
        onClick={() =>
          window.ethereum.request({ method: "eth_requestAccounts" })
        }
      >
        Connect Wallet
      </button>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />
        <button onClick={registerStudent}>Register Student</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Student Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={getStudentInfo}>Get Student Info</button>
        <div>{info}</div>
      </div>
    </div>
  );
};

export default App;
