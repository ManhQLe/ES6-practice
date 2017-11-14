const o1 = {
    "Day":"Friday",
    "TaskCount":3,
    "Meal":{
        "Breakfirst":"Egg",
        "Lunch":"Pho",
        "Dinner":"Noddles"
    }
}

const x = {
    "Name":"Name1"
}

function Reducing(state,obj){
    const {Day} = obj;
    return {
        [Day]:obj.Day,
        "Two":1
    }
}

const y = Reducing(x,o1);
console.log(y);
