import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import "font-awesome/css/font-awesome.min.css";

function getCaret(direction) {
  if (direction === "asc") {
    return <span> asc</span>;
  }
  if (direction === "desc") {
    return <span> desc</span>;
  }
  return <span> asc/desc</span>;
}



function onRowSelect(row, isSelected, e) {
  let rowStr = "";
  for (const prop in row) {
    rowStr += prop + ': "' + row[prop] + '"';
  }
  console.log(e);
  alert(`is selected: ${isSelected}, ${rowStr}`);
}

function onSelectAll(isSelected, rows) {
  alert(`is select all: ${isSelected}`);
  if (isSelected) {
    alert("Current display and selected data: ");
  } else {
    alert("unselect rows: ");
  }
  for (let i = 0; i < rows.length; i++) {
    alert(rows[i].id);
  }
}



// function customConfirm(next, dropRowKeys) {
//   const dropRowKeysStr = dropRowKeys.join(',');
//   if (confirm('Are you sure you want to delete ${dropRowKeysStr}?')) {
//     // If the confirmation is true, call the function that
//     // continues the deletion of the record.
//     next();
//   }
// }




class rowTable extends Component {

  onAfterDeleteRow = rowKeys => {
    this.props.onAfterDeleteRow(rowKeys);
  };

  onBeforeSaveCell = (row, cellName, cellValue) => {
   
    this.props.onBeforeSaveCell(row,cellName,cellValue);
  };

  onAfterSaveCell = (row, cellName, cellValue) => {
    alert(`Save cell ${cellName} with value ${cellValue}`);
  
    let rowStr = "";
    for (const prop in row) {
      rowStr += prop + ": " + row[prop] + "\n";
    }
  
    alert("Thw whole row :\n" + rowStr);
  }

  onAfterInsertRow = (row) => {
    let newRowStr = "";
  
    for (const prop in row) {
      newRowStr += prop + ": " + row[prop] + " \n";
    }
    alert("The new row is:\n " + newRowStr);
  }

  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: "name", // default sort column name
      defaultSortOrder: "desc", // default sort order
      onSortChange: this.onSortChange,
      afterInsertRow: this.onAfterInsertRow,
      afterDeleteRow: this.onAfterDeleteRow,
      beforeSaveCell: this.onBeforeSaveCell, // a hook for before saving cell
      afterSaveCell: this.onAfterSaveCell, // a hook for after saving cell
      insertModalHeader: this.createCustomModalHeader,
      insertModalFooter: this.createCustomModalFooter,
      clearSearchBtn: this.createCustomClearButton,
      clearSearch: true
    };
  }

  onSortChange(sortName, sortOrder) {
    console.info("onSortChange", arguments);
  }

  createCustomModalFooter = (onClose, onSave) => {
    const style = {
      backgroundColor: "#ffffff"
    };
    return (
      <div className="modal-footer" style={style}>
        <button className="btn btn-xs btn-info" onClick={onSave}>
          Add
        </button>
        <button className="btn btn-xs btn-danger" onClick={onClose}>
          Close{" "}
        </button>
      </div>
    );
  };

  ColorBlock() {
    let styles = {
      height: "84%"
    };
    return styles;
  }

  createCustomClearButton = onClick => {
    return (
      <button
        className="btn btn-info"
        style={this.ColorBlock()}
        onClick={onClick}
      >
        Clean
      </button>
    );
  };

  createCustomModalHeader(onClose, onSave) {
    const headerStyle = {
      fontWeight: "bold",
      fontSize: "large",
      textAlign: "center",
      backgroundColor: "#eeeeee"
    };
    return (
      <div className="modal-header" style={headerStyle}>
        <h3>Add Employee</h3>
        <button className="btn btn-info" onClick={onClose}>
          Close it!
        </button>
      </div>
    );
  }

  render() {
    const cellEditProp = {
      mode: "click",
      blurToSave: true,
      beforeSaveCell: this.onBeforeSaveCell, // a hook for before saving cell
      afterSaveCell: this.onAfterSaveCell // a hook for after saving cell
    };

    const selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      //unselectable: [ 1, 3 ],
      showOnlySelected: true,
      selected: [2],
      onSelect: onRowSelect,
      onSelectAll: onSelectAll,
      bgColor: function(row, isSelect) {
        return "yellow";
        // if (isSelect) {
        //   const { id } = row;
        //   if (id < 5) return 'yellow';
        //   else if (id < 4) return 'red';
        //   else return 'yellow';
        // }
        // return null;
      }
    };

    let classes = "table table-sm table-striped table-hover table-bordered";

    return (
      <div className="table-responsive-sm">
        {/* <button onClick={ this.handleBtnClick } className='btn btn-default'>Click to apply text filter</button> */}
        <BootstrapTable
          selectRow={selectRowProp}
          tableHeaderClass={this.classes}
          trClassName={this.classes}
          TableHeaderColumn={this.classes}
          tableBodyClass={this.classes}
          containerClass={this.classes}
          tableContainerClass={this.classes}
          headerContainerClass={this.classes}
          bodyContainerClass={this.classes}
          cellEdit={cellEditProp}
          multiColumnSort={2}
          options={this.options}
          search={true}
          deleteRow={true}
          insertRow={true}
          data={this.props.data}
          striped
          hover
          pagination
        >
          <TableHeaderColumn
            autoValue={true}
            width="90"
            tdStyle={{ whiteSpace: "normal" }}
            thStyle={{ fontWeight: "lighter" }}
            headerAlign="center"
            dataAlign="center"
            isKey
            dataField="id"
            caretRender={getCaret}
            dataSort
          >
            Employee ID
          </TableHeaderColumn>
          {/* <TableHeaderColumn  hiddenOnInsert                 width='200' tdStyle={ { whiteSpace: 'normal' } } thStyle={ { 'fontWeight': 'lighter' } } headerAlign='center' dataAlign='center' filter={ { type: 'TextFilter', delay: 500 }} dataField='name' dataSort>Employee Name</TableHeaderColumn> */}
          <TableHeaderColumn
            width="200"
            tdStyle={{ whiteSpace: "normal" }}
            thStyle={{ fontWeight: "lighter" }}
            headerAlign="center"
            dataAlign="center"
            filter={{ type: "TextFilter", delay: 500 }}
            dataField="name"
            dataSort
          >
            Employee Name
          </TableHeaderColumn>
          <TableHeaderColumn
            width="150"
            tdStyle={{ whiteSpace: "normal" }}
            thStyle={{ fontWeight: "lighter" }}
            headerAlign="center"
            dataAlign="center"
            filter={{
              type: "TextFilter",
              delay: 1000,
              numberComparators: ["=", ">", "<="]
            }}
            dataField="age"
            dataSort
          >
            Employee Age
          </TableHeaderColumn>
          <TableHeaderColumn
            width="150"
            dataField="active"
            editable={{
              type: "checkbox",
              options: { values: "Active:InActive" }
            }}
          >
            Active
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default rowTable;
