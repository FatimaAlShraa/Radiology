var doWork = "done by me";

document.write('<h3>' + doWork + '</h3>');

var universityName = prompt("what is name of university ?")

// var student=JUST;
while (universityName !== 'JUST' && universityName !== 'Jordand University') {
    universityName = prompt('please only write JUST / Jordan University');
}

var numberOFUniversity = prompt('How much university you want?');




var university = '';
var result = '';

if (universityName === 'JUST') {
    university = ('<img src="OIP.jpg"/>');

} else if (universityName == 'Joradn University') {
    university = ('<img src="jo.jpg"/>');
} else {
    alert('choose between JUST and Jordan University');

}
for (var j = 0; j < numberOFUniversity; j++) {
    result += university;
}


document.write(result)



var age = prompt("what is your age?");
function knowAge(personAge) {

    console.log(personAge);

    if (personAge >= 15 && personAge < 45) 
        {
            alert('go on and learn');
        }
        if (personAge < 15 || personAge > 45) {
            alert('go on too');
        }


    
} knowAge(age);


    


var bored = true;
if (bored == true) {
    console.log('go to sleep');
}