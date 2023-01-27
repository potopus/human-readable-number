 module.exports = function toReadable(number) {
    let arr = Array.from(String(number));
    if (arr.length === 1 && arr[0] === "0") {
        return "zero"
    } else if (arr.length === 1) {
        return units(arr[0]);
    } else if (arr.length === 2 && number<20){
        return upToTwenty(arr[0]+arr[1])
    } else if (arr.length === 2 && number%10 === 0 ){
        return tens(arr[0]+arr[1]);
    } else if(arr.length === 2){
        return `${tens(arr[0]+0)} ${units(arr[1])}`
    }else if( arr.length === 3 && number%100 === 0){
        return `${units(arr[0])} hundred`
    } else if (arr.length === 3 && number%10 === 0){
        return `${units(arr[0])} hundred ${tens(arr[1]+arr[2])}`
    } else if (arr.length === 3 && +(arr[1]+arr[2])<10) {
return `${units(arr[0])} hundred ${units(arr[2])}`
    }
    else if (arr.length === 3 && +(arr[1]+arr[2])<20){
        return `${units(arr[0])} hundred ${upToTwenty(arr[1]+arr[2])}`
    } else if (arr.length === 3){
        return `${units(arr[0])} hundred ${tens(arr[1]+0)} ${units(arr[2])}`
    }

}

function units(x) {
    switch (x) {
        case "1":
            return "one"
            break;
        case "2":
            return "two"
            break;
        case "3":
            return "three"
            break;
        case "4":
            return "four"
            break;
        case "5":
            return "five"
            break;
        case "6":
           return  "six"
            break;
        case "7":
            return "seven"
            break;
        case "8":
            return "eight"
            break;
        case "9":
            return "nine"
            break;
    }
}

function upToTwenty(y) {
    switch (y) {
        case "10":
            return "ten"
            break;
        case "11":
            return "eleven"
            break;
        case "12":
            return "twelve"
            break;
        case "13":
            return "thirteen"
            break;
        case "14":
            return "fourteen"
            break;
        case "15":
            return "fifteen"
            break;
        case "16":
            return "sixteen"
            break;
        case "17":
            return "seventeen"
            break;
        case "18":
            return "eighteen"
            break;
        case "19":
            return "nineteen"
            break;
    }
}
function tens(y) {
    switch (y) {
        case "10":
            return "ten"
            break;
        case "20":
            return "twenty"
            break;
        case "30":
            return "thirty"
            break;
        case "40":
            return "forty"
            break;
        case "50":
            return "fifty"
            break;
        case "60":
            return "sixty"
            break;
        case "70":
            return "seventy"
            break;
        case "80":
            return "eighty"
            break;
        case "90":
            return "ninety"
            break;
    }
}
// console.log(toReadable(100));
// console.log(toReadable(98));
// console.log(toReadable(200));
// console.log(toReadable(570));
// console.log(toReadable(618));
// console.log(toReadable(333));
// console.log(toReadable(964));

//  console.log(toReadable(901));
//  console.log(toReadable(899));
//  console.log(toReadable(810));



// console.log(toReadable(9));
// console.log(toReadable(0));
// console.log(toReadable(12));
// console.log(toReadable(20));
// console.log(toReadable(25));


