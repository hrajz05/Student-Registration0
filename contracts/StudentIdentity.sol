// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract StudentIdentity {
    struct Student {
        string name;
        uint256 dob; // Date of birth (timestamp)
        string studentID;
    }

    mapping(address => Student) private students;

    event StudentRegistered(address indexed studentAddress, string name, uint256 dob, string studentID);

    function registerStudent(string memory _name, uint256 _dob, string memory _studentID) public {
        students[msg.sender] = Student(_name, _dob, _studentID);
        emit StudentRegistered(msg.sender, _name, _dob, _studentID);
    }

    function getStudent(address _studentAddress) public view returns (string memory, uint256, string memory) {
        Student memory student = students[_studentAddress];
        return (student.name, student.dob, student.studentID);
    }
}
