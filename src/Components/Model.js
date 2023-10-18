import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Model = (props) => {
  
  // const [show, setShow] = useState();
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const toggleModal = () => {
  //   setShow(!show);
  // };

  const {show,handleToggle,empData} = props;   // distucture. tecnic
  // const show=props.show;
  // const handleToggle = props.handleToggle;

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={()=>handleToggle(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        Employee Name : {empData.empName}
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleToggle(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleToggle(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Model;
