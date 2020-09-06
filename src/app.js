var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count){
    if(count<=0){
        return 'Number cannot be zero/negative';
    }
        for(var i=0;i<count;i++){
            chocolates.unshift(color);
        }    
 }

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    var res = [];
    if(number<1){
        return 'Number cannot be zero/negative';
    }
    else if(number>chocolates.length){
       return 'Insufficient chocolates in the dispenser'; 
    }
    for(var i=0;i<number;i++){
        res[i]=chocolates.shift();
    }
    return res;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    var res=[];
    if(number<1){
        return 'Number cannot be zero/negative';
    }
    else if(number>chocolates.length){
         return 'Insufficient chocolates in the dispenser'; 
    }
    for(i=0;i<number;i++){
        res[i]=chocolates.pop();
    }
    return res;
}   

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    var res=[];
    var count=0;
    if(number<1){
        return 'Number cannot be zero/negative';
    }
    else if(number>chocolates.length){
         return 'Insufficient chocolates in the dispenser'; 
    }
    for(i=chocolates.length;i>=0;i--){
        if(chocolates[i]==color){
            res[count++]=chocolates.pop();
        }
    }
    return res;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates){

    var colors=['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
    var res=[];
    for(let i=0;i<colors.length;i++){
        var count =0;
        for(let j=0;j<chocolates.length;j++){
            if(colors[i]==chocolates[j]){
               count++;
               res[i]=count;   
            }
        }            
    }
    return res.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){

    var count_choc = chocolates.reduce((b,a)=>{
        if(a in b){
            b[a]++
        }
        else{
            b[a]=1;
        }
        return b;
    },{})
    var ans = chocolates.sort((a,b)=>{
        if(count_choc[b]>count_choc[a]){
            return 1;//a comes before b
        }
        else if(count_choc[b]<count_choc[a]){
            return -1;//b comes first
        }
        else if(a>b){
            return 1;
        }
        else if(a<b){
            return -1;
        }
    });

    chocolates=ans;
    console.log(chocolates);
    return chocolates;    
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor){
if(number<1){
    return 'Number cannot be zero/negative';
}
    for(var i=0; i<chocolates.length;i++){
    for(var j=0;j<number;j++){
    if(chocolates[i]==color){
        if(chocolates[i]==finalColor){
            return "Can't replace the same chocolates";
        }
        else{
        chocolates[i]=finalColor;
        }
    }
}
}
return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){

var res;
for(var i=0;i<chocolates.length;i++){
    if(chocolates[i]==color){
        if(chocolates[i]==finalColor){
            return "Can't replace the same chocolates";
        }
        else{
        chocolates[i]=finalColor;
        }
    }
}
res=[chocolates.length,chocolates];
 return res;
}

//Challenge 1: Remove one chocolate of ____ color from the top
// function removeChocolateOfColor(color){
//     for(i=0;i<chocolates.length;i++){
//         if(chocolates[i]==color){
//             chocolates[i].shift();
//             return chocolates;
//         }   
//     }
// }
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
