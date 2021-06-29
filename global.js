//Much like the window object when we work with javascript inside the browser.
console.log(global);

global.setTimeout( ()  => {
    console.log("hello");
    clearInterval(int)
}, 3000);

const int = setInterval(() => {
    console.log("In Interval")
}, 1000);

console.log(__dirname);
console.log(__filename);