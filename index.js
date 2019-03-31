// Write your solution in this file!

driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newObj = {...driver}
    newObj[key] = value
    // newObj.key = value
    return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newObj = {...driver}
    newObj[key] = undefined
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    driver[key] = undefined
    return driver
}
