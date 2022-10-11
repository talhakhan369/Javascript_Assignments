// Great Magicians: #42

var magician = ["Apollo ", "Blaine ", "Devant "]
function show_magicians() {
    for (let x in magician) {
        console.log(magician[x]);
    }
}
function make_great() {
    var message = "the Great";
    for (let y in magician) {
        console.log(magician[y] + message);
    }
}

show_magicians();
make_great();