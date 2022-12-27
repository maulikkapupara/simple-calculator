import { useState } from 'react';
import './calcu.css'

const Calcul = () => {
    const [Numbero, setNumberO] = useState("")
    const [Numbert, setNumberT] = useState("")
    const [result, setResult] = useState(0)
    const [sign, setSign] = useState()

    const numberone = (e) => {
        e.preventDefault();
        setNumberO(e.target.value)
    }
    const numbertwo = (e) => {
        e.preventDefault();
        setNumberT(e.target.value)
    }
    const plus = () => {
        setSign('+')
        setResult(parseInt(Numbero) + parseInt(Numbert))
    }
    const minus = () => {
        setSign('-')
        setResult(Numbero - Numbert)
    }
    const multi = () => {
        setSign('*')
        setResult(Numbero * Numbert)
    }
    const dive = () => {
        setSign('/')
        const answer = (Numbero / Numbert).toFixed(2)
        setResult(answer)
    }
    const percentrage = () => {
        setSign('%')
        const ans =(Numbero / 100) * Numbert
        const per = ans.toFixed(2)
        setResult(per)
    }
    const clear = () => {
        setNumberO('');
        setNumberT('');
        setResult('');
        setSign('');
    }

    return (
        <div className="App">
            <nav>CALCULATOR</nav>
            <div className='main'>
                <div className='text'>
                    <input type='text' value={Numbero} onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            alert("please enter oly number")
                        }
                    }}
                        onChange={numberone} />
                    <span>{sign}</span>
                    <input type='text' value={Numbert} onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            alert("please enter oly number")
                        }
                    }} onChange={numbertwo} />
                </div>
                <div className='operation'>
                    <button onClick={plus}>+</button>
                    <button onClick={minus}>-</button>
                    <button onClick={multi}>*</button>
                    <button onClick={dive}>/</button>
                    <button onClick={percentrage}>%</button>
                </div>
                <div className='result'>
                    <button onClick={clear}>Clear</button>
                    <h3>Result:{result}</h3>
                </div>
            </div>
        </div>
    )
}

export default Calcul