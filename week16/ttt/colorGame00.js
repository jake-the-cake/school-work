const { useState } = React

const winningCombos = [
  [
    'a1','a2','a3'
  ],
  [
    'b1','b2','b3'
  ],
  [
    'c1','c2','c3'
  ],
  [

    'a1','b1','c1'
  ],
  [
    'a2','b2','c2'
  ],
  [
    'a3','b3','c3'
  ],
  [
    'a1','b2','c3'
  ],
  [
    'a3','b2','c1'
  ]
]

const xBlocks = []
const oBlocks = []

const checkForWinner = (choices, setStatus) => {
  winningCombos.forEach((combo) => {
    const arr = []
    choices.forEach(choice => {
      const x = combo.filter(num => num === choice)
      if (x.length > 0) arr.push(x[0])
    })
    if (arr.length === 3) setTimeout(() => {
      setStatus('Winner')
      document.getElementById('root').style.pointerEvents = 'none'
      arr.forEach(item => {
        document.getElementById(item).style.background = 'yellow'
      })
    }, 10)
  })
}

const handleChangePiece = (player, setPlayer, piece, setPiece, id, setStatus) => {
  if (!piece) {
    setPiece(player ? 'x' : 'o')
    setPlayer(!player)
    player
    ? xBlocks.push(id.id)
    : oBlocks.push(id.id)
    checkForWinner(player ? xBlocks : oBlocks, setStatus)
  }
}

const Box = ({id, player, setPlayer, setStatus}) => {
  const [piece, setPiece] = useState(null)
  return (
    <div className="block" id={id} onClick={(e) => handleChangePiece(player, setPlayer, piece, setPiece, e.target, setStatus)}>{piece && piece}</div>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(true)
  const [status, setStatus] = useState(`Player X`)

  const handleStatus = (player) => {
    return player !== true ? 'X' : 'O'
  }

  return (
    <div
      className="game-board"
      onClick={(e) => {
        setStatus(`Player ${handleStatus(player)}`)
      }}
    >
    <div className='grid-row'>
      <Box id='a1' player={player} setPlayer={setPlayer} setStatus={setStatus}></Box>
      <Box id='a2' player={player} setPlayer={setPlayer} setStatus={setStatus}></Box>
      <Box id='a3' player={player} setPlayer={setPlayer} setStatus={setStatus}></Box>
    </div>
    <div className='grid-row'>
      <Box id='b1' player={player} setPlayer={setPlayer} setStatus={setStatus}></Box>
      <Box id='b2' player={player} setPlayer={setPlayer} setStatus={setStatus}></Box>
      <Box id='b3' player={player} setPlayer={setPlayer} setStatus={setStatus}></Box>
    </div>
    <div className='grid-row'>
      <Box id='c1' player={player} setPlayer={setPlayer} setStatus={setStatus}></Box>
      <Box id='c2' player={player} setPlayer={setPlayer} setStatus={setStatus}></Box>
      <Box id='c3' player={player} setPlayer={setPlayer} setStatus={setStatus}></Box>
    </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
