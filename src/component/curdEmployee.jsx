import React, { Component } from "react";
import TableBootstrap from "./tableBootstrap";
import ModalConductor from "./modalConductor";
import axios from "axios";

class curdEmployee extends Component {
  state = {
    type: "",
    url: "https://curdperson.herokuapp.com",
    modalShow: false,
    data: [
      // {name : "oday", id : 1, age : 28},
      // {name : "oday", id : 2, age : 22},
      // {name : "ofay", id : 3, age : 23},
      // {name : "oday", id : 4, age : 24}
    ]
  };

  componentDidMount() {
    const url = this.state.url + "/api/persons";
    axios.get(url).then(res => {
      const responseData = res.data;
      const data = responseData._embedded.persons;
      console.log(">>>>>>>>>>>>" + data);
      this.setState({ data });
    });
  };

  onBeforeSaveCell = (row, cellName, cellValue) => {
    const url = this.state.url + "/api/persons/" + row.id;
    alert(cellName);
    alert(cellValue);
    alert(row.name);

    var name = cellName;
    
    axios.put(url, { name : cellValue   }).then(res => {
      console.log(">>" + res);
    });
    return true;
  };


  onAfterDeleteRow = rowKeys => {
    const url = this.state.url + "/api/persons/" + rowKeys;

    axios.delete(url).then(res => {
      console.log(">>" + res);
    });
    return true;
  };


  handleEmployeeOperation = type => {
    this.setState({ type: type });
    this.setState({ modalShow: true });
  };

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  handleAddEmployee = (name, age) => {
    this.setState({
      data: [...this.state.data, { name: name, id: 99, age: age }]
    });
  };


  render() {
    return (
      <React.Fragment>
        {this.handleOpenModal()}
        <div>
          {/* <button onClick = {() => this.handleEmployeeOperation("ADD_EMPLOYEE")} 
                            style={this.btnStyle()} 
                            className="btn btn-primary btn-sm" >
                        add
                    </button> */}
          <TableBootstrap data={this.state.data} onBeforeSaveCell= {this.onBeforeSaveCell}
                          onAfterDeleteRow = {this.onAfterDeleteRow}/>
        </div>
      </React.Fragment>
    );
  }

  btnStyle() {
    let styles = {
      margin: "20px 20px 0px 20px"
    };
    return styles;
  }

  handleOpenModal() {
    console.log("handleOpenModal");
    if (this.state.type === "") return;
    console.log("handleOpenModal 11");
    return (
      <ModalConductor
        onAddEmployee={this.handleAddEmployee}
        onHandleClose={this.handleClose}
        {...this.state}
      />
    );
  }
}

export default curdEmployee;
