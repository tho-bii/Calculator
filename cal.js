function display(value){
     document.getElementById("firstInput").value += value;
}
function calculate(){
    let userValue = document.getElementById("firstInput").value;
    let evaluation = eval(userValue)
    document.getElementById("firstInput").value = evaluation
}
function clearInput(){
    document.getElementById("firstInput").value = ""
}