$(document).ready(function() {
    var time = moment().tz("Europe/Madrid").format("h:mm A");
    $("#time").html(time);
})
