/*
const arre = [1,2,2,3,3,3,4,4,4,4]

function countOccurrences(arr) {
    const result = {};
    for (const num of arr) {
        console.log("num:",result[num])
      result[num] = (result[num] || 0) + 1;//1:1,2:1
      console.log(result[num]);
    }
    return result;
  }
  console.log(countOccurrences(arre))

  let str = "hello"
  function reverseString(str) {
   const process1 = str.split('')
   console.log(process1)
   const process2 = process1.reverse();
   console.log(process2)
   const process3 =process2.join('');
   console.log(process3)
    return process3
  }

  console.log(reverseString(str))

  const arr = [1,1,3,2,4,2]
  function removeDuplicates(arr) {

    return [...new Set(arr)];
  }
   
  const arre = [1,3,3,5,3]
  function sumarArray(arr){
      console.log("acc", "acc:almacena la suma", "num:elemento")
  return arr.reduce((acc,num)=> acc + num, 45);
  }
   */

const list = [{producto:"tele A",category:"panasonic"},{producto:"tele B",category:"sony"}];

  function arrCat(arre, cat){
    let newArre = [];
    newArre=arre.filter((elem, i)=> elem.category=== cat)
    return newArre;
  }

  console.log(arrCat(list,"panasonic"))