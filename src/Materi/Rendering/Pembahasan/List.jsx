import React from "react";

export default class List extends React.Component {


    state = {
        users: ['Teguh','Firmansyah','Edo','Wawan','Ikram']
    }
    render () {
        return (
            <div>
                <ul>
                {
                    // this.state.users.map((users, i ) => {
                    //     return <li key={i}>{users}</li>
                    // })

                    this.state.users.map(function(users, i) {
                        return <li key={i}>{users}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}