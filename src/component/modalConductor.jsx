import React from 'react';


import AddEmployeeModal from './addEmployeeModal.jsx';

const ModalConductor = ({type, modalShow ,onHandleClose, onAddEmployee}) => {
  console.log(modalShow);
  
  switch (type) {
    case 'ADD_EMPLOYEE':
      console.log({type});
      return <AddEmployeeModal onAddEmployee = {onAddEmployee} modalShow = {modalShow} onHandleClose = {onHandleClose} />;
    default:
      return null;
  }
};

export default ModalConductor;