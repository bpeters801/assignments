// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce((final, num) => final += num)
 }
 
 console.log(total([1,2,3])); 

// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    return arr.reduce(function(final, num) {
        final += num
        return final
    }, [])
 }
 
 console.log(stringConcat([1,2,3])); 

//  3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    return voters.reduce(function (final, voter){
        if(voter.voted){
            final++
        }
        return final
    }, 0)   
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); 

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    return arr.reduce((final, num) => final += num.price ,0)  
 } 
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); 

// 5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
    const result = arr.reduce((final, flatArr) => {
        newArr = final.concat(flatArr)
        return newArr;
    }) 
    return result;
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); 

//  6) Given an array of potential voters, return an object representing the results of the vote
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce(function(final, voter){
        if(voter.age <= 25 && voter.age >= 18){
            final.numYoungPeople++
        }
        if(voter.voted && voter.age <= 25 && voter.age >= 18) {
            final.numYoungVotes++
        }
        if(voter.age <= 35 && voter.age >= 26){
            final.numMidPeople++
        }
        if(voter.voted && voter.age <= 35 && voter.age >= 26){
            final.numMidVotes++
        }
        if(voter.age <= 55 && voter.age >= 36){
            final.numOldPeople++
        }
        if(voter.voted && voter.age <= 55 && voter.age >= 36){
            final.numOldVotes++
        }
        return final
    
    }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople:0, numOldVotes: 0, numOldPeople: 0})
}


console.log(voterResults(voters)); 
