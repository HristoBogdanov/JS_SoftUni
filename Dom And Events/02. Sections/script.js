function create(words) {

   body=document.querySelector("body");
   body.setAttribute("id","content");
   body.innerHTML="";
   

   words.forEach(word => {
      let newDiv=document.createElement("div");
      let newParagraph=document.createElement("p");
      //newParagraph.textContent=word;
      newParagraph.innerHTML=word;
      newParagraph.style.display="none";

      newDiv.appendChild(newParagraph);
      newDiv.setAttribute("id", "content");

      newDiv.addEventListener("click", ()=>{newParagraph.style.display="block"});

      body.appendChild(newDiv);
      
   });
}