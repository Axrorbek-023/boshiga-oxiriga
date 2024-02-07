var arr = ['uyga','vazifa']
var elInp1 = document.querySelector('.inp1')
var elInp2 = document.querySelector('.inp2')

// let val1 = elInp1.value
// let val2 = elInp2.value

function fn(){
    let val1 = elInp1.value
    let val2 = elInp2.value
    if(val2 == 'boshiga'){
        arr.unshift(val1)
        console.log(arr);
    }else if(val2 == 'oxiriga'){
        arr.push(val1)
        console.log(arr);
    }
}