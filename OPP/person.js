//person details
let person = {
    name: "sanu",
    age: 22,
    interst: ['ceating,teaching new things'],
    isAlive: true,
    address: { //nested object
        city: "kovilpatti",
        state: "Tamilnadu"
    },
    greeting: function() {
        let message = "My name is " + this.name + "i love " + this.interst;
        console.log(message);
    }
};
person.greeting();

//class calculate

const donation = [45, 78, 95, 65, 4851];
let total = donation.reduce(function(Previousvalue, Currentvalue) {
    return Previousvalue + Currentvalue;
});
console.log("Total:", total);