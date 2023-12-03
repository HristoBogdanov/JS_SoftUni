function lockedProfile() {
    const buttons=document.querySelectorAll("button");
    const lockInputs=Array.from(document.querySelectorAll("input[value='lock'"));
    const unlockInputs=Array.from(document.querySelectorAll("input[value='unlock'"));
    const HiddenFields=Array.from(document.querySelectorAll(`[id$="HiddenFields"]`));
    buttons.forEach(button =>{
        button.addEventListener("click", showInformation);
    })

    function showInformation(){
        const parent=this.parentElement;
        let hiddenField;
        let lockField;
        let unlockField;
        
        HiddenFields.forEach(field=>{
            if(parent.contains(field)){
                hiddenField=field;
            }
        })

        lockInputs.forEach(lock=>{
            if(parent.contains(lock)){
                lockField=lock;
            }
        })

        unlockInputs.forEach(unlock=>{
            if(parent.contains(unlock)){
                unlockField=unlock;
            }
        })

        if(lockField.checked===false && unlockField.checked===true && this.textContent==="Show more"){
            hiddenField.style.display="block";
            this.textContent="Hide It";
        }
        else if(lockField.checked===false && unlockField.checked===true && this.textContent==="Hide It"){
            hiddenField.style.display="none";
            this.textContent="Show more";
        }
    }
}