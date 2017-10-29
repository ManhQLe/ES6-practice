const A = [10,20,30]
const [x,y,z] = A;

const [a,,b] = A;

console.log("Destructuing from an array");
console.log(x,y,z);
console.log(a,b);

const Circle = {
    radius: 10,
    color: 'orange',
    getArea: function(){
        return this.radius *this.radius * Math.PI;
    },
    getCircum: function(){
        return this.radius *2 *Math.PI;
    },
    write:function(){
        return 1234;
    }
}

let {getArea,radius,getCircum,write} = Circle;

console.log("Destructuring from an object");
console.log(`
    Radius: ${radius}
    Area: ${getArea()}
    Circumference: ${getCircum()}
    Write: ${write()}
`);
