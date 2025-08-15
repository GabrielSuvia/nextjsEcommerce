

const hora = "12:00:00PM"
const hora2 = "06:00:00PM"
const hora3 = "06:00:00AM"
const hora4 = "13:00:00AM"

function convertTime(s){

const value = s[s.length-2];
const hour = s.slice(0,2)
const hourNum = Number(hour);

if(value==="P" && 12<=hourNum ){
    //no hacer conversion
    console.log("1")
  console.log(s)
};

if(value === "P" && 12>hourNum ){
    //hacer conversion
     console.log("2")
    const newFormat = hourNum+12;
    const str = String(newFormat);
    const hourString = s.slice(2,s.length)
    const concatHour = str.concat(hourString)
   console.log(concatHour)
}

if(value==="A" && 12<=hourNum ){
    //no hacer conversion
    console.log("3")
  console.log(s)
};
if(value==="A" && 12>=hourNum ){
    //no hacer conversion
      console.log("4")
    const newFormat = hourNum-12;
    console.log(newFormat)
    const str = String(newFormat);
    const hourString = s.slice(2,s.length)
    const concatHour = str.concat(hourString)
  
  console.log(s)
};

return;

}
convertTime(hora4)