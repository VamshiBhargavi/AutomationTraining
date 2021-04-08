// array
let tool = {
    name:"selenium",
    version:4,
    languages:["java", "js", "python", "ruby", "c#"],
    start:function(){
    console.log(this.name+" is started");
    },
    stop:function(){
    console.log(this.name+" is stopped");
    }
}

console.log(tool["name"]);
console.log(tool["version"]);

console.log(tool.name);
console.log(tool.version);
console.log(tool.languages);

tool.start();
tool.stop();
// javascript object notation : JSON
// keyvalue combination
// value can be integer, string, boolean, object, array