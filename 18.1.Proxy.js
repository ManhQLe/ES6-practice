var Comp = {
    One:1,
    Two:2,
    Three:3,
    IN:["A","B"]
}

var handler = {
    get:function(target,propName){
        if(target.IN.indexOf(propName)>=0)
        console.log("Allowed")
        else
        console.log("Cannot find");
    },
    set:function(target,propName,val){
        console.log(this)
        console.log(val)
    }
}

var agent = new Proxy(Comp,handler)
agent.name;
agent.One;
agent["A"]