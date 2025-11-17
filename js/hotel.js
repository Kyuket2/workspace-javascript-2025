
var guest = {
    name: "Zang",
    date: " Oct 17th, 2025",
    memeber: "diamond",
    otherguest: ["Mike", "Cindy", "Sally"],
    display: function() {return this.name + this.otherguest}
};

console.log(guest.display());

var guestgroup = new Array()
// Hotel Registration
function reservation() {
    var guest = {
        name: document.getElementById('guestname').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        // Finish the rest
        roomtype: document.getElementById('room').value,
        guestnum: parseInt(document.getElementById('guestnum').value)
    };
    guestgroup.push(guest);
    console.log(guest);
}

function listReservations(){
    var outputE = document.getElementById('listofbooking');

    if (guestgroup.length === 0){
        outputE.textContent = "No reservations.";
        return;
    }

        var html = "";

    for (var i = 0; i < guestgroup.length; i++) {
        var g = guestgroup[i];
        html +=
            "Guest: " + g.name +
            " | Check-in: " + g.checkin +
            " | Check-out: " + g.checkout +
            " | Guests: " + g.guestnum +
            " | Room: " + g.roomtype +
            "<br>";
    }
    
    outputE.innerHTML = html;
}

// Register Event
document.getElementById('submit').addEventListener('click', reservation , false);
document.getElementById('lists').addEventListener('click', listReservations, false);
