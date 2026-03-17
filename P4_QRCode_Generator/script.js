let imgBox = document.getElementById("imgBox")
let qrPhoto = document.getElementById("qrPhoto")
let qrText = document.getElementById("qrText")

function generateQR () {
    if (qrText.value.length > 0) {
        qrPhoto.src  = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show_Img");
    }else {
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error")
        }, 1000);
    }
    
}