// Iterate over an array with a while loop and print all its values. 

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 
              46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 48, 44];


var output; 
var i = 0;

while (i < scores.length) {
    output = "Bubble solution #" + i + " score: " + scores[i];

    console.log(output);

    i = i + 1;
}
