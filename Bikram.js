let display = document.getElementById("display");
let button = document.getElementById("add");
let container = document.getElementById("data");

button.addEventListener('click',function(){
    let newTask = document.createElement("li");
    // newTask.innerHTML = "<button class='btn'>button</button>";
    newTask.innerText = display.value;
    container.appendChild(newTask);
    display.value = '';
    deletbutton(newTask);

});

function deletbutton(newTask){
    let btn = document.createElement("button");
    btn.innerText = "delet";
    newTask.appendChild(btn);
    btn.onclick = function() {
        newTask.remove();
    }
}
