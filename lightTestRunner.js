module.exports.expect = function(expectValue) {
    return {
        toBe: function (toBeValue) {
            if (expectValue === toBeValue) {
                logInGreen('PASSED for ' + toBeValue);
            } else {
                logInRed('FAILED for ' + toBeValue + ' got ' + expectValue + ' instead');
            }
        }
    }

    function logInGreen(text){
        console.log("\x1b[32m", text,'\x1b[0m');
    }

    function logInRed(text){
        console.log("\x1b[31m", text, '\x1b[0m');
    }
};
