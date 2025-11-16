// nullable types 
var getUser = function (input) {
    if (input) {
        console.log("from db : ".concat(input));
    }
    else {
        console.log('from db : all user ');
    }
};
// getUser(null)
//  unknown type
var discountCalculator = function (input) {
};
discountCalculator(100);
discountCalculator("100");
discountCalculator(null);
//  never type 
function throwError(message) {
    throw new Error(message);
}
throwError("Something went wrong!"); // এই function কখনো normal return করবে না
