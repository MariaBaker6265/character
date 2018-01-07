function Character (name, profession, gender, age, strength, HitPoints, PrintStats) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = parseInt(age);
    this.strength = parseInt(strength);
    this.HitPoints = parseInt(HitPoints);
    this.PrintStats = function() {
    console.log("Name :" + this.name + "\nProfession :" + this.profession + "\nGender :" + this.gender + "\nAge :" + this.age + "\nHit Points :" + this.HitPoints);   
    console.log("\n----------------------------\n");
};

}

var rico = new Character("Rico", "Undercover Cop", "Male", 29, 80, 95);
var lola = new Character("Lola", "Lawyer", "Female", 32, 100, 98);

rico.PrintStats();
lola.PrintStats();
//This code is not working.
this.isAlive = function () {
    if (this.HitPoints > 0) {
        console.log(this.name + " is alive!");
        console.log("\n-------------\n");
        return true;
    }
    console.log(this.name + " has died!");
    return false;
  };

this.isAlive();
rico.isAlive();




