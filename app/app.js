function getDescendingNumbers(start, stop)
{
    if (typeof start !== 'number' || typeof stop !== 'number' || start <= stop) {
        return false;
    }
    var result = start;
    for (var i = start - 1; i >= stop; i--) {
        result = result + ' ' + i;
    }
    return result;
}

function uselessFunction(arg) {
  var i=0;
  return i;
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers,
    uselessFunction: uselessFunction
};
