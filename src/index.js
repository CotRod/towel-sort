module.exports = function towelSort(matrix) {
    if (matrix && matrix.length) {
        return matrix.map((innerArray, index) => index % 2 === 0 ? innerArray : innerArray.reverse())
            .reduce((arr, innerArray) => arr.concat(innerArray));
    }
    return [];
};
