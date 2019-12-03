var myUL = document.querySelector("#myUL");
var myInput = document.querySelector("#myInput");
var id = 0;

var deleteItem = function(event) {
    var liId = event.target.parentNode.id;
    var elem = document.getElementById(liId);
    elem.parentNode.removeChild(elem);
};

function changeLiStyle(event) {
    var liid = event.target.parentNode.id;
    var elem = document.getElementById(liid);

    if (event.target.checked) {
        elem.classList.add("checked");
    } else {
        elem.classList = [];
    }
}
document.querySelector(".selectAll").addEventListener("click", function() {
    for (var i = 0; i < myUL.children.length; i++) {
        var element = myUL.children[i];
        element.classList.toggle("checked");
    }
});

function addItem() {
    if (myInput.value !== "") {
        var li = document.createElement("li");
        li.id = ++id;
        li.appendChild(document.createTextNode(myInput.value));
        myUL.appendChild(li);

        var button = document.createElement("button");
        button.innerHTML = "X";
        button.addEventListener("click", deleteItem);
        li.appendChild(button);

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", changeLiStyle);
        li.appendChild(checkbox);
    } else {
        alert("You  need to  write some thing");
    }
}

document.querySelector(".addBtn").addEventListener("click", function() {
    addItem();
    myInput.value = "";
});

document.addEventListener("keypress", function(event) {
    if (event.charCode == 13) {
        addItem();
        myInput.value = "";
    }
});
