document.addEventListener('DOMContentLoaded', function () {
    if (Notification.permission !== "granted")
        Notification.requestPermission();

    var TEST = document.getElementById('TEST');
    TEST.innerHTML = "ADSADS";
    localStorage['TEST'] = JSON.stringify({DOG: "MEAT"});

    TEST.innerHTML = localStorage['TEST'] + "ASDASD";
    console.log("TEST");

    function test() {
        console.log("TEST");
    }

    document.getElementById('DD').onclick = function(){
        //chrome.tabs.update({
        //    url: "http://www.example.com/"
        //});

        var notification = new Notification('Notification title', {
            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body: "Hey there! You've been notified!",
        });
    }
});