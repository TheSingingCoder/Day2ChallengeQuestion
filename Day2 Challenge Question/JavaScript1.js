//Challenge Question
var petArr = [];
var petPush = function () {
    petArr.push(document.getElementById("pet-name").value);
    document.getElementById("pet-name").value = "";
    console.log(petArr);
};

var petListFunc = function () {
    var petString = "";
    for (var i = 0; i < petArr.length; i++) {
        petString += petArr[i] + " <br/>";
    }
    document.getElementById("pet-list").innerHTML = petString;
    console.log(petString);
};