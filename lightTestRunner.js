module.exports.expect = function (expectValue) {
    return {
        toBe: function (toBeValue) {
            var comparer = getComparer(toBeValue);
            if (comparer(expectValue, toBeValue)) {
                logInGreen('PASSED for ' + toBeValue);
            } else {
                logInRed('FAILED for ' + toBeValue + ' got ' + expectValue + ' instead');
            }
        }
    }
    function getComparer(toBeValue) {
        if (toBeValue.constructor === Array) {
            return compareArrays;
        } else {
            return compareSimpleTypes;
        }
    }
    function compareArrays(first, second) {
        if (first.length !== second.length) {
            return false;
        }
        for (var i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) {
                return false;
            }
        }
        return true;
    }
    function compareSimpleTypes(first, second) {
        return first === second;
    }
    function logInGreen(text) {
        console.log("\x1b[32m", text, '\x1b[0m');
    }
    function logInRed(text) {
        console.log("\x1b[31m", text, '\x1b[0m');
    }
}