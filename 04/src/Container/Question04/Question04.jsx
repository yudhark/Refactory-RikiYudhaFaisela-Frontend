import React, { Component, Fragment } from 'react';
import "./Question04.css";

class Question04 extends Component {
    primeCheck(number) {
        for(var x = 2; x < number; x++){
            if ((number % x) === 0 && number > 2) {
                return false;
            }
        }
        return true;
    }

    render() {
        var number = 0;
        const evenNumber = [];
        const oddNumber = [];
        const multiplies5 = [];
        const primeNumber = [];
                
        for (number; number<=1000; number++) {
            if(number%2===0){
                evenNumber.push(number)
                if(number%5===0 && number > 1) {
                    multiplies5.push(number)
                    if(this.primeCheck(number) && number > 1){
                        primeNumber.push(number)
                    }                    
                }else if(this.primeCheck(number) && number > 1){
                    primeNumber.push(number)
                }
            }else{
                oddNumber.push(number)
                if(number%5===0 && number > 1) {
                    multiplies5.push(number)
                    if(this.primeCheck(number) && number > 1){
                        primeNumber.push(number)
                    }
                }else if(this.primeCheck(number) && number > 1){
                    primeNumber.push(number)
                }
            }
        }

        return (
            <Fragment>            
            <div className="component">
                <div className="card-header">
                    <h2 className="text-center">Grouping Number from 0 to 1000 </h2>                  
                </div>
                <div className="card-body">
                    <div className="bordered-box">
                    <h3>Even Number</h3>
                    <ul>
                    {
                        evenNumber.map(even => (<li key={even} className="number-list">{even}</li>))
                    }
                    </ul>
                    </div>
                    <div className="bordered-box">
                    <h3>odd Number</h3>
                    <ul>
                    {
                        oddNumber.map(odd => (<li key={odd} className="number-list">{odd}</li>))
                    }
                    </ul>
                    </div>
                    <div className="bordered-box">
                    <h3>Multiplies 5 Number</h3>
                    <ul>
                    {
                        multiplies5.map(multiplies5 => (<li key={multiplies5} className="number-list">{multiplies5}</li>))
                    }
                    </ul>
                    </div>
                    <div className="bordered-box">
                    <h3>Prime Number</h3>
                    <ul>
                    {
                        primeNumber.map(primeNumber => (<li key={primeNumber} className="number-list">{primeNumber}</li>))
                    }
                    </ul>
                    </div>
                    <div className="bordered-box">
                    <h3>Prime Number under 100</h3>
                    <ul>
                    {
                        primeNumber.map(primeNumber => {
                            if(primeNumber<=100){
                                return <li key={primeNumber} className="number-list">{primeNumber}</li>
                            }else{
                                return null;
                            }
                        })
                    }
                    </ul>
                    </div>
                </div>
            </div>
            </Fragment>            
        )
    }
}

export default Question04;