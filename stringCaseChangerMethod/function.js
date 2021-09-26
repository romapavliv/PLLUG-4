function stringCaseChanger(word) {
    let result = word.split('');
    for(let i = 0; i<word.length; i++){
      if(word[i]==word[i].toUpperCase()) result[i] = word[i].toLowerCase();
      if(word[i]==word[i].toLowerCase()) result[i] = word[i].toUpperCase();
    }
   return result.join('');
 }