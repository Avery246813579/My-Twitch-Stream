var STREAMS = getStoredStreams();
var LAST_ONLINE_STREAM, ONLINE_STREAM;
var UPDATE_METHOD;

update();
function update() {
    findMostFit(function (stream) {
        LAST_ONLINE_STREAM = ONLINE_STREAM;
        if (typeof stream == "undefined") {
            ONLINE_STREAM = undefined;
        }

        ONLINE_STREAM = stream;

        if(typeof UPDATE_METHOD != "undefined"){
            UPDATE_METHOD();
        }
    });
}

function updateMethod(method){
    UPDATE_METHOD = method;
}

setInterval(update, getSettings()['INTERVAL']);