

function renderMansion() {
    const mansion = {
        room:2,
        bath: 8,
        sqft: 1800
    }

    const roomElement = document.getElementById("room")
    const bathElement = document.getElementById("bath")
    const sqftElement =document.getElementById("sqft")

    roomElement.innerText = mansion.room
    bathElement.innerText = mansion.bath
    sqftElement.innerText = mansion.sqft

}

renderMansion();
