function CreateTool(name, version, languages) {
    this.name = name;
    this.version = version;
    this.languages = languages;
    this.start = function () {
        console.log(this.name + " is started");
    }
    this.stop = function () {
        console.log(this.name + " is stopped");
    }
}

let createTool1 = new CreateTool("selenium", 5.5, ["java", "ruby"])
let createTool2 = new CreateTool("Cucumber", 4, ["python", "c#"])
// here CreateTool is a constructor

console.log(createTool1["name"]);
console.log(createTool1["version"]);

console.log(createTool2.name);
console.log(createTool2.version);
console.log(createTool2.languages);

createTool1.start();
createTool2.start();
createTool1.stop();
createTool2.stop()
