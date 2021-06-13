//Assignment 1

var wishlist = new Array();
function listWishlist(ele){
	if(ele.id=="Spirit"){
		var pTag = document.getElementById('tick1');
		if(!wishlist.includes("Spirit")){
			wishlist.push("Spirit");
			pTag.style.visibility = 'visible';
		}
		else{
			for(var i=0;i<wishlist.length;i++){
        		if(wishlist[i]==="Spirit"){
                	wishlist.splice(i,1);
                    pTag.style.visibility = "hidden";
                   }
			}
			
		}
	}
	if(ele.id=="shrek"){
		var pTag = document.getElementById('tick2');
		if(!wishlist.includes("Shrek")){
			wishlist.push("Shrek");
			pTag.style.visibility = 'visible';
		}
		else{
			for(var i=0;i<wishlist.length;i++){
        		if(wishlist[i]==="Shrek"){
                	wishlist.splice(i,1);
                    pTag.style.visibility = "hidden";
                   }
             }
			
		}
	}
	if(ele.id=="walle"){
		var pTag = document.getElementById('tick3');
		if(!wishlist.includes("WALL-E")){
			wishlist.push("WALL-E");
			pTag.style.visibility = 'visible';
		}
		else{
			for(var i=0;i<wishlist.length;i++){
        		if(wishlist[i]==="WALL-E"){
                	wishlist.splice(i,1);
                    pTag.style.visibility = "hidden";
                   }
             }
			
		}
	}
	if(ele.id=="bug"){
		var pTag = document.getElementById('tick4');
		if(!wishlist.includes("A bugs life")){
			
			wishlist.push("A bugs life");
			pTag.style.visibility = 'visible';
		}
		else{
			for(var i=0;i<wishlist.length;i++){
        		if(wishlist[i]==="A bugs life"){
                	wishlist.splice(i,1);
                    pTag.style.visibility = "hidden";
                   }
             }
			
		}
	}
	if(wishlist.length==0){
		console.log("Your wishlist is empty");
	}
	else{
		console.log("your wishlist : \n"+wishlist);
	}
	
}

