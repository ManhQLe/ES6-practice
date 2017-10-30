let material = 'gold'
let radius = 2.5
let weight = 8

let leProps = {
    material,radius,weight,
    calcValues(){
        return this.radius * 20 + weight * 800;
    }
}

console.log(leProps);
console.log(`Value: $${leProps.calcValues()}`)