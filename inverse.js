// Calculates the inverse of a given matrix
// Return value is the resulting matrix or false if the matrix is incompatible
function inverse(matrix) {
    let numRows = matrix.length
    let numColumns = matrix[0].length

    //Check if matrix is invertible
    if (numRows != numColumns) {
        return false
    }

    let copiedMatrix = [];

    let i, j;
    for (i = 0; i < matrix.length; i++)
        copiedMatrix[i] = matrix[i].slice();
    if (determinant(copiedMatrix, numRows, numColumns) == 0) {
        return false
    }


    // Append the identity matrix to given matrix
    for (i = 0; i < numRows; i++) {
        for (j = 0; j < numColumns; j++) {
            if (i == j) {
                matrix[i].push(1)
            }
            else {
                matrix[i].push(0)
            }
        }
    }

    // Take the reduced row echelon of the matrix
    reducedMatrix = rowReductionEchelon(matrix)

    // Extract the inverse from the appended matrix
    let inverseMatrix = new Array(numRows);
    for (i = 0; i < numRows; i++) {
        inverseMatrix[i] = new Array(numColumns);
    }

    for (i = 0; i < numRows; i++) {
        for (j = 0; j < numColumns; j++) {
            inverseMatrix[i][j] = reducedMatrix[i][j + numColumns];
        }
    }

    return inverseMatrix

}