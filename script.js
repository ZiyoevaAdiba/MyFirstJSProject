var arr = [".", "+", "-" , "*", "/"];
function insert(num) {
    var a =  document.getElementById('n1').innerText;
    console.log(a[a.length - 1]);
    if ((arr.includes(num)) && (arr.includes(a[a.length - 1])) ) {
        return
    }
    document.getElementById('n1').innerText = a + num;
    
}

function calc() {
    var b = document.getElementById('n1').innerText;
    document.getElementById('n2').innerText = eval(b);
    console.log(eval(b));
}

function deleteAll() {
    document.getElementById('n1').innerText = '';
    document.getElementById('n2').innerText = '';

}

function deleteOne() {
    var a =  document.getElementById('n1').innerText;
    document.getElementById('n1').innerText = a.substr(0, a.length-1);
    document.getElementById('n2').innerText = '';

}