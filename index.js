var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments =["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (arr1,arr2){
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments =["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var empArray = [];
  for(var i = 0;i < musicians.length; i++){
     var inst = instruments[i];
     empArray.push(musicians[i] + ' plays ' + inst);


}
return empArray;
}

function johnLennonFacts (arr) {
var results = [];

 var i = 0;
  while (i < arr.length){
    results.push(arr[i] + '!!!');
    i++;

}
return results;
}


function iLoveTheBeatles(num){
  var results = [];
  do {
  num ++;
} while (num < 15);
 results.push('I love the Beatles!');
 return results;
}
