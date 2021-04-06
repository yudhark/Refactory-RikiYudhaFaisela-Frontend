import React, { Component, Fragment } from 'react';

class Question08 extends Component {
    constructor(props){
        super(props);
        this.state = ({
            text: '23dn3ir30fd2eddd',
            result: []
        })
        this.handleChange = this.handleChange.bind(this);
        this.maskingText = this.maskingText.bind(this);
    }

    maskingText = () => {
        var textwanttomask = this.state.text;
        var maskedtext = [];
        for (let i = 0; i < textwanttomask.length; i++) {
            console.log(textwanttomask.length);
            if(i<textwanttomask.length-3) {
                maskedtext.push("*");
            }else{
                maskedtext.push(textwanttomask[i])
            }
            this.setState({
                text: maskedtext.join("")
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(this.state.text);
    }

    componentDidUpdate(){

    }

    render() {
        return(
            <Fragment>
                <div className="component">
                    <div className="card-header">
                        <h2>Masking Text</h2>
                    </div>
                    <div className="card-body">
                        <div className="col text-center col-sm-5"><input className="form-control" type="text" value="23dn3ir30fd2eddd" name="inputText" onClick={this.handleChange} readOnly/></div>
                        <div className="col text-center col-sm-2"><button className="btn btn-sm" onClick={this.maskingText}>Masking</button></div>
                        <div className="col text-center col-sm-5"><input className="form-control" type="text" value={this.state.text} readOnly/></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Question08;