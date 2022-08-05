const { Fragment, useState, useEffect } = React

const getNumbers = async (number) => {
    const url = `http://numbersapi.com/${number}/trivia`
    const data = await axios(url).then((data) => data)
    return await data
}

const createNewQuestion = async (setNumber, answers, setAnswers, setCurrentQuestion) => {
    const answerArray = []
    let answerHolder
    for (let i=1; i <= 4; i++) {
        let isValidating = true
        while (isValidating === true) {
            const data = await getNumbers(parseInt(Math.random() * 101)).then(({data}) => data)
            const splitData = await data.split(' ')
            const textFromData = splitData.slice(2).join(' ')
            const formattedTextFromData = textFromData[0].toUpperCase() + textFromData.slice(1)
            if (i === 1) {
                setNumber(splitData[0])
                    answerHolder = splitData[0]
                    answerArray.push(formattedTextFromData)
                    isValidating = false
            }
            else {
                let isUnique = true
                answerArray.forEach(answer => {
                    if (answer === formattedTextFromData) {
                        isUnique = false
                    }
                })
                if (isUnique === true) {
                    answerArray.push(formattedTextFromData)
                    isValidating = false
                }
            }            
        }
    }
    setAnswers(answerArray)
    const createAnswerGrid = ([answer, ...rest]) => {
        const answerGrid = [...rest]
        const answerPosition = parseInt(Math.random() * 4)
        answerGrid.splice(answerPosition, 0, answer)
        return answerGrid
    }
    const gridData = {number: answerHolder, text: answerArray[0], grid: createAnswerGrid(answerArray)}
    setCurrentQuestion(gridData)
}

const NumberGame = () => {
    const [number, setNumber] = useState(null)
    const [answers, setAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState([])
    
    useEffect(() => {
        createNewQuestion(setNumber, answers, setAnswers, setCurrentQuestion)
    }, [])

    const handleSubmitAnswer = (e) => {
        const selectedAnswer = e.target.innerText
        console.log('%cSelection:', 'color:red', selectedAnswer)
        if (selectedAnswer === currentQuestion.text) {
            console.log('%cResult:', 'color:blue', 'CORRECT')
        }
        else {
            console.log('%cResult:', 'color:blue', 'Wrong Answer')
        }
    }

    return (
        <Fragment>
            <div className="instruction">Your Number Is:</div>
            <div className="number-cell">{number}</div>
            <div className="instruction">Which of these facts is about that number?</div>
            <div className="answer-block">
                { currentQuestion?.grid?.map((answer, index) => {
                    return <div className='answer-button' onClick={handleSubmitAnswer} id ={`answer${index}`} key={`answer${index}`}>{answer}</div>
                }) }
            </div>
        </Fragment>
    )
}

ReactDOM.render(<NumberGame />, document.getElementById('root'))