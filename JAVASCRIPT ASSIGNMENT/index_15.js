// CHANGING GUEST LIST #15


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














