module.exports = function zeros(expression) {
  // your solution
  var tempStr=expression;
var tempArr=tempStr.split("*");
var conterTwo=0,conterFive=0;;
//alert(tempArr);
for(let i=0;i<tempArr.length;i++){
	var number=tempArr[i].substring(0,tempArr[i].indexOf("!"));
  var typeFact=tempArr[i].substring(tempArr[i].indexOf("!")).length;
  //alert(number+" "+typeFact);
  
 	if(!(number%2 == 0)){
  	var k=1;
  }else{
  	k=2;
  }
  //alert(number+" "+k);
  	while(k<number || k==number){
   		var tempKFive=k;
      var tempKTwo=k;
      	while(tempKFive%5 === 0){
        		conterFive++;
      			tempKFive/=5;
        }
        while(tempKFive%2 === 0){
        		conterTwo++;
      			tempKFive/=2;
        }
					/*if(tempK%5 === 0){
     				//	 alert(number+"  "+typeFact+" "+tempK);
     					 conter++;
      					tempK/=5;
     				 } */
      k+=typeFact;
    }
}
return conterFive>conterTwo?conterFive:conterTwo;
}
