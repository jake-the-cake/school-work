const { Fragment, useState, useEffect } = React

const getNumbers = async (number) => {
    const url = `http://numbersapi.com/${number}/trivia`
    const data = await axios(url).then((data) => data).catch(err => {
        console.error('AXIOS ERROR @ getNumbers(): %c' + err.message,'color: green; font-weight: 700')
        const result = {data: numberFacts[number]}
        return result
    })
    return await data
}

const createNewQuestion = async (setNumber, answers, setAnswers, setCurrentQuestion, setIsLoading) => {
    const answerArray = []
    let answerHolder
    for (let i=1; i <= 4; i++) {
        let isValidating = true
        while (isValidating === true) {
            const data = await getNumbers(parseInt(Math.random() * 100)).then(({data}) => data)
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
    setIsLoading(false)
}

const NumberGame = () => {
    const [number, setNumber] = useState(null)
    const [answers, setAnswers] = useState([])
    const [attempts, setAttempts] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState([])
    const [doContinue, setDoContinue] = useState(null)
    const [isPlaying, setIsPLaying] = useState(true)
    
    useEffect(() => {
        if (isPlaying === true) {
            setIsLoading(true)
            createNewQuestion(setNumber, answers, setAnswers, setCurrentQuestion, setIsLoading)
        }
    }, [isPlaying])

    const handleContinue = () => {
        const [...buttons] = document.getElementsByClassName('answer-button')
        buttons.forEach(button => {
            button.style = {}
        })

        setDoContinue(null)
        setIsPLaying(true)
    }

    const handleSubmitAnswer = (e) => {
        const selectedAnswer = e.target.innerText

        setAttempts(attempts + 1)

        const [...buttons] = document.getElementsByClassName('answer-button')
        buttons.forEach(button => {
            console.log(button)
            if (button.id !== e.target.id && button.innerText !== currentQuestion.text) {
                button.style.backgroundColor = '#376937'
                button.style.color = '#eded37'
                button.style.filter = 'blur(2px)'
            }
            else if (button.innerText === currentQuestion.text) {
                button.style.backgroundColor = '#693769'
                button.style.color = '#69ed37'
                button.style.transform = 'scale(1.3)'
                button.style.zIndex = '10'
                button.style.borderColor = '#69ed37'
                button.style.boxShadow = '0px 3px 12px 8px #373737'
            }
            button.style.pointerEvents = 'none'
        })

        console.log('%cSelection:', 'color:red', selectedAnswer)
        if (selectedAnswer === currentQuestion.text) {
            setCorrectAnswers(correctAnswers + 1)
            e.target.style.backgroundColor = '#3769ed'
            e.target.style.color = '#ededed'
            console.log('%cResult:', 'color:blue', 'CORRECT')
        }
        else {
            e.target.style.backgroundColor = '#ed6937'
            e.target.style.color = '#ededed'
            console.log('%cResult:', 'color:blue', 'Wrong Answer')
        }
        setDoContinue(true)
        setIsPLaying(false)
    }

    return (
        <Fragment>
            {
                isLoading ? <div className="loading">Loading</div> : 
                    <Fragment>
                        <div className="instruction">Your Number Is:</div>
                        <div className="number-cell">{number}</div>
                        <div className="instruction">Which of these facts is about that number?</div>
                        {
                            doContinue && (
                                <div className='continue-block' onClick={handleContinue}>
                                    Continue?
                                </div>
                            )
                        }
                        <div className="answer-block">
                        {
                            currentQuestion?.grid?.map((answer, index) => {
                                return <div className='answer-button' onClick={handleSubmitAnswer} id ={`answer${index}`} key={`answer${index}`}>{answer}</div>
                            })
                        }
                        </div>
                        <div className='score-box'>
                            <span className='score-static'>You've gotten</span>
                            <span className='score-data'>{correctAnswers}</span>
                            <span className='score-static'>out of</span>
                            <span className='score-data'>{attempts}</span>
                            <span className='score-static'> correct so far!</span>
                        </div>
                    </Fragment> 
                
            }
        </Fragment>
    )
}

ReactDOM.render(<NumberGame />, document.getElementById('root'))
