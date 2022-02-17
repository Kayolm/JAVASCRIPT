let cars = [
    {style: 'BMW',   model: '320-i',   color: 'black', author: 'Giorno'  },
    {style: 'Skoda', model: 'Kodiaq',  color: 'white', author: 'Jotaro'  },
    {style: 'TOGG',  model: 'unknown', color: 'black', author: 'Jonathan'},
    {style: 'Nissan',model: 'Qashqai', color: 'white', author: 'Joseph'  },
  ];
  
let myFunction = (cars) => {
  if(cars.color == 'white') {
  return true;
  };
};

console.log(cars.filter(myFunction));
