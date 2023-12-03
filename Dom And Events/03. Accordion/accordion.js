function toggle() {
    const moreInformation=document.querySelector("#extra");
    const buttonText=document.querySelector(".button");

    console.log(moreInformation.style.display)
    if(!moreInformation.style.display || moreInformation.style.display==="none"){
        moreInformation.style.display="block";
        buttonText.textContent="Less";
    }
    else{
        moreInformation.style.display="none";
        buttonText.textContent="More"
    }
}