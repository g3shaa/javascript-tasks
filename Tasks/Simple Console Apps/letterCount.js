function letterCount(str, c) {
    var count=0;
    str=str.toLowerCase(); 
    for(var i=0;i<str.length;i++){
       if(str.charAt(i)==c){ 
         count++; 
       }
    }
    return count;
  }
  
  console.log(letterCount("Connect",'c')) 
  console.log(letterCount("first person",'s')) 