import { useRef } from 'react';
import './App.css';

function App3() {
    const danielRef = useRef(null);
    const joaoRef = useRef(null);
    const pedrolRef = useRef(null);

    function handleClickDaniel() {
        if (danielRef.current.style.color === 'black') {
            danielRef.current.style.color = 'red';

        } else {
            danielRef.current.style.color = 'black'
        }
        if (danielRef.current.style.fontSize === '16px') {
            danielRef.current.style.fontSize = '30px';

        } else {
            danielRef.current.style.fontSize = '16px'
        }

    }

    function handleClickJoao() {
        if (joaoRef.current.style.color === 'black') {
            joaoRef.current.style.color = 'green';

        } else {
            joaoRef.current.style.color = 'black'
        }
        if (joaoRef.current.style.fontSize === '16px') {
            joaoRef.current.style.fontSize = '60px';

        } else {
            joaoRef.current.style.fontSize = '16px'
        }

    }

    function handleClickPedro() {
        if (pedrolRef.current.style.color === 'black') {
            pedrolRef.current.style.color = 'blue';

        } else {
            pedrolRef.current.style.color = 'black'
        }
        if (pedrolRef.current.style.fontSize === '16px') {
            pedrolRef.current.style.fontSize = '90px';

        } else {
            pedrolRef.current.style.fontSize = '16px'
        }

    }

    return (
        <div className="App">
            <strong
                ref={danielRef}
                onClick={() => handleClickDaniel()}
                style={{
                    color: 'black',
                    fontSize: '16px'
                }}


            >
                Daniel
            </strong>
            <strong
                ref={joaoRef}
                onClick={() => handleClickJoao()}
                style={{
                    color: 'black',
                    fontSize: '16px'
                }}
            >
                João
            </strong>
            <strong ref={pedrolRef}
                onClick={() => handleClickPedro()}
                style={{
                    color: 'black',
                    fontSize: '16px'
                }}
            >
                Pedro
            </strong>
        </div >
    );
}

export default App3;
