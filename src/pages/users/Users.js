import React, { useState } from "react";
import "./user.css";

const User = () => {
  const [empName, setEmpName] = useState("");
  const [salary, setSalary] = useState("");
  const [contact, setContact] = useState("");
  const [inputarr, setinputarr] = useState([]);
  const [updateInputArr, setUpdateInputArr] = useState({});
  const [openModel, setOpenModel] = useState('false');
  const [searchItem, setSearchItem] = useState([]);
  const [filterItem, setFilterItem] = useState([]);

  const handleNameChange = (event) => {
    setEmpName(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleAdd = () => {
    const employeeInfo = {
      id: inputarr.length + 1 + Math.random(),
      empName,
      salary,
      contact,
      isAvilable: false,
    };
    if (empName !== "") {
      setinputarr([...inputarr, employeeInfo]);
      setEmpName("");
      setSalary("");
      setContact("");
    } else {
      alert("Please enter the details");
    }
  };

  const handleEdit = (employee) => {
    setEmpName(employee.empName);
    setSalary(employee.salary);
    setContact(employee.contact);
    setUpdateInputArr(employee);
  };

  const update = () => {
    const editData = inputarr.map((emp) => {
      if (emp.id === updateInputArr.id) {
        return { ...emp, empName: empName, salary: salary, contact: contact };
      } else {
        return emp;
      }
    });
    // console.log(editData);
    setinputarr(editData);
    setEmpName("");
    setSalary("");
    setContact("");
    setUpdateInputArr({});
  };

  const handleRemove = (id) => {
    const secondRemoved = inputarr.filter((obj) => obj.id !== id);
    setinputarr(secondRemoved);
  };

  const handleArrival = (obj) => {
    const nwArr = inputarr.map((mp) => {
      if (mp.id === obj.id)
        return { ...obj, isAvilable: obj.isAvilable ? false : true };
      else return mp;
    });
    setinputarr(nwArr);
  };

  const ddlChange = (e) => {
    if (e === "asc") {
      setinputarr([...inputarr].sort((a, b) => (a < b ? 1 : -1)));
    } else {
      setinputarr([...inputarr].sort((a, b) => (a > b ? 1 : -1)));
    }
  };

  // const handleOpen = (data) => {
  //   debugger;
  //   setOpenModel(true);
  //   console.log(openModel);

  // };

  const handleSearchBox = (event) => {
    setSearchItem(event.target.value);
    if (event.target.value !== "") {
      debugger
      const filterValue = inputarr.filter(
        (obj) => obj.empName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);

      setFilterItem([...filterValue]);
    } else {
      setFilterItem([]);
      setinputarr([...inputarr]);
    }
  };

  return (
    <>
      <div className="table-responsive">
        <div>
          <label>
            <b>Search</b>
          </label>
          <input
            type="text"
            value={searchItem}
            id="search"
            name="search"
            onChange={handleSearchBox}
          />
        </div>
        <br />
        <label>Employee Name</label>
        <input
          type="text"
          value={empName}
          id="empName"
          name="empName"
          onChange={handleNameChange}
        />
        &nbsp;
        <label>Salary</label>
        <input
          type="number"
          name="salary"
          id="salary"
          value={salary}
          onChange={handleSalaryChange}
        />
        &nbsp;
        <label>Contact No.</label>
        <input
          type="number"
          name="contact"
          id="contact"
          value={contact}
          onChange={handleContactChange}
        />
        &nbsp;
        {Object.keys(updateInputArr).length ? (
          <button onClick={update}>update</button>
        ) : (
          <input type="button" value="Add" onClick={handleAdd} />
        )}
        &nbsp; &nbsp;
        <label>Sort </label> &nbsp;
        <select onChange={(e) => ddlChange(e.target.value)}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <br />
        <table className="table table-hover">
          <tr>
            <th>Id</th>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Contact No.</th>
            <th>Action</th>
          </tr>
          <tbody>
            {filterItem.length > 0
              ? filterItem.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td onClick={() => handleArrival(obj)}>
                      <p className={obj.isAvilable ? "orange-color" : ""}>
                        {obj.empName}
                      </p>
                    </td>
                    <td>{obj.salary}</td>
                    <td>{obj.contact}</td>
                    <td>
                      <button
                        type="button"
                        id="remove"
                        onClick={(e) => handleRemove(obj.id)}
                      >
                        {" "}
                        Remove
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="edit"
                        onClick={(e) => handleEdit(obj)}
                      >
                        {" "}
                        Edit
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="open"
                      // onClick={handleOpen(obj)}
                      >
                        {" "}
                        Open
                      </button>
                    </td>
                  </tr>
                );
              })
              : inputarr.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td onClick={() => handleArrival(obj)}>
                      <p className={obj.isAvilable ? "orange-color" : ""}>
                        {obj.empName}
                      </p>
                    </td>
                    <td>{obj.salary}</td>
                    <td>{obj.contact}</td>
                    <td>
                      <button
                        type="button"
                        id="remove"
                        onClick={(e) => handleRemove(obj.id)}
                      >
                        {" "}
                        Remove
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="edit"
                        onClick={(e) => handleEdit(obj)}
                      >
                        {" "}
                        Edit
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="open"
                      // onClick={(e) => handleOpen(obj)}
                      >
                        {" "}
                        Open
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>

        {/* <!-- The Modal --> */}
        <div id="myModal" className="modal" show={openModel}>

          {/* <!-- Modal content --> */}
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
