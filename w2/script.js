function add(){
    let value=document.querySelector(".inputnewtask").value;
    general(value,true);
    document.querySelector(".inputnewtask").value="";
} 
function general(value){
    if(value==''){
        alert('Please type something');
        return;
    }
    let list=document.createElement("li");
    let input=document.createElement("input");
    let butt=document.createElement("button");
    let P=document.createElement("p");
    input.setAttribute("type","checkbox");
    input.setAttribute("onclick","checkbutt(this)")
    P.innerHTML=value;
    list.appendChild(input);
    list.appendChild(P);
    butt.classList.add("removeButton");
    butt.setAttribute("onclick","remove(this)");
    list.appendChild(butt);
    document.querySelector(".tables").appendChild(list);
}
function checkbutt(element){
    console.log(element.parentNode.childNodes[1]);
    if(element.checked){
      element.parentNode.childNodes[1].style.textDecoration="line-through";
      element.parentNode.childNodes[1].style.color="grey";
    }
    else{
      element.parentNode.childNodes[1].style.textDecoration="none";
      element.parentNode.childNodes[1].style.color="black";
    }
}
function remove(element){
    element.parentNode.remove();
}