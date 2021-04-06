import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Answer10 from '../../Component/Answer10/Answer10';

class Question10 extends Component {
    state = {
        posts: [],
        users: [],
        combined: []
    }

    getApiPost = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            var jsonData = JSON.stringify(res.data, undefined, 4)
            // var jsonData = res.data
            this.setState({
                posts: jsonData
            })
        })        
    }

    getApiUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            var jsonData = JSON.stringify(res.data, undefined, 4)
            // var jsonData = res.data
            this.setState({
                users: jsonData
            })
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    
    componentDidUpdate(){
        // console.log(this.state.posts);
    }

    combineTwoSourceApi = () => {
        // var result_them = this.state.posts.join(this.state.users, 'userId');
        // var jsonData = JSON.stringify(result_them,undefined,4)
        // this.setState({
        //     combined: jsonData
        // })
        var obj = this.state.users
        console.log(obj.length);
    }


    componentDidMount() {
        // this.getApiUsers();
        // this.getApiPost();
        // this.combineTwoSourceApi();
        // console.log(this.mergerArrayObjects(this.state.posts, this.state.users));
        axios
        .get("https://jsonplaceholder.typicode.com/posts?_start=1&_limit=10")
        .then(resp => resp.data)
        .then(data => {
            this.setState({posts: data});
        })
        .then(
            axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.data)
            .then(data => {
                this.setState({users: data});
            })
        )
    }

    render() {
        return(
            <Fragment>
               <div className="component">
                    <div className="card-header">
                        <h2>Rest API</h2>
                    </div>
                </div>
                {
                    this.state.posts.map( post => {
                        return <Answer10 data1={post} key={post.id}/>
                    })
                }
                {
                    this.state.users.map( user => {
                        return <Answer10 data1={user} key={user.id}/>
                    })
                }
            </Fragment>
        )
    }
}

export default Question10