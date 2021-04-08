let states = ["ts", "ap", "ka", "mh", "dl"]

console.log(isValueExist1(states, "dl"));
console.log(isValueExist1(states, "kl"));

function isValueExist(statesData, expectedItem) {

    let isValueFound = false;
    for (let i = 0; i < statesData.length; i++) {
        if (statesData[i] == expectedItem) {
            isValueFound = true;
            break;
        }
    }
    return isValueFound
}

function isValueExist1(statesData, expectedItem) {

    for (let i = 0; i < statesData.length; i++) {
        if (statesData[i] == expectedItem) {
            return true
        }
    }
    return false
}