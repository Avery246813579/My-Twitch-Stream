function streamOnline(name, callback) {
    getStream(name, function (data) {
        if (typeof data == "undefined") {
            callback(false);
            return;
        }

        callback(true, data);
    });
}

function getStream(name, callback) {
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/' + name,
        headers: {
            'Client-ID': 'gxf6yv4dro02sb5m0tc9jmb3wak4vk'
        },
        success: function (data) {
            if (data['stream'] == null) {
                callback(undefined);
            } else {
                callback(data);
            }
        }
    });
}

function saveStreams() {
    localStorage['STREAMS'] = JSON.stringify(STREAMS);
}

function hasStream(name) {
    for (var i = 0; i < STREAMS.length; i++) {
        if (STREAMS[i]['NAME'].toLowerCase() == name.toLowerCase()) {
            return true;
        }
    }

    return false;
}

function addStream(name, payload) {
    name = name.toUpperCase();

    if (hasStream(name)) {
        return;
    }

    STREAMS.push(payload);
    saveStreams();
}

function removeStream(name) {
    name = name.toUpperCase();

    if (!hasStream(name)) {
        return;
    }

    for (var i = 0; i < STREAMS.length; i++) {
        if (STREAMS[i]['NAME'].toLowerCase() == name.toLowerCase()) {
            STREAMS.splice(i, 1);
        }
    }

    saveStreams();
}

function updateStream(name, payload) {
    name = name.toUpperCase();

    if (!hasStream(name)) {
        return;
    }

    for (var i = 0; i < STREAMS.length; i++) {
        if (STREAMS[i]['NAME'].toLowerCase() == name.toLowerCase()) {
            for (var key in payload) {
                if (payload.hasOwnProperty(key)) {
                    STREAMS[i][key] = payload[key];
                }
            }
        }
    }

    saveStreams();
}

function findMostFit(callback) {
    var STREAM, STREAM_DATA, TOP = -1, ITERATED = 0;
    for (var i = 0; i < STREAMS.length; i++) {
        (function () {
            var stream = STREAMS[i];
            streamOnline(stream['NAME'], function (online, data) {
                if (online && stream['PRIORITY'] > TOP) {
                    STREAM = stream;
                    STREAM_DATA = data;
                    TOP = STREAM['PRIORITY'];
                }

                ITERATED++;

                if (ITERATED == STREAMS.length) {
                    callback(STREAM, data);
                }
            });
        })();
    }
}