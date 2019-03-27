import React, { Component } from 'react';

class rowTable extends Component {
    
    ColorBlock() {
        let styles = {
            'margin': '5px 20px 0px 20px',
            'width': '50%'
        }
        return styles;
    };

    createHeaderRow () {
        return (
            <thead className="thead-dark">
                <tr>
                    <th> id </th>
                    <th> name </th>
                    <th> age </th>
                    <th>  </th>
                </tr>
            </thead>
        )
    };

    tableStyle () {
        let classes = "table table-sm table-striped table-hover table-bordered";

        return classes;
    }

    emptyStyle () {
        let styles = {
            'text-align': 'center'
          }
          return styles;        
    }

    createRow () {
        if (this.props.data.length === 0) return <tr  style = {this.emptyStyle()}>  <td colSpan={3}>No Data Found</td></tr> ;
        return (
            
                this.props.data.map(data => 
                                      <React.Fragment>
                                       <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>
                                            <button className="btn btn-sm btn-primary m-2">Edit</button>
                                            <button className="btn btn-sm btn-danger m-2">Delete</button>
                                        </td>
                                        </tr>
                                    </React.Fragment>
                                    ) 
        )
    };

    render() { 
        return ( 
                 <div className="table-responsive-sm">
                    <table style = {this.ColorBlock()} className = {this.tableStyle()}>
                        {this.createHeaderRow()}
                        <tbody>
                            {this.createRow()}
                        </tbody>
                    </table>
                </div>
         );
    }
}
 
export  default rowTable;