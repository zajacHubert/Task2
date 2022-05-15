// 1. Please write a function that shows the usage of closures

function helloUser() {
    const name = 'User Name';
    function logName() {
        console.log(name);
    }
    return logName;
}

const helloFunc = helloUser();
helloFunc();