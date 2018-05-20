/*window.onload=(function(){
	var button=document.getElementById("button").onclick=function(){
		var box=document.getElementById("box1").style.color;
		
	}
	// (function(){
		console.log("box");
		console.log("button");
		var box=document.getElementById("box1");
		button.appendChild(box1);
		// this.p=
		// document.getElementById("article")
	// }};
});

*/

// (function(){ 
	 // document.getElemntById("button").onclick=function(){ 
					 // document.getElementById("boxses"); 
					 // }; 
				 // }) (); 
// 				 
window.onload = function(){
	var i;

	for(i=0; i<4; ++i){
		var newObj = document.createElement("article");
		var formObj = document.getElementById("div");
 		formObj.appendChild(newObj);
 	}
 		// newObj.className ="box";
		
		var opacity_element= newObj.style.opacity; // save the original opacity of the elements
		
		newObj.addEventListener("onmouseover", function(){
    		newObj.style.opacity = Math.random();
		});

		newObj.addEventListener("onmouseout", function(){
    		newObj.style.opacity = opacity_element;
		});
	
};


// document.getElementById("p").onclick = function() {color_box()};

// $("p").mouseover(function(){
        // $("p").css("background-color", "yellow");
    // });
    // $("p").mouseout(function(){
        // $("p").css("background-color", "lightgray");
    // });

// function color_box() {
	// document.getElementById("article").style.opacity.onmouseover(); 
// }	
	
		// document.getElementById("four_box").onmouseover(function(){
			// console.log("four_box");
			// this.style.opacity.Math.random();
			// console.log("hello");
		// })();


