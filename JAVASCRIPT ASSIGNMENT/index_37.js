// Large T-shirt #37

function make_shirt(size="large", message="I love Javascript!") {
    console.log("\nI'm going to make a " + size + " t-shirt.");
    console.log('Message on T-shirt, "' + message + '"');
}

make_shirt();
make_shirt(size='medium');
make_shirt("small", "I love programming.");