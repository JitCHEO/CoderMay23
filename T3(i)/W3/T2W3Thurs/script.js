let favouriteMedia = [
    "Modern Family",
    "Hells Kitchen",
    "Arcane",
    "WW2 Documentary",
    "Friends"
]

function exampleHello(){
    console.log("Hello World");
}

function createListOfMedia(){
    let rootUlNode = document.querySelector("ul");
    // clean the list to avoid duplication
    rootUlNode.innerHTML = "";

    // console.log(rootUlNode);

    favouriteMedia.forEach(mediaItem => {
        // console.log(mediaItem)
        // Create an element but do not display it yet
        let newListItem = document.createElement("li");
        let removeItemButton = document.createElement("button");

        // newListItem.innerHTML
        // newListItem.innerText

        // Assign some data to the element
        newListItem.textContent = mediaItem;
        newListItem.id = mediaItem;
        removeItemButton.textContent = "Remove Item";
        removeItemButton.onclick = (() => removeItemFromList(mediaItem));

        // Add the element to the visible page
        rootUlNode.appendChild(newListItem);
        // rootUlNode.appendChild(removeItemButton);
        newListItem.appendChild(removeItemButton);
        

    })
}

function removeItemFromList(targetItem){
    let targetItemNode = document.getElementById(targetItem);
   
    // targetItemNode.parentNode.removeChild(targetItemNode);
    // Remove what is not needed
    favouriteMedia = favouriteMedia.filter(item => item !== targetItem);
    // Regenerate the visuals.
    createListOfMedia();
}

function addItemToList(event, targetId){
    // to avoid automatic refresh
    event.preventDefault();
    // console.log(event);
    console.log("We are trying to add an item to the list");
    let InputField = document.getElementById(targetId);
    // console.log(realInputField.value);
    let newItemName = InputField.value;
    if (newItemName){
        favouriteMedia.push(newItemName);
        createListOfMedia();
    } else{
        console.warn("Attempted to add an item to the list");
        console.error("Attempted to add an item to the list");
        alert("Please introduce a value");
    }



}

// On click from html, similar, addEventListener
let realFormSubmitButton = document.getElementById("real-formsubmit");
// console.log(realFormSubmitButton);
// realFormSubmitButton.addEventListener("click", (event)=> {addItemToList(event, "real-nameinput")});

// helper text id: real-texthint
function inputHelperOnFocus(targetId){
    let helperElement = document.getElementById(targetId);
    console.log("Showing text hint now");
    helperElement.style.display = "inherit";
}

function inputHelperOnBlur(targetId){
    let helperElement = document.getElementById(targetId);
    console.log("Hiding text hint now");
    helperElement.style.display = "none";
}

let realFormTextInput = document.getElementById("real-nameinput");
realFormTextInput.addEventListener("focusin", () => {inputHelperOnFocus("real-texthint")});
realFormTextInput.addEventListener("focusout", () => {inputHelperOnBlur("real-texthint")});
inputHelperOnBlur("real-texthint");

let pseudoFormTextInput = document.getElementById("pseudo-nameinput");
pseudoFormTextInput.addEventListener("focusin", () => {inputHelperOnFocus("pseudo-texthint")});
pseudoFormTextInput.addEventListener("focusout",() => {inputHelperOnBlur("pseudo-texthint")});
inputHelperOnBlur("pseudo-texthint");

let pseudoFormSubmitButton = document.getElementById("pseudo-formsubmit");
pseudoFormSubmitButton.addEventListener("click", (event)=> {addItemToList(event, "pseudo-nameinput")});



