function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const table=document.querySelector("table");
      const data=Array.from(document.querySelectorAll("td"));
      const searchField=document.querySelector("#searchField");

      //data.splice(0,3);
      console.log(data);

      data.forEach(element=>{
         if(element.parentElement.classList.contains("select")){
            element.parentElement.remove();
         }
      })



      data.forEach(element =>{
         const parent=element.parentElement;
         if(element.textContent.includes(searchField.value)){
            if(parent){
               parent.classList.add("select");
            }
         }
      });

   }
}