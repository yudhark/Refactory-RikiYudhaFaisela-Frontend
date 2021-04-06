import React, { Component, Fragment } from 'react';

class Question09 extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            objNumber: [3, 12, 4, 5, 8, 9]
        })
        this.sortArray = this.sortArray.bind(this);
    }
    componentDidUpdate(){

    }
    sortArray = () => {
        var array = this.state.objNumber;
        array.sort((a,b)=> {
            return a - b
        })
        this.setState({
            objNumber: array
        })  
    }

    render() {
        return (
            <Fragment>
                <div className="component">
                    <div className="card-header">
                        <h2>Sorting the Given Array</h2>
                    </div>
                    <div className="card-body">
                        <div className="col text-center col-sm-5"><input className="form-control" type="text" value="[3, 12, 4, 5, 8, 9]" readOnly  disabled/></div>
                        <div className="col text-center col-sm-2"><button className="btn btn-sm" onClick={this.sortArray}>Sort</button></div>
                        <div className="col text-center col-sm-5"><input className="form-control" type="text" value={this.state.objNumber} readOnly  disabled/></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Question09