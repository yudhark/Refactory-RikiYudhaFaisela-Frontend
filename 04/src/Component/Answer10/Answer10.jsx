import React from 'react';

const Answer10 = (props) => {

    console.log(props.data1);

    var Obj = {
        "userId": props.data1.userId,
        "id": props.data1.id,
        "title": props.data1.title,
        "body": props.data1.body,
        "user": {
            "id": props.data1.id,
            "name": props.data1.name,
            "username": props.data1.username,
            "email": props.data1.email,
            "address": {
                "street": props.data1.street,
                "suite": props.data1.suite,
                "city": props.data1.city,
                "zipcode": props.data1.zipcode,
                "geo": {
                    "lat": props.data1.lat,
                    "lng": props.data1.lng,
                }
            },
            "phone": props.data1.phone,
            "website": props.data1.website,
            "company": {
                "name": props.data1.name,
                "catchPhrase": props.data1.catchPhrase,
                "bs": props.data1.bs
            }
        }
    }
    var jsonData = JSON.stringify(Obj,undefined,4)
    

    return(
        <div className="post">
            <pre>{jsonData}</pre>
        </div>
    )
}

export default Answer10;