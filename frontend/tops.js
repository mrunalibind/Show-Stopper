"https://639af865d514150197465a63.mockapi.io/top"

// let user=import { userFolks } from "../backend/routes/user_route";
let topURL="https://639af865d514150197465a63.mockapi.io/top"
let mainSection=document.getElementById("display_product");
 fetchRender();

 let storeData=[];
function fetchRender(){
    fetch(topURL)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        storeData=res;
        display(res);
        
    })
    
}
let cart= JSON.parse(localStorage.getItem("cartitem"))||[];

let count=document.getElementById("count");
count.innerText=cart.length
function display(data){
    mainSection.innerHTML="";
    
    data.forEach((element) => {

        let card=document.createElement("div");
        card.setAttribute("class","card");

        let card_img=document.createElement("div");
        card_img.setAttribute("class","img_div")
        let img=document.createElement("img");
        img.setAttribute("src",element.image);

        card_img.append(img)

        let pattern=document.createElement("h4");
        pattern.innerText=element.pattern;

        let title=document.createElement("p");
        title.innerText=element.title;

        let rupees=document.createElement("p");
        rupees.innerText=`₹ ${element.rupees}`

        let div_btn=document.createElement("div");

        let button=document.createElement("button");
        button.innerText="Add To Cart";
        button.addEventListener("click",()=>{
            // let cart= JSON.parse(localStorage.getItem("cartitem"))||[];
			let present = false;
				for(let i=0; i<cart.length; i++){
				  if(cart[i].id==element.id){
					present=true
					break;
				  }
				} 
                if(present===true){
					alert("Your Product is already in Cart")
				}
                else{
					cart.push({...element,quantity:1})
                    count.innerText=cart.length
					alert("Your Product is added in Cart")
						localStorage.setItem("cartitem",JSON.stringify(cart))
				}
        })

        // button.addEventListener("click",()=>{
        //     let {auth}=require("../backend/middleware/auth_midd");
        //     auth()
        //     console.log("Working");
        // })

        div_btn.append(button)

        card.append(card_img,pattern,title,rupees,div_btn)
        
        // container.append(card)
        mainSection.append(card)
    })
    
    

}

let HTL=document.getElementById("HTL")
let LTH=document.getElementById("LTH")
HTL.addEventListener("change",()=>{
    if(HTL.checked){
        let sortData=storeData.sort((a,b)=>{
			return (b.rupees - a.rupees)
        })
        console.log(sortData)
        display(sortData)
    }
})
LTH.addEventListener("change",()=>{
    if(LTH.checked){
        let sortData=storeData.sort((a,b)=>{
			return (a.rupees - b.rupees)
        })
        console.log(sortData)
        display(sortData)
    }
})
let clr=[];
let Black=document.getElementById("Black")
let White=document.getElementById("White")
let Blue=document.getElementById("Blue")

if(clr.length>1){
    let mix=[]

for(let i=0;i<storeData;i++){
    for(let j=0;j<clr;j++){
        if(storeData[i].colour==clr[j]){
            mix.push(storeData[i]);
        }
    }
}
display(mix);
}

Black.addEventListener("change",()=>{
    if(Black.checked){
        clr.push("Black")
    }
    let sortData=storeData.filter((element)=>{
        return element.colour=="Black"
    })
    display(sortData)
})

White.addEventListener("change",()=>{
    if(White.checked){
        clr.push("White")
    }
    let sortData=storeData.filter((element)=>{
        return element.colour=="White"
    })
    display(sortData)
})

Blue.addEventListener("change",()=>{
    if(Blue.checked){
        clr.push("Blue")
    }
    let sortData=storeData.filter((element)=>{
        return element.colour=="Blue"
    })
    display(sortData)
})

let first=document.getElementById("Tops");
let second=document.getElementById("Tshirts");
let third=document.getElementById("Shirts");

first.addEventListener("change",()=>{
    if(first.checked){
        let sortData=storeData.filter((element)=>{
            return first.value==element.type
        })
        display(sortData)
    }
})
second.addEventListener("change",()=>{
    if(second.checked){
        let sortData=storeData.filter((element)=>{
            return second.value==element.type
        })
        display(sortData)
    }
})
third.addEventListener("change",()=>{
    if(third.checked){
        let sortData=storeData.filter((element)=>{
            return third.value==element.type
        })
        display(sortData)
    }
})
