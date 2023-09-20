var name1 = 'yoki 1';

let name2= 'yoki 2';
console.log(name2);

let name3 = 'bro 3';

//nested loops - one inside another
for (var i = 1; i < 3; i++) 
{
    
    console.log("one-time loop started....");
    console.log("now,i is:",i);
    for (var j = 3; j > 1; j--) {
    console.log("now,j is:",j);
        console.log(i + ", " + j);
    }
    
        console.log("one-time loop ended");
}

// USing if-else:
// Gold medal
// Silver medal
// Bronze medal
// 4
// 5
// 6
// 7
// 8
// 9
// 10

for (var i=1; i <= 10 ; i++)
{
    if(i==1)
    {
        console.log("Gold medal")
    }
    else if(i==2)
    {
        console.log("Silver medal")
    }
    else if(i==3)
    {
        console.log("Bronze medal")
    }
    else
    {
    console.log(i)
    }
}

// USing SWITCH case:
// Gold medal
// Silver medal
// Bronze medal
// 4
// 5
// 6
// 7
// 8
// 9
// 10
for (var i=1; i <= 10 ; i++)
{
    switch(i)
    {
        case 1:
        {
            console.log("Gold medal");
            break;
        }
        case 2:
        {
            console.log("Silver medal");
            break;
        }
        case 3:
        {
            console.log("Bronze medal");
            break;
        }
        default:
        {
            console.log(i);
        }        
        
    }
}
