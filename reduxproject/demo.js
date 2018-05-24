function a(){
    console.log("Function A")

    function b(val){
        console.log("Inside Function B", val)
        return c;
    }
    function c(){
        console.log("Inside Function C")
    }
    return b;
}

let x = a()
console.log(x)
//x()
a()(5)()



myArray =[10,20]
console.log(myArray)
//... is spread operator wich will expand the values of myArr and insert as values and not as array
arr2 = [45,345,345,545,...myArray,4,5]
console.log(arr2)
arr2 = [...arr2, 23]
console.log(arr2)

//slice operation
arr3=[...arr2.slice(0,1),...arr2.slice(2)]
console.log(arr3)
