function merge2String(string1, string2) {
  let string1Array = string1.split("");
  let string2Array = string2.split("");
  let tempString = "";
  let length1Array = string1Array.length;
  let length2Array = string2Array.length;

  if (length1Array == length2Array) {
    for (let i = 0; i < length1Array; i++) {
      tempString += string1Array[i];
      tempString += string2Array[i];
    }
    return tempString;
  }
  if (length1Array < length2Array) {
    for (let i = 0; i < length1Array; i++) {
      tempString += string1Array[i];
      tempString += string2Array[i];
    }
    for (let j = length1Array; j < length2Array; j++) {
      tempString += string2Array[j];
    }
    return tempString;
  }

  if (length1Array > length2Array) {
    for (let i = 0; i < length2Array; i++) {
      tempString += string1Array[i];
      tempString += string2Array[i];
    }
    for (let j = length2Array; j < length1Array; j++) {
      tempString += string1Array[j];
    }
    return tempString;
  }
}
console.log(merge2String("abcd", "123"));
