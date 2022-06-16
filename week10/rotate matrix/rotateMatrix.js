const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function transpose(A) {
  // we need only swap upper triangle with lower
  let N = A.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      swap(A, i, j, j, i);
    }
  }
}
function swap(A, i, j, k, l) {
  let temp = A[j][i];
  A[j][i] = A[l][k];
  A[l][k] = temp;
}
function exchangeCols(A) {
  // work in from outside
  let N = A.length; // we need only swap N/2 (rounded down)
  let n = Math.floor(N / 2); // round down to integer
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < N; row++) {
      swap(A, col, row, N - 1 - col, row);
    }
  }
}
function handleRotate() {
  transpose(A);
  exchangeCols(A);
  displayNewMatrix()
}

const handleTranspose = () => {
  transpose(A)
  displayNewMatrix()
}

const handleFlipX = () => {
  exchangeCols(A)
  displayNewMatrix()
}

const displayNewMatrix = () => {
  A.forEach((row, i) => {
    row.forEach((col, j) => {
      const targetCell = document.getElementById(`cell${(i*3)+j+1}`)
      targetCell.innerText = col
      if (col === 1) {
        targetCell.style.backgroundColor = '#dcc'
      }
      else {
        targetCell.style.backgroundColor = "#cdc"
      }
    })
  })
}