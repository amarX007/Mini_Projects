const hrs = document.getElementById("hrs")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

setInterval(() => {
    let currTime = new Date();

    hrs.innerHTML = (currTime.getHours()<10 ? "0" : "") + currTime.getHours();
    min.innerHTML = (currTime.getMinutes()<10 ? "0" : "") + currTime.getMinutes();
    sec.innerHTML = (currTime.getSeconds()<10 ? "0" : "") + currTime.getSeconds();
}, 1000)


