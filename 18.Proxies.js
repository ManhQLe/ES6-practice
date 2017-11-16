var fruit = {name:"Orange"}

var agent = new Proxy(fruit,{});

console.log(agent.name);

const tree = {name:"Apple"}
const handler = {
    get(target,propName){
        console.log("Target",target);
        console.log("PropName",propName)
        return target[propName];
    }
}

const agent2 = new Proxy(tree,handler);
console.log(agent2.name);

const car = {name:"Rolls Royce"};
const carDealder = {
    get(target,propName){
        return target[propName];
    },
    set(target,propName,value){
        let carPay;
        if(propName ==='sales')
            carPay = value*.80;
        target[propName] = carPay;
    }
}

const dealer1 = new Proxy(car,carDealder);
dealer1.sales = 1000;
console.log(dealer1.sales)
console.log(car.sales)