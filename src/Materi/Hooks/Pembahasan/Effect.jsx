import { useEffect, useState } from "react"

const Effect = () => {

    let [text, setText] = useState('');
    let [user, setUser] = useState ({});
    let [second, setSecond] = useState(0);

    useEffect(() => {
        console.log('GET API');
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(res => setUser(usr => (res)) )
    }, []);

    useEffect(() => {
        localStorage.setItem('text', text);
        console.log('sinkronisasi');
    }, [text]);

    useEffect(() => {
        console.log('interval');
        setInterval(() => {
            setSecond(s => s + 1);
        }, 1000)
    }, []);


    return (
        <div>
            <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)} />
            <p>{user.name}</p>
            <div>Waktu {Math.floor(second / 60)} menit {second % 60} detik</div>
        </div>
    )
}

export default Effect;