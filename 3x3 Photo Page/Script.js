$(document).ready(function(){
	
	$('#B1').click(function(){
		var Input1 = function(answer1){
            $('#P1').replaceWith(answer1);
        } 
        Input1(prompt("Enter in description for the image you want bellow."));
		
	});
	
	$('#B2').click(function(){
		var Input2 = function(answer2){
            $('#P2').replaceWith(answer2);
        } 
        Input2(prompt("Enter in description for the image you want bellow."));
		
	});
    
    $('#B3').click(function(){
		var Input3 = function(answer3){
            $('#P3').replaceWith(answer3);
        } 
        Input3(prompt("Enter in description for the image you want bellow."));
		
	});
    
    $('#B4').click(function(){
		var Input4 = function(answer4){
            $('#P4').replaceWith(answer4);
        } 
        Input4(prompt("Enter in description for the image you want bellow."));
		
	});
    
    $('#B5').click(function(){
		var Input5 = function(answer5){
            $('#P5').replaceWith(answer5);
        } 
        Input5(prompt("Enter in description for the image you want bellow."));
		
	});
    
    $('#B6').click(function(){
		var Input6 = function(answer6){
            $('#P6').replaceWith(answer6);
        } 
        Input6(prompt("Enter in description for the image you want bellow."));
		
	});
    
    $('#B7').click(function(){
		var Input7 = function(answer7){
            $('#P6').replaceWith(answer7);
        } 
        Input7(prompt("Enter in description for the image you want bellow."));
		
	});
    
    $('#B8').click(function(){
		var Input8 = function(answer8){
            $('#P8').replaceWith(answer8);
        } 
        Input8(prompt("Enter in description for the image you want bellow."));
		
	});
    
    $('#B9').click(function(){
		var Input9 = function(answer9){
            $('#P9').replaceWith(answer9);
        } 
        Input9(prompt("Enter in description for the image you want bellow."));
		
	});
	
	
	var ImageSet1 = ["1-1.png", "1-2.jpg"];
                
	var ImageNum1 = 1;
	
 	$('#Frame1').click(function() {
		        
		$("#Image1").fadeOut( 500 );
                    
		$("#Image1").attr('src', ImageSet1[ImageNum1]);
                    
		$("#Image1").fadeIn( 500 );
		
		if(ImageNum1 === 1){
			ImageNum1 = 0;
		}
		
		else{
			ImageNum1 = 1;
		}
	});
		
		
		
		
	var ImageSet2 = ["2-1.jpg", "2-2.jpg"];
                
	var ImageNum2 = 1;
	
 	$('#Frame2').click(function() {
		        
		$("#Image2").fadeOut( 500 );
                    
		$("#Image2").attr('src', ImageSet2[ImageNum2]);
                    
		$("#Image2").fadeIn( 500 );
		
		if(ImageNum2 === 1){
			ImageNum2 = 0;
		}
		
		else{
			ImageNum2 = 1;
		}
	});
	
	
	
	
	
	
	var ImageSet3 = ["3-1.jpg", "3-2.jpg"];
                
	var ImageNum3 = 1;
	
 	$('#Frame3').click(function() {
		        
		$("#Image3").fadeOut( 500 );
                    
		$("#Image3").attr('src', ImageSet3[ImageNum3]);
                    
		$("#Image3").fadeIn( 500 );
		
		if(ImageNum3 === 1){
			ImageNum3 = 0;
		}
		
		else{
			ImageNum3 = 1;
		}
	 });
	
		
		
		
		
	var ImageSet4 = ["4-1.jpg", "4-2.jpg"];
                
	var ImageNum4 = 1;
	
 	$('#Frame4').click(function() {
		        
		$("#Image4").fadeOut( 500 );
                    
		$("#Image4").attr('src', ImageSet4[ImageNum4]);
                    
		$("#Image4").fadeIn( 500 );
		
		if(ImageNum4 === 1){
			ImageNum4 = 0;
		}
		
		else{
			ImageNum4 = 1;
		}
	 });
	
	
	
	
	
	var ImageSet5 = ["5-1.jpg", "5-2.png"];
                
	var ImageNum5 = 1;
	
 	$('#Frame5').click(function() {
		        
		$("#Image5").fadeOut( 500 );
                    
		$("#Image5").attr('src', ImageSet5[ImageNum5]);
                    
		$("#Image5").fadeIn( 500 );
		
		if(ImageNum5 === 1){
			ImageNum5 = 0;
		}
		
		else{
			ImageNum5 = 1;
		}
	 });
	
	
	
	
	
	var ImageSet6 = ["6-1.jpg", "6-2.jpg"];
                
	var ImageNum6 = 1;
	
 	$('#Frame6').click(function() {
		        
		$("#Image6").fadeOut( 500 );
                    
		$("#Image6").attr('src', ImageSet6[ImageNum6]);
                    
		$("#Image6").fadeIn( 500 );
		
		if(ImageNum6 === 1){
			ImageNum6 = 0;
		}
		
		else{
			ImageNum6 = 1;
		}
	 });

	
	
	
	
	
	var ImageSet7 = ["7-1.jpg", "7-2.png"];
                
	var ImageNum7 = 1;
	
 	$('#Frame7').click(function() {
		        
		$("#Image7").fadeOut( 500 );
                    
		$("#Image7").attr('src', ImageSet7[ImageNum7]);
                    
		$("#Image7").fadeIn( 500 );
		
		if(ImageNum7 === 1){
			ImageNum7 = 0;
		}
		
		else{
			ImageNum7 = 1;
		}
	 });
	
	
	

	
	
	var ImageSet8 = ["8-1.jpg", "8-2.jpg"];
                
	var ImageNum8 = 1;
	
 	$('#Frame8').click(function() {
		        
		$("#Image8").fadeOut( 500 );
                    
		$("#Image8").attr('src', ImageSet8[ImageNum8]);
                    
		$("#Image8").fadeIn( 500 );
		
		if(ImageNum8 === 1){
			ImageNum8 = 0;
		}
		
		else{
			ImageNum8 = 1;
		}
	 });
	
	

	
	
	
	var ImageSet9 = ["9-1.jpg", "9-2.jpg"];
                
	var ImageNum9 = 1;
	
 	$('#Frame9').click(function() {
		        
		$("#Image9").fadeOut( 500 );
                    
		$("#Image9").attr('src', ImageSet9[ImageNum9]);
                    
		$("#Image9").fadeIn( 500 );
		
		if(ImageNum9 === 1){
			ImageNum9 = 0;
		}
		
		else{
			ImageNum9 = 1;
		}
	 });
});