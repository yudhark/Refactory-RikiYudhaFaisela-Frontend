import React, { Component, Fragment } from 'react';

class Question07 extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            objNumber: [9,4,2,4,1,5,3,0]
        })
        this.sortArrayOddNumber = this.sortArrayOddNumber.bind(this);
    }
    componentDidUpdate(){

    }
    sortArrayOddNumber = () => {
        var objNumber = this.state.objNumber;
        const odds = objNumber.filter(value => value%2).sort((a,b) => a-b);

        this.setState({
            objNumber: objNumber.map(value => value%2 ? odds.shift() : value)
        })
        
    }
    componentDidMount() {

    }
    render() {
        return(
            <Fragment>
                <div className="component">
                    <div className="card-header">
                        <h2>Sort odd Number without change the even number position</h2>
                    </div>
                    <div className="card-body">
                        <div className="col text-center col-lg-5">
                            <input type="text" value="[9,4,2,4,1,5,3,0]" readOnly className="form-control"/>
                        </div>
                        <div className="col text-center col-md-2"><button className="btn btn-sm" onClick={this.sortArrayOddNumber}>Sort</button></div>
                        <div className="col text-center col-lg-5">
                            <input type="text" value={this.state.objNumber} readOnly className="form-control"/>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Question07;