let localStorageIspis = JSON.parse(localStorage.getItem("array"));
console.log(localStorageIspis);
console.log(jsonArray);
let elementToRemove;

if(localStorageIspis != null){
    jsonArray = jsonArray.concat(localStorageIspis);
    
    localStorageIspis.forEach(element => {
        outputText = document.createElement('p');
        outputText.textContent = element;
        outputText.setAttribute("id", "outputDiv");
        document.getElementById("textContainer").appendChild(outputText);
        btnCreate();

        deletePic.onclick = function(){
            this.parentElement.remove();
            for(let i = 0; i < localStorageIspis.length; i++){
                
                if(element == localStorageIspis[i]){
                    localStorageIspis.splice(i, 1);
                    console.log(localStorageIspis);
                    console.log(jsonArray);
                    localStorage.setItem("array", JSON.stringify(localStorageIspis));
                }
                
                
            }
            for(let i = 0; i < jsonArray.length; i++){
                
                if(element == jsonArray[i]){
                    jsonArray.splice(i, 1);
                    console.log(localStorageIspis);
                    console.log(jsonArray);
                    
                }
                
                
            }


            
            

        }
        
        editPic.onclick = function () {

        
            
            confirmPic = document.createElement("img");
            confirmContainer = document.createElement("span");
            confirmPic.style.display = "inline-block";
            confirmPic.src = "Pictures/Check.svg";
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
                this.parentElement.contentEditable = "false";
                
                newText = this.parentElement.childNodes[0].textContent;
                console.log(newText);
    
                console.log(this.parentElement.querySelector("#edit-pic-attribute"));
                this.parentElement.querySelector("#edit-pic-attribute").style.display = "inline-block";
                this.parentElement.querySelector("#delete-pic-attribute").style.display = "inline-block"
                
                
    
    
                jsonArray[jsonArray.indexOf(tempText)] = newText;
                
                this.remove();
    
                Save();
    
    
            }
    
        }
    }
        
    );
}