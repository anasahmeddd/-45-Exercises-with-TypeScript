// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.




function show_magicians(magicians:string[]){
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
};
let magicians:string[] = ["Harry Houdini","David Blaine","David Copperfield","Ricky Jay"];

show_magicians(magicians);