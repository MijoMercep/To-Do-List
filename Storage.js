




let parsedArrayFromStorage;

function Save(){
    
    localArrayStorage = JSON.stringify(jsonArray);

    localStorage.setItem("array", localArrayStorage);

    let arrayFromStorage = localStorage.getItem("array");
    
    parsedArrayFromStorage = JSON.parse(arrayFromStorage);
    localStorageIspis = JSON.parse(localStorage.getItem("array"));
    localStorage.setItem("array", JSON.stringify(localStorageIspis));
    console.log(jsonArray);
    console.log(localStorageIspis);
}

