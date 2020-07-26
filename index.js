function takeANumber (katzDeliLine, name){
  var currentLine =[];
  let i=0
  while (i<katzDeliLine.length-1){
    currentLine=katzDeliLine.push(name);
    i++
  }
 return `Welcome ${currentLine[i]}. You are number ${i+1} in line.`
}


  