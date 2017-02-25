document.addEventListener('DOMContentLoaded', function () {
    var TEST = document.getElementById('TEST');
    TEST.innerHTML = "ADSADS";
    localStorage['TEST'] = JSON.stringify({DOG: "MEAT"});

    TEST.innerHTML = localStorage['TEST'] + "ASDASD";
    console.log("TEST");

    function test() {
        console.log("TEST");
    }
});