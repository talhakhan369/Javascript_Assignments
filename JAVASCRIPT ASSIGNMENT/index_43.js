// Unchanged Magicians: #43

var magician = ["Apollo", "Blaine ", "Devant "]
function show_magicians() {
    for (let x in magician) {
        console.log(magician[x]);
    }
}
function make_great() {
    var message = "the Great";
    for (let x in magician) {
        console.log(magician[x] + message);
    }
}

show_magicians();
console.log("\nGreat Magacian")
make_great();
console.log("\nOriginal Magacian:")
show_magicians();