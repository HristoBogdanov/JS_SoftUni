function addItem() {
    const newText=document.querySelector("#newItemText").value;
    const newValue=document.querySelector("#newItemValue").value;
    const menu=document.querySelector("#menu");

    const newOption=document.createElement("option");
    newOption.textContent=newText;
    newOption.value=newValue;

    menu.appendChild(newOption);
    
    document.querySelector("#newItemText").value="";
    document.querySelector("#newItemValue").value="";
}