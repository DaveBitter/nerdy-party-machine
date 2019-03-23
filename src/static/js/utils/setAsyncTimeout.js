/*
    Async setTimeout function by Dave Bitter: https://gist.github.com/DaveBitter/f44889a2a52ad16b6a5129c39444bb57
*/

export default (cb, timeout = 0) =>
    new Promise(resolve => setTimeout(() => {
        cb();
        resolve();
    }, timeout));
