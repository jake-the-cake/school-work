const { Fragment } = React

const NumberGame = () => {
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
        </Fragment>
    )
}

ReactDOM.render(<NumberGame />, document.getElementById('root'))