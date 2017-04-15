// det :: [[Number]] -> Number
const det = (mtx) => {
  const size = mtx.length;
  const columns = size ? mtx[0].length : -1;
  
  if (size != columns) throw new Error('matrix is not square');
  if (size == 1) return mtx[0][0];
  return (
    mtx[0]
    .map((el, ix) => sgn(ix) * el * det(minorMatrix(mtx, [0, ix])))
    .reduce((acc, x) => acc + x, 0)
  );
}


// sgn :: Number -> Number
const sgn = (x) => x % 2 == 0 ? 1 : -1;


// minorMatrix :: [[Number]] -> [[Number]]
const minorMatrix = (mtx, [row, col]) => {
  const matrix = mtx.map(r => r.slice());
  matrix.splice(row, 1);
  matrix.forEach(row => { row.splice(col, 1); });
  return matrix;
}
