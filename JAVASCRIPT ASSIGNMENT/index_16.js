// MORE GUEST #16

// List of guest who will join us on dinner:
var guestPerson = ["Talha", "Qasim", "Raza"];

// Printing dinner invitation to each person:
for (let i = 0; i < guestPerson.length; i++) {
    console.log("Hi " + guestPerson[i] + "!" + " I'd love it if you could join us on dinner."); 
    };

// Printing guest name who cann't join un on dinner
console.log(guestPerson[1] + " is not coming in the dinner. ")

// Printing name of new guest person who will join us
guestPerson.splice(1,1, "Junaid");
console.log(guestPerson);

// Printing new invitations
var newGuestPerson= ['Talha', 'Junaid', 'Raza']
for (let i = 0; i < newGuestPerson.length; i++) {
console.log("Hi " + newGuestPerson[i] + "!" + " I'd love it if you could join us on dinner") 
};

// We found  a bigger dinner table
console.log("We have found a bigger dinner table.")

// Adding one new guest to the beginning of array
newGuestPerson.unshift("Uzair");
console.log(newGuestPerson);

// Adding guest to the middle of array
newGuestPerson.splice(2, 0, "Hammad")
console.log(newGuestPerson); 

// Printing new set of invitation
var newGuestPerson = ['Uzair', 'Talha', 'Hammad', 'Junaid', 'Raza']
for (let i = 0; i < newGuestPerson.length; i++) {
console.log("Hi " + newGuestPerson[i] + "!" + " I'd love it if you could join us on dinner."); 
};


























