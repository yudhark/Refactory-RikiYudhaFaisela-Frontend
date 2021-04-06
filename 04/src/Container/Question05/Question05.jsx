import React, {Component, Fragment} from 'react';

class Question05 extends Component {
    state = {
        text1: 'Mammals',
        text2: 'Bruiser build',
        count1: [],
        count2: [],
        merged1: [],
        merged2: []
    }

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(this.state.text);
    }

    counterChar = (formerChar1, word1, formerChar2, word2) => {
        var countArr1 = [], countArr2 = [];
        let count1 = 0;
        for (let i = 0; i < formerChar1.length; i++) {
            for (let j = 0; j < word1.length; j++) {
                if(word1.charAt(j) === formerChar1[i]) {
                    count1++;
                    // console.log(formerChar1[i]+""+count1);
                }
            }
            countArr1.push(count1);
            this.setState({
                count1: countArr1
            })
            count1=0;
        }
        let count2 = 0;
        for (let i = 0; i < formerChar2.length; i++) {
            for (let j = 0; j < word2.length; j++) {
                if(word2.charAt(j) === formerChar2[i]) {
                    count2++;
                    // console.log(formerChar1[i]+""+count1);
                }
            }
            countArr2.push(count2);
            this.setState({
                count2: countArr2
            })
            count2=0;
        }
        var jsonData1 = JSON.stringify(this.mergeTheValue(formerChar1, countArr1));
        var jsonData2 = JSON.stringify(this.mergeTheValue(formerChar2, countArr2));
        this.setState({
            merged1: jsonData1,
            merged2: jsonData2
        })
    }

    distincChar = () => {
        let uChar1 = this.state.text1.toLowerCase();
        let uChar2 = this.state.text2.toLowerCase().replace(/\s/g, '');
        var char1 = String.prototype.concat(...new Set(uChar1));
        var char2 = String.prototype.concat(...new Set(uChar2));
        this.counterChar(char1,uChar1,char2,uChar2)
    }

    mergeTheValue = (formerWord, counter) => {
        // var obj = {};
        var char = "";
        // for(var i = 0; i < formerWord.length; i++){
        //     obj[formerWord[i]] = counter[i];
        // }
        // return obj;
        var obj = {};
        for(var i = 0; i < formerWord.length; i++){
            char = "*".repeat(counter[i]);
            obj[formerWord[i]] = char;
        }
        return obj;
    }

    componentDidUpdate() {

    }
    componentDidMount() {
        // this.distincChar();
    }

    render() {
        return(
            <Fragment>
                <div className="component">
                    <div className="card-header">
                        <h2>Character Counter</h2>
                    </div>
                    <div className="card-body">
                        <div className="col text-center col-sm-5">
                            <code>{this.state.text1}</code>
                            <br/>
                            <code>{this.state.text2}</code>
                        </div>
                        <div className="col text-center col-sm-2"><button className="btn btn-sm" onClick={this.distincChar}>Count</button></div>
                        <div className="col text-center col-sm-5">
                            <code>{this.state.merged1}</code>
                            <br/>
                            <code>{this.state.merged2}</code>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

    }
}

export default Question05;