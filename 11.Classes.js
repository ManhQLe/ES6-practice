class C1 {
    constructor(t=1){
        this.Age = t;
    }
}

class C2 extends C1 {
    constructor(){
        super(1);
        this.Age +=3;
    }
}

const o = new C1(1);
const o2 = new C2();

console.log(o.Age);
console.log(o2.Age);
console.log(o2 instanceof C2);
console.log(o2 instanceof C1);