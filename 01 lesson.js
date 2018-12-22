
// Bale ES6

//LET A = variabel ND CONST = konstante


const point2 = {
	x: 10,
  	y: 25,
  	z: -34,
  	a: 88,
  	type: 'doner',
  	color: 'heavyblack',
  	carat: 'fullmetal'
}

console.log(point2.x, point2.y, point2.z, point2.a, point2.type, point2.color, point2.carat);

// 0.1


const point3 = {
	x2: 10,
  	y2: 25,
  	type2: 'doner',
  	color2: 'heavyblack123'
}

const hallo = ({x2, y2, type2, color2}) => {
	console.log(x2, y2, type2, color2);
}

hallo(point3);

// 0.2 Destructuring - Nehmen wir den Kram auseiander ?!???????


const circle = {
    radius: 10,
    getArea: (redius) => {
      return Math.PI * radius * radius;
    },
  };
  
  const { radius, getArea } = circle;
  getArea(radius);


// Superset Typescript

    //ES6 --> Typscript

        // Contains Types

        mistakes={false}
        suggestion={true}