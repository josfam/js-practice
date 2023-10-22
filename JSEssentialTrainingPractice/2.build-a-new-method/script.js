/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
	name: "Everyday Backpack",
	volume: 30,
	color: "grey",
	pocketNum: 15,
	strapLength: {
	  left: 26,
	  right: 26,
	},
	toggleLid: function (lidStatus) {
	  this.lidOpen = lidStatus;
	  return "The lid is now " + this.lidOpen;
	},
	newStrapLength: function (lengthLeft, lengthRight) {
	  this.strapLength.left = lengthLeft;
	  this.strapLength.right = lengthRight;
	},
	renameBag: function (newName) {
		this.name = newName;
		return "The bag is now named " + this.name;
	},
	changeVolume: function (newVolume) {
		this.volume = newVolume;
		return "New volume: " + this.volume;
	},
	recolor: function (newColor) {
		this.color = newColor;
		return "Your bag is now colored " + this.color;
	},
	changePockets: function (newPockets) {
		this.pocketNum = newPockets;
		return "You now have " + this.pocketNum + " pockets!";
	}
  };

const myBackPack = backpack;

console.log("Here is your backpack summary:");
console.log("Name: " + myBackPack.name + "\n",
"Volume: " + myBackPack.volume + "\n",
"Color: " + myBackPack.color + "\n",
"Pocket number: " + myBackPack.pocketNum + "\n");

console.log(myBackPack.changeVolume(40));
console.log(myBackPack.renameBag("Strappy"));
console.log(myBackPack.changePockets(10));

