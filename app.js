const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90; // to get the matching degree to a second
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90; // to get the matching degree to an hour
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    console.log("It's " + hours + "h" + minutes + "min" + seconds + "s");
}

setInterval(setDate, 1000)  // Calls the function setDate() every 1000ms or 1s