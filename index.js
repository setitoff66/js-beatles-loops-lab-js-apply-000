// add solution here
function theBeatlesPlay(musicians, instruments){
var array = [];
for(var i=0; i < musicians.length; i++) {
array.push(musicians[i] + ' plays ' + instruments[i]);
}
return array;
}


function johnLennonFacts(factsArray){
var results = [];
var count=0;
while (count < facts.length ){
results.push(facts[count] + '!!!');
count++;
}
return results;
}

function iLoveTheBeatles(num){
var array=[];
do{
num++;
array.push('I love the Beatles!')
} while (num < 15);
return array;
}