function kilometerToMeter(distance) {
    if (distance < 0) {
        return "distance can not be negative";
    }
    return distance * 1000;
}

function budgetCalculator(noOfClock, noOfPhone, noOfLaptop) {
    if (noOfClock < 0 || noOfPhone < 0 || noOfLaptop < 0) {
        return "quantity can not be negative"
    }
    return noOfClock * 50 + noOfPhone * 100 + noOfLaptop * 500;
}

function hotelCost(days) {
    if (days < 0) {
        return "days can not be negative"
    }
    if (days > 10) {
        if (days > 20) {
            return 10 * 100 + 80 * 10 + (days - 20) * 50;
        } else {
            return 10 * 100 + (days - 10) * 80;
        }
    } else {
        return days * 100;
    }
}

function megaFriend(friendList) {
    if( friendList.length <=0){
        return "array is empty";
    }
    index = 0;
    for(var i=1; i<friendList.length; i++){
        if (friendList[index].length < friendList[i].length){
            index= i;
        }
    }
    return friendList[index];
}
