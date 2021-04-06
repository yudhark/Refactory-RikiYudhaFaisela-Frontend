import React, { Component, Fragment } from 'react';

class Question01 extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputText: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        let newInputText = {...this.state.inputText}
        newInputText[event.target.name] = event.target.value
        this.setState({
            inputText: newInputText
        })
        console.log(this.state.inputText);
    }
    CSVtoJSON = (csvData) => {
        var data = this.CSVToArray(csvData);
        var objData = [];
        for (var i = 1; i < data.length; i++) {
            objData[i - 1] = {};
            for (var k = 0; k < data[0].length && k < data[i].length; k++) {
                var key = data[0][k];
                objData[i - 1][key] = data[i][k]
            }
        }
        var jsonData = JSON.stringify(objData);
        var price = jsonData['PRICE'];
        console.log(price);
        jsonData = jsonData.replace(/},/g, "},\r\n");
        this.setState({
            inputText: this.printTheJSONinPrettyFormat(jsonData)
        }) 
    }

    CSVToArray = (csvData, delimiter) => {
        delimiter = (delimiter || ", ");
        var pattern = new RegExp((
            "(\\" + delimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + delimiter + "\\r\\n]*))"), "gi");
        var data = [
            []
        ];
        var matches = null;
        while (matches = pattern.exec(csvData)) {
            var matchedDelimiter = matches[1];
            if (matchedDelimiter.length && (matchedDelimiter !== delimiter)) {
                data.push([]);
            }
            if (matches[2]) {
                var matchedDelimiter = matches[2].replace(
                    new RegExp("\"\"", "g"), "\"");
            } else {
                var matchedDelimiter = matches[3];
            }
            data[data.length - 1].push(matchedDelimiter);
        }
        return (data);
    }

    printTheJSONinPrettyFormat = (badformat) => {
        var badjson = JSON.parse(badformat);
        var JSONinPrettyFormat = JSON.stringify(badjson, undefined, 4);
        return JSONinPrettyFormat;
    }

    componentDidMount() {
        // this.CSVtoJSON(this.state.inputText)
    }

    render() {
        return(
            <Fragment>
                <div className="component">
                    <div className="card-header">
                        <h2>CSV into Object</h2>
                        <h3>Copy this Sentences</h3>
                        <span>NAME, CATEGORY, PRICE
                            Xiaomi Redmi 5A, Smartphone, 1199000
                            Macbook Air, Laptop, 13775000
                            Samsung Galaxy J7, Smartphone, 3549000
                            DELL XPS 13, Laptop, 26799000
                            Xiaomi Mi 6, Smartphone, 5399000
                            LG V30 Plus, Smartphone, 10499000</span>
                    </div>
                    <div className="card-body">
                        <textarea name="inputText" id="inputText" cols="30" rows="10" onChange={this.handleChange}></textarea>
                        <button onClick={this.CSVtoJSON}>Convert</button>
                        <textarea name="resultText" id="resultText" cols="30" rows="10" readOnly disabled value={this.state.inputText}></textarea>                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Question01;