let inputText;
let outputText;

let listArray = new Array();
let jsonArray = new Array();
let indexRemove;
let confirmPic;
let editPic;
let tempText;
let newText;
let deletePic;
let confirmContainer;

function btnCreate() {
    
    
    editPic = document.createElement("img");
    deletePic = document.createElement("img");
    
    
    

    outputText.appendChild(editPic);
    editPic.src = "Pictures/PaintBrush.svg";
    editPic.setAttribute("id", "edit-pic-attribute");

    outputText.appendChild(deletePic);
    deletePic.src = "Pictures/XMark.svg";
    deletePic.setAttribute("id", "delete-pic-attribute");

    

    



    deletePic.onclick = function() {
        this.parentElement.remove();


        indexRemove = listArray.indexOf(this.parentElement.childNodes[0]);
        console.log(this.parentElement.childNodes[0].textContent)

        for (let i = 0; i < jsonArray.length; i++) {

            if (this.parentElement.childNodes[0].textContent == jsonArray[i]) {
                jsonArray.splice(i, 1);

                localStorage.setItem("array", JSON.stringify(jsonArray));
            }


        }


        listArray.splice(indexRemove);

    }




}



document.getElementById("unosBtn").onclick = function() {

    inputText = document.getElementById("inputBox").value;
    outputText = document.createElement('p');

    outputText.setAttribute("id", "outputDiv");
    outputText.innerHTML = inputText;
    inputText.value = "";

    listArray.push(outputText.childNodes[0]);

    document.getElementById("textContainer").appendChild(outputText);
    
    btnCreate();

    jsonArray.push(outputText.childNodes[0].textContent);

    Save();

    editPic.onclick = function () {

        
        
        confirmPic = document.createElement("img");
        confirmContainer = document.createElement("span");
        confirmPic.src = "Pictures/Check.svg";
        confirmPic.style.display = "inline-block";
        console.log();
        
        

        this.parentElement.contentEditable = "true";

        this.parentElement.appendChild(confirmContainer);
        this.parentElement.appendChild(confirmPic);
        
        confirmContainer.setAttribute("id", "confirm-pic-container");
        confirmPic.setAttribute("id", "confirm-pic-attribute");

        
        this.style.display = "None";
        this.parentElement.querySelector("#delete-pic-attribute").style.display = "None"
        tempText = this.parentElement.childNodes[0].textContent;
        console.log(this.parentElement.getElementsByTagName('p'));
        console.log(this.parentElement.children);
        console.log(tempText);
        
        confirmPic.onclick = function() {
            confirmContainer.remove();
            console.log(this.parentElement.childNodes[1]);
            newText = this.parentElement.childNodes[0].textContent;
            this.parentElement.contentEditable = "false";
            console.log();

            
            this.parentElement.querySelector("#edit-pic-attribute").style.display = "inline-block";
            this.parentElement.querySelector("#delete-pic-attribute").style.display = "inline-block"
            
            


            jsonArray[jsonArray.indexOf(tempText)] = newText;
            
            this.remove();

            Save();


        }

    }
}