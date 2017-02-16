//Your code below
function buildPath(percentageOfTraps, arrayLength)
{
  let path = [];
  for (i = 0; i < arrayLength; i++)
  {
    let randomNumber = Math.random() * 100;
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
  else if (pathArray[index] == false)
  {
    return 0;
  }
  else
  {
    index++;
    return stroll(pathArray, index); 
  }
}


//Test code
/*let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
*/

console.log("---------------------");
console.log(stroll([true,false,true],0));
console.log(stroll([true,true,true],0));


/*console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));
*/
