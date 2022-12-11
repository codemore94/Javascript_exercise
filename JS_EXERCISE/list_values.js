var assert = require('assert')

const arr=['a','b','c','d']
const brr=['a','b','c','d']
assert.equal(arr.length,4);

const object={
    first:'MyName',
    last: 'YourName',
    getCombinedName(){
      return this.first+' '+this.last;
    },
};

function print(a){
    a=0
    console.log("Moi" + a)
}
function check(){
    for(vbl of brr){
	for(val of arr){
	    assert.equal(console.log(val),console.log(vbl))
	}
    }
    //    assert.equal(print(1),Moi0)
}
print(1)
check();
