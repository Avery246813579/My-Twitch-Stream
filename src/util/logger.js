const WARNING = "", ERROR = "VERBOSE", INFO = "INFO";
const VERSION = "1.0.0";
var VERBOSE = false;

/**
 * Logs a message to the console
 *
 * @param prefix    The message prefix
 * @param message   The desired message
 */
function log(prefix, message){
    if(prefix == INFO && !VERBOSE){
        return;
    }

    console.log("MyTwitchStream v" + VERSION + " " + prefix + " >> " + message);
}

/**
 * Sends an info log to console
 *
 * @param message   The desired message
 */
function info(message){
    log(INFO, message);
}

/**
 * Sends a warning log to console
 *
 * @param message   The desired message
 */
function warning(message){
    log(WARNING, message);
}

/**
 * Sends an error log to console
 *
 * @param message   The desired message
 */
function error(message){
    log(ERROR, message);
}