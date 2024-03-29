const car = {
  brand: 'Opel',
  model: 'Astra',
  producedYear: 2001, //рік виготовлення
  avarageSpeed: 100, // середні швидкість в км/годину
  tankVoluem: 30, //об'єм баку
  avarageFuel: 10, // середня витрата палива -літри на 100 км
  drivers: ['Петрущенко', 'Маюрець'],

  showCharacteristics: function () {
    console.log(
      `the car has:\n\tbrand: ${this.brand},\n\tmodel: ${this.model}, \n\tyear of production ${this.producedYear}\n\tavarage speed: ${this.avarageSpeed} \n\ttank's volume: ${this.tankVoluem} \n\tavarage fuel: ${this.avarageFuel}`
    );

    console.log('\tcar drivers:');
    this.drivers.forEach((element) => {
      console.log(`\t\t${element}`);
    });
  },

  //функція додавання водія до списку з перевіркою наявності його в ньому
  addDriver: function (driver) {
    const flag = this.drivers.some(isDriver);

    if (!flag) {
      console.log(
        `This driver ${driver} doesn't exist in the list and will be added`
      );
      this.drivers.push(driver);
    } else {
      console.log(`This driver ${driver} exists in the list`);
    }

    function isDriver(element) {
      return element === driver;
    }
  },

  //обчислення часу та палива для подолання певної відстані
  calculation: function (distance) {
    const timeRoad = Math.round(distance / this.avarageSpeed);
    const timeRest = Math.round(timeRoad / 4);
    const totalTime = timeRoad + timeRest;
    const fuelAmount = Math.round((distance / 100) * this.avarageFuel);

    console.log(
      `необхідний час: ${totalTime} годин та кількість палива: ${fuelAmount} літрів для подолання відстані ${distance} км з середньою швидкістю ${this.avarageSpeed} км/год`
    );
  },
};

car.showCharacteristics();
console.log('**************************');

car.addDriver('Герасимович');
console.log('**************************');
car.showCharacteristics();

car.addDriver('Герасимович');
console.log('**************************');
car.showCharacteristics();
car.calculation(2000);
