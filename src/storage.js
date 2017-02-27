const DEFAULT_SETTINGS = {
    INTERVAL: 30 * 1000,
    AUTO_UPDATE: true,
    UPDATE_DELAY: 30
};

function getStoredStreams() {
    var stored = localStorage['STREAMS'];

    if (typeof stored == "undefined") {
        localStorage['STREAMS'] = JSON.stringify([]);
        return [];
    }

    try {
        return JSON.parse(stored);
    } catch (exception) {
        localStorage['STREAMS'] = JSON.stringify([]);
        return [];
    }
}

function getSettings() {
    var settings = localStorage['SETTINGS'];

    if (typeof settings == "undefined") {
        localStorage['SETTINGS'] = JSON.stringify(DEFAULT_SETTINGS);
        return DEFAULT_SETTINGS;
    }


    try {
        settings = JSON.parse(settings);

        var changed = false;
        for(var dKey in DEFAULT_SETTINGS){
            if(DEFAULT_SETTINGS.hasOwnProperty(dKey)){
                if(typeof settings[dKey] == "undefined"){
                    settings[dKey] = DEFAULT_SETTINGS[dKey];
                    changed = true;
                }
            }
        }

        if(changed) {
            localStorage['SETTINGS'] = JSON.stringify(settings);
        }

        return settings;
    } catch (exception) {
        localStorage['SETTINGS'] = JSON.stringify(DEFAULT_SETTINGS);
        return DEFAULT_SETTINGS;
    }
}

function saveSettings(settings){
    localStorage['SETTINGS'] = JSON.stringify(settings);
}
