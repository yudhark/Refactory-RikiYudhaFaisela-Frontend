import React, { Component, Fragment } from 'react';

class Question06 extends Component {
    constructor(props){
        super(props);
        this.state = {
            word: '',
            missingChar: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.findWhatMissing = this.findWhatMissing.bind(this);
    }

    findWhatMissing = () => {
        var i, j=0,m=122;
        var str = this.state.word
        if(str) {
            i = str.charCodeAt(0);
            while (i<=m && j < str.length) {
                if(String.fromCharCode(i) !== str.charAt(j)) {
                    // this.state.missingChar = String.fromCharCode(i);
                    this.setState({
                        missingChar: String.fromCharCode(i)
                    })
                    return String.fromCharCode(i);         
                }
                i++;
                j++;
            }
        }
        return undefined;
    }

    handleChange = (event) => {
        this.setState({
            word: event.target.value
        })
    }
    
    render() {
        return(
            <Fragment>
                <div className="component">
                    <div className="card-header">
                        <h2>Find Missing Alphabet Char</h2>
                    </div>
                    <div className="card-body">
                        <div className="col text-center col-sm-5">
                            <input className="form-control" name="inputText" id="inputText" rows="10" onChange={this.handleChange}/>
                        </div>
                        <div className="col text-center col-sm-2">
                            <button className="btn btn-sm" onClick={this.findWhatMissing}>Find</button>                           
                        </div>
                        <div className="col text-center col-sm-5">
                            <input className="form-control" name="resultText" id="resultText" rows="10" value={this.state.missingChar} readOnly disabled/>
                        </div>                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Question06;