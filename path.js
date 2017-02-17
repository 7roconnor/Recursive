//Your code below
function buildPath(percentageOfTraps, arrayLength)
{
  let path = [];
  for (i = 0; i < arrayLength; i++)
  {
    let randomNumber = Math.random();
    if (randomNumber <= percentageOfTraps)
    {
      path.push(false);
    }
    else
    {
      path.push(true);
    }
  }
  if(path[arrayLength + 1] != true)
  {
    path[arrayLength + 1] = true;
    return path;
  }
  else
  {
    return path;
  }
}

function stroll(pathArray, index)
{
  if(index == pathArray.length - 1)
  {
    return 1;
  }
  if(pathArray[index] == false)
  {
    return 0;
  }
  else
  {
    return stroll(pathArray, index+1);
  }
}

function rsj(pathArray, index)
{
  if(index == pathArray.length - 1)
  {
    return 1;
  }
  if(pathArray[index] == false || index >= pathArray.length)
  {
    return 0;
  }


  else
  {
    return rsj(pathArray, index + 1) + rsj(pathArray, index + 2) + rsj(pathArray, index + 5);
  }
}

//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
/*console.log(testpath1);
console.log(testpath2);
*/

/*console.log("---------------------");
console.log(stroll([true,false,true],0));
console.log(stroll([true,true,true],0));

*/

testArray = [true, false, true, false, false, true, true, true];

testPath = buildPath(.4, 20);
console.log(testPath);
console.log(rsj(testpath2, 0));  
/*
console.log(rsj(testpath1,0))
console.log(rsj(testpath2,0));
*/
