function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
 var output;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }else{
    output = "The line is currently: "
    for (let i =0; i<katzDeliLine.length; i++){
      if (i === 0){
        output = output + (i+1) + ". " + katzDeliLine[i]
      } else{
        output = output + ", " + (i+1) + ". " + katzDeliLine[i]
      }
    }//for
  } //else
  return output
}
  