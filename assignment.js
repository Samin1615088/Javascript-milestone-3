// https://github.com/Samin1615088/Javascript-milestone-3

//problem-1
function kilometerToMeter(distance) {
    if (distance < 0) {
        return "distance can not be negative";
    }
    return distance * 1000;
}

//problem-2
function budgetCalculator(noOfClock, noOfPhone, noOfLaptop) {
    if (noOfClock < 0 || noOfPhone < 0 || noOfLaptop < 0) {
        return "quantity can not be negative"
    }
    return (noOfClock * 50) + (noOfPhone * 100) + (noOfLaptop * 500);
}

//problem-3
function hotelCost(days) {
    if (days < 0) {
        return "days can not be negative"
    }
    if (days > 10) {
        if (days > 20) {
            return (10 * 100) + (80 * 10) + (days - 20) * 50;
        } else {
            return (10 * 100) + (days - 10) * 80;
        }
    } else {
        return days * 100;
    }
}

//problem-4
function megaFriend(friendList) {
    if (friendList.length <= 0) {
        return "array is empty";
    }
    var index = 0;
    for (var i = 1; i < friendList.length; i++) {
        //comparing two element's length
        if (friendList[index].length < friendList[i].length) {
            index = i;
        }
    }
    return friendList[index];
}
