
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
    var guest ={
        name: document.getElementById('guestname').value,
        checkin: document.getElementById('checkin').value,
        roomtype: document.getElementById('room').value,
        // Finish the rest
        guestnum: document.getElementById('guestnum').value

    };
    guestgroup.push(guest);
    console.log(guest);
}

// Register Event
document.getElementById('submit').addEventListener('click', reservation , false);
