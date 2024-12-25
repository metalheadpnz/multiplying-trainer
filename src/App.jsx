import './App.css'
import {useState} from "react";
import {getRandom, getRndFromArr, start} from "./utils.js";

function App() {

    const [givenMultiplier, setGivenMultiplier] = useState(getRndFromArr(start))
    const [randomMultiplier, setRandomMultiplier] = useState(getRandom())
    const [userAnswer, setUserAnswer] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('?')
    const [color, setColor] = useState('black')
    const tables = [2, 3, 4, 5, 6, 7, 8, 9]
    const [checked, setChecked] = useState([2])

    const isCorrectAnswer = +givenMultiplier * +randomMultiplier === +userAnswer

    const nextExample = () => {
        setColor('black')
        setUserAnswer('')
        setCorrectAnswer('?')
        setRandomMultiplier(getRandom())
        setGivenMultiplier(getRndFromArr(checked))
    }

    const testKeyEnter = (e) => {
        if (e.key === 'Enter') {
            if (isCorrectAnswer) {
                setCorrectAnswer((+givenMultiplier * +randomMultiplier).toString())
            }
            setColor(isCorrectAnswer ? 'green' : 'red')
            if (color === 'green') {
                nextExample()
            }
        }
    }

    const inputHandler = (e) => setUserAnswer(e.target.value)


    const onChangeCheckbox = (el) => {

        if (checked.includes(el)) {
            const filtered = checked.filter(elin => elin !== el)
            if (filtered.length > 0) {
                setChecked(filtered)
            }
        } else setChecked([...checked, el])
    }

    const setAll = () => {
        setChecked(tables)
    }

    const clear = () => {
        setChecked([2])
    }

    return (
        <div>
            <div>
                {tables.map(el => <div key={el}>
                        <input type="checkbox"
                               id={el.toString()}
                               checked={checked.includes(el)}
                               onChange={() => onChangeCheckbox(el)}/>
                        <label htmlFor={el.toString()}>{el}</label>
                    </div>
                )}
                <button onClick={setAll}>all</button>
                <button onClick={clear}>clear</button>

            </div>
            <h1>
                {givenMultiplier} * {randomMultiplier} = <span style={{color}}>{correctAnswer}</span>
            </h1>
            <input type="number" value={userAnswer} onChange={inputHandler} onKeyDown={testKeyEnter}/>
            <button onClick={nextExample}
                    disabled={color !== 'green'}
            >
                next
            </button>
        </div>
    )
}

export default App
