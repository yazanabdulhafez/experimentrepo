'use strict'
var userName = prompt("what is your name ?")
alert("welcome " + userName)
var favFood = prompt("what do you prefer food or drink?")
if (favFood === "food") {
    var Food = prompt("what sandwich do you want burger or hot dog ?")
    if (Food === "burger") {
        alert("check the buttom of the website")
        document.write('<p>you will eat the the most delecious berger </p>')
        document.write('<img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/f4/18/95/burger.jpg" >')
    } else if (Food === "hot dog") {
        alert("check the buttom of the website")
        document.write('<p>you will eat the the most delecious hot dog </p>')
        document.write('<img src="https://potatorolls.com/wp-content/uploads/2020/10/Basic-Hot-Dogs-960x640.jpg" >')
    } else {
        alert("please choose burger or hot dog next time")
    }

} else if (favFood === "drink") {
    var Drink = prompt("what drink do you want soda or redbull ?")
    if (Drink === "soda") {
        alert("check the buttom of the website")
        document.write('<p>you will drink best soda ever </p>')
        document.write('<img src="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2017/01/soda-cans-istock-radu-bercan-940x540.jpg" >')

    } else if (Drink === "redbull") {
        alert("check the buttom of the website")
        document.write('<p>you will drink best redbull ever </p>')
        document.write('<img src="https://www.gannett-cdn.com/media/USATODAY/GenericImages/2012/10/05/4045.rb_se_key_visual_f39l_master_simple.r1_rgb-16_9.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" >')
    } else {
        alert("please choose soda or redbull next time")
    }
} else {
    alert("wrong selection")
} {

}

// let studentsName = ['yazan', 'ahmad', 'osama', 'muhmad', 'morad'];
// let userName = prompt('enter student name please?');
// for (var i = 0; i < studentsName.length; i++) {
//     while (studentsName[i] !== userName) {
//         console.log(i);
//         console.log(students[i]);
//         let stuName = students[i];
//         return stuName;
//     }
// }
// alert('welcome back ' + stuName)
// function checkPlayer() {

//     let ballondorArray = ['ronaldo', 'messi', 'cristiano', 'kaka', 'zidane', 'modric'];
//     let theBest = ''
//     for (let y = 0; y < 6; y++) {
//         theBest = prompt('Give me one name player won with the ballondor? ');
//         for (let i = 0; i < ballondorArray.length; i++) {

//             if (theBest == ballondorArray[i]) {
//                 alert('correct');
//                 y = 6;
//                 sum++;
//                 break;
//             }

//         }
//         if (y == 5) {
//             alert('no more trials \n' + 'the right answers are = ' + ballondorArray)
//         } else if (y < 6) {
//             alert('this is wrong');
//         }

//     }
// }
// checkPlayer();