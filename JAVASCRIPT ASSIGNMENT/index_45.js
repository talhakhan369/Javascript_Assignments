// CAR #45

function Car(manufacture, model, name, ...options) {
    const person = {
        manufacture: manufacture,
        model: model,
        name: name,
        options: [...options],
      };
      return person;
}
console.log(Car("India", "2000", "Bike", color= "Black"));







