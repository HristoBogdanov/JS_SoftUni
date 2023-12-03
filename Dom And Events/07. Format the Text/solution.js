function solve() {
  
    const textArea=document.querySelector("#input");
    const sentances=textArea.value.split(".");
    const outputDiv=document.querySelector("#exercise");
    sentances.pop();

    while(sentances.length>=3){
      outputDiv.appendChild(createNewSentance(3));
    }

    function createNewSentance(sentancesLeft){
      let newDiv=document.createElement("div");
      newDiv.id="output";

      let newParagraph=document.createElement("p");
      
      let paragraphText="";
      for(let i=0;i<sentancesLeft;i++){
        paragraphText+=sentances.shift();
        paragraphText+=".";
      }
      newParagraph.innerHTML=paragraphText;

      newDiv.appendChild(newParagraph);

      
      return newDiv;

    }
    outputDiv.appendChild(createNewSentance(sentances.length));
    console.log(document.getElementById("output").children)
}