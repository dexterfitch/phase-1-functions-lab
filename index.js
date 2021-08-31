// First, Scuber's executives want to ensure that Scuber's headquarters is near its customers. 

// They would like you to write a function

// takes in a pickup location for a passenger,  

// returns the number of blocks from its headquarters on 42nd Street. 

// For example, if the pickup location is 50 (i.e., 50th Street), the return value should be 8. 

// The function's return value can then be used for another function that translates the number of blocks from headquarters to the distance in feet.


let headQuarters = 42;
let blocksInFeet = 264;

let distanceFromHqInBlocks = (pickUpLocation) => {
    // if (pickUpLocation > headQuarters) {
    //     return pickUpLocation - headQuarters;
    // } else if (pickUpLocation < headQuarters) {
    //     return headQuarters - pickUpLocation;
    // } else {
    //     return 0;
    // }
    return Math.abs(pickUpLocation - headQuarters);
}

let distanceFromHqInFeet = (startingBlock) => {
    let distanceTravelledInBlocks = distanceFromHqInBlocks(startingBlock);
    return distanceTravelledInBlocks * blocksInFeet;
}

// Second, customers want Scuber to calculate the number of feet travelled based on the distance. 

// Write a function called distanceTravelledInFeet
// takes in the beginning and destination blocks 
// returns the number of feet travelled. 
// Each block in Manhattan is 264 feet long. 

let distanceTravelledInFeet = (startingBlock, destinationBlock) => {
    let distanceInBlocks = Math.abs(startingBlock - destinationBlock);
    return distanceInBlocks * blocksInFeet;
}

// calculatesFarePrice: 
// Given the same starting and ending block as the previous test (hint hint), 

let calculatesFarePrice = (startingBlock, destinationBlock) => {
    // let feetTravelled = distanceTravelledInFeet(startingBlock, destinationBlock);
    
    if (distanceTravelledInFeet(startingBlock, destinationBlock) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(startingBlock, destinationBlock) > 400 && distanceTravelledInFeet(startingBlock, destinationBlock) <= 2000) {
        return (distanceTravelledInFeet(startingBlock, destinationBlock) - 400) * 0.02;
    } else if (distanceTravelledInFeet(startingBlock, destinationBlock) > 2000 && distanceTravelledInFeet(startingBlock, destinationBlock) <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far' 
    }
}




