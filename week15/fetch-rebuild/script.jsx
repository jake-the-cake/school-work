const { Fragment, useState, useEffect } = React

const getNumbers = async () => {
    const url = 'http://numbersapi.com/2'
    const data = await axios(url).then((data) => data)
    console.log(data)
    return data
}

const NumberGame = () => {
    
    const [number, setNumber] = useState(null)
    
    useEffect(() => {
        const testAxios = (async () => {
            const data = await getNumbers().then(({data}) => data)
            const formattedData = await data.split(' ').slice(2).join(' ')
            setNumber(formattedData[0].toUpperCase() + formattedData.slice(1))
        })()
    }, [])

    return (
        <Fragment>
            <div className="number-cell">42</div>
            <div className="instruction">Which of these facts is about that number?</div>
            <div className="answer-block">
                <div className="answer-cell">A</div>
                <div className="answer-cell">B</div>
                <div className="answer-cell">C</div>
                <div className="answer-cell">D</div>
            </div>
            <div className="score-block">0 out of 0 : 0%</div>
            {number}
        </Fragment>
    )
}

ReactDOM.render(<NumberGame />, document.getElementById('root'))