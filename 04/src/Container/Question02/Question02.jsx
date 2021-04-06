import React, { Component, Fragment } from 'react';

class Question02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldWord: '',
            newWord: ''
        }
    }

    handleChange = (event) => {
        let newSentence = {...this.state.sentence}
        newSentence[event.target.name] = event.target.value;
        this.setState({
            oldWord: newSentence
        })
    }

    RestrictWords = () => {
        // var restrictedWords = new Array("dolor", "elit", "quis", "nisi", "fugiat", "proident", "laborum");
        var kalimat = this.state.oldWord
        var censoredword = kalimat
            .replace("dolor", "*****")
            .replace("elit", "*****")
            .replace("quis", "****")
            .replace("nisi", "*****")
            .replace("fugiat", "******")
            .replace("proident", "*******")
            .replace("laborum", "******");
        this.setState({
            newWord: censoredword
        })
    }

    componentDidMount() {
        this.RestrictWords();
    }

    render() {
        return(
            <Fragment>
                <div className="component">
                    <div className="card-header">
                        <h2>Censor the Words</h2>
                        <h3>Copy this Sentences</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </div>
                    <div className="card-body">
                        <textarea name="inputText" id="inputText" cols="30" rows="10" onChange={this.handleChange}></textarea>
                        <button onClick={this.RestrictWords}>Censor</button>
                        <textarea name="resultText" id="resultText" cols="30" rows="10" readOnly disabled value={this.state.sentence}></textarea>                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Question02