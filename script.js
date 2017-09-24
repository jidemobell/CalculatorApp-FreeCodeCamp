$(document).ready(function(){
    function equalFunction(operator,oldNumber,number){
        number = Number(number);
        oldNumber = Number(oldNumber);
        

        switch (operator) {
            case '+':
                   result = oldNumber + number;
                break;
            case '/':
                result = oldNumber / number;
                break;
            case '*':
             result = oldNumber * number;
                break;

           case '-':
                result = oldNumber - number;
                   break;
        }

        return result;
    }


	var number = "";
    var oldNumber = "";
    var operator = "";
    var final;
    var outputWindow = $("#total");
    outputWindow.text("0");

  /*  $("#numbers > a").not("#clear,#clearall,.blank,.operators").click(function(){
        number += $(this).text();
        
        if(number.length > 9){
            outputWindow.text("num limit reached");
        }

        if(oldNumber != ""){
            pseudoResult = equalFunction(operator,oldNumber,number);
            console.log(pseudoResult);
            oldNumber = String(pseudoResult);
           operator = "";
        }
        testNumLength(number);
		outputWindow.text(String(number));
		
    });  */

    $("#numbers > a").not("#clear,#clearall,.blank,.operators").click(function() { 
        number += $(this).text();
        
        if (outputWindow.text().length >= 9) { 
            outputWindow.text("Err"); 
        } 
        else { 
        outputWindow.text(String(number));
           if(oldNumber != ""){
            pseudoResult = equalFunction(operator,oldNumber,number);
            oldNumber = String(pseudoResult);
           operator = "";
           
          
        }
		
        }
    });

    $("#numbers > .operators").not("#equals").click(function(){
        operator += $(this).text();
        if(oldNumber == ""){
            oldNumber = number;
        }
		number = "";
        outputWindow.text("0"); 
       
    });

    $("#numbers > #clear,#clearall").click(function(){
		number = "";
		outputWindow.text("0");
		if ($(this).attr("id") === "clearall") {
            result = 0;
            oldNumber = "";
		}
    });

    
    $("#numbers > #equals").click(function(){
        final = equalFunction(operator,oldNumber,number);
        if(String(final).length > 9){
            final = final.toFixed(9);
            outputWindow.text(String(final).substring(1,9));
        }
        else{
            outputWindow.text(String(final));
        }
         oldNumber = String(final);
         number="";
         
    });

});