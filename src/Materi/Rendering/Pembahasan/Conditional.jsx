import React from "react";

export default class Conditional extends React.Component {

    state = {
        isLoading : true
    }

    render() {
        // const isLogin = false;
        // let message = '';
        // if (isLogin){
        //     message = 'Anda sudah login'
        // } else {
        //     message = 'Silahkan login telebih dahulu'
        // }
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)

        return (
            <div>
                { this.state.isLoading
                ?<h1>Loading...</h1> 
                :<h1>Selamat datang di kelas mern</h1>
            }
            </div>   
        )


        // if(isLogin) {
        //     return (
        //         <div>
        //             <h1>Anda sudah login</h1>
        //         </div>
        //         )
        // }else {
        //     return (
        //         <div>
        //             <h1>Silahkan login terlebih dahulu</h1>
        //         </div>
        //     )
        // }
    }
}