const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185
};

james[Symbol.iterator] =function(){
    return {
        o:this,
        i:0,
        next:function(){
            const o = this.o;
            const arr = Object.keys(o);     
            return {value: o[arr[this.i]],key:arr[this.i] ,done:++this.i==arr.length } 
        }
    }
}

const iterator = james[Symbol.iterator]();

 console.log(iterator.next().value); // 'James'
 console.log(iterator.next().value); // `5'10`
 console.log(iterator.next().value); // 185