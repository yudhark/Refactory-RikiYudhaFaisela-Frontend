import React, { Component } from 'react';
import Question04 from '../Question04/Question04';
import Question05 from '../Question05/Question05';
import Question06 from '../Question06/Question06';
import Question07 from '../Question07/Question07';
import Question08 from '../Question08/Question08';
import Question09 from '../Question09/Question09';
import Question10 from '../Question10/Question10';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="header">

                </div>
                <div className="body">
                <p className="bold-text">Question 4</p>
                <hr/>
                <Question04/>
                <hr/>
                <p className="bold-text">Question 5</p>
                <hr/>
                <Question05 />
                <hr/>
                <p className="bold-text">Question 6</p>
                <hr/>
                <Question06 />
                <hr/>
                <p className="bold-text">Question 7</p>
                <hr/>
                <Question07 />
                <hr/>
                <p className="bold-text">Question 8</p>
                <hr/>
                <Question08 />
                <hr/>
                <p className="bold-text">Question 9</p>
                <hr/>
                <Question09 />
                <hr/>
                <p className="bold-text">Question 10</p>
                <hr/>
                <Question10 />   
                </div>      
            </div>
        )
    }
}

export default Home;