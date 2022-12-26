"use strict"

document.getElementById("copyBtn").addEventListener("click", () =>{
    navigator.clipboard.writeText(document.getElementById("ps").textContent)
    .then(() => {
        console.log(document.getElementById("ps").textContent);
        alert("copied!");
    })
    .catch(() => {
        alert("error");
    })
});