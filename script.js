console.log("Hello World");
const input = document.querySelector("input");
const form = document.querySelector("form");
const downloadBtn = document.querySelector("#downloadBtn");
const generateBtn = document.querySelector("#generateBtn");
const qrImg = document.querySelector("img");

generateBtn.addEventListener("click", () => {
    const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
    qrImg.src = qrcode; 
    console.log(qrcode);
});

downloadBtn.addEventListener("click", async ()=>{
    const response = await fetch(qrImg.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
})