$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators a,#side a").not("#equals, #decimal").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		if (operator === "sqrt") {
	  
		    
		}
		totaldiv.text("0");
    });
    
    var numOfDecs = 0;
     $("#decimal").click(function(){
        var numOfDecs = 0;
        if(numOfDecs === 0){
            number.append(".");
        }
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    //Add your last .click() here!
    $("#equals").click(function(){
    	if (operator === "+"){
    		number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
    	} else if (operator === "-"){
    		number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
    	} else if (operator === "÷"){
    		number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
    	} else if (operator === "×"){
    		number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
    	}  else if (operator === "√"){
        number = Math.sqrt(number);
        number = (parseInt(number,10).toString(10));
    } else if (operator === "^"){
        newnumber = Math.pow(newnumber, number);
        number= (parseInt(newnumber,10)).toString(10);
    }
    	totaldiv.text(number);
    	testNumLength(number);
    	number = "";
    	newnumber = "";
    });
});