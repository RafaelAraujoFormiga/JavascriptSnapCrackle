
function snapCrackle(maxValue){
    let string=[]
      
     for(i=1;i<=maxValue;i++){     
 
         if(i%2!=0 && i%5===0){
            string.push("SnapCrackle")
         }
        if(i%2!=0 && i%5!=0){
            string.push("Snap") 
        }
    
        if(i%2===0 && i%5!=0){
            string.push(i)
     }
   if(i%5===0 && i%2==0){
    string.push("Crackle") 
   }  
     }
 return string.join(", ")
 }
 snapCrackle(15)

 









