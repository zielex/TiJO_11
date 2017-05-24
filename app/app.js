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

function getUpscedingNumbers(start,stop){
	if (typeof start !== 'number' || typeof stop !== 'number' || start >= stop){
		return true;
	}
	var result = start
	for (var i = start+1; i <= stop; i++){
		result = result + ' ' + i;
	}
	return result;
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers,
	getUpscendingNumbers: getUpscedingNumbers
};
