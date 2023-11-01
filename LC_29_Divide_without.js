var divide = function(dividend, divisor) {
    let quotient = 1,dividend_x = dividend, divisor_x = divisor
    if(dividend<0) dividend = 0-dividend
    if(divisor<0) divisor = 0-divisor
    let value = divisor
    while(true){
        if(value+value<dividend-value){
            value = value + value;
            dividend = dividend - value
            console.log("value if: ",value)
            quotient  =quotient + quotient + quotient + quotient;
            console.log("dividend: ", dividend);
        }
        // else if((value+divisor)<=dividend) {
        //     console.log("value: ",value)
        //     value = value + divisor;
        //     quotient=quotient + 1;
        // }
        else if(dividend<divisor){
            quotient = 0;
            break;
        }
        else{
            break;
        }
    }
    return quotient
    // let quotient =1
    // divisor = divisor + divisor
    // dividend = dividend - divisor
    // quotient = quotient * 4;
    // console.log("dividend: ",dividend," divisor: ",divisor);
    // console.log("quotient: ",quotient);
    // divisor = divisor + divisor
    // dividend = dividend - divisor
    // quotient = quotient * 4;
    // console.log("dividend: ",dividend," divisor: ",divisor);
    // console.log("quotient: ",quotient);
};

console.log(divide(700,10))