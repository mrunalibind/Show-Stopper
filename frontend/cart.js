let cartitem=JSON.parse(localStorage.getItem("cartitem"))||[];
// console.log(cartitem)
let whole=document.getElementById("mainSection")
let mainSection=document.getElementById("appendData");
let empty=document.getElementById("empty")
let count=document.getElementById("count");
let totalPrice=document.getElementById("totalPrice")
let grand=document.getElementById("grand")
let total=document.getElementById("total")

if(cartitem.length>0){
    empty.innerHTML="";
    
}


display(cartitem)    

function display(arr){
    if(arr.length==0){
        whole.innerHTML=""
    }
    // console.log(cartitem)
    mainSection.innerHTML="";
    count.innerText=arr.length
    let sum=0;
    arr.forEach((element,index) => {
        sum+=element.rupees*element.quantity
        let card=document.createElement("div");
        card.setAttribute("class","card");
        let data=document.createElement("div");
        data.setAttribute("class","data")

        let card_img=document.createElement("div");
        card_img.setAttribute("class","img_div")
        let img=document.createElement("img");
        img.setAttribute("src",element.image);

        card_img.append(img)

        let detail=document.createElement("div");

        let pattern=document.createElement("h4");
        pattern.innerText=element.pattern;

        let title=document.createElement("p");
        title.setAttribute("class","title");
        title.innerText=element.title;

        let rupees=document.createElement("p");
        rupees.setAttribute("class","title");
        rupees.innerText=`₹ ${element.rupees}`

        let div_btn=document.createElement("div");

        let remove=document.createElement("button");
        remove.setAttribute("class","delete")
        remove.innerText="Delete";

        remove.addEventListener("click",()=>{
            console.log(arr)
            arr.splice(index,1);
            localStorage.setItem("cartitem",JSON.stringify(arr))
            display(arr)
            alert("Product is deleted")
            count.innerText=arr.length
        })

        let quan=document.createElement("div");
        quan.setAttribute("class","quan")

        let incr=document.createElement("button");
        incr.innerText="+";
        
        let p=document.createElement("p");
        p.innerText=element.quantity;

        incr.addEventListener("click",()=>{
            p.innerText++;
            totalPrice.innerText=Number(totalPrice.innerText)+Number(element.rupees)
            grand.innerText=(Number(grand.innerText)+element.rupees).toFixed(2)
        })

        let decre=document.createElement("button");
        decre.innerText="-";

        decre.addEventListener("click",()=>{
            if(p.innerText>1){
                p.innerText--;
                totalPrice.innerText=Number(totalPrice.innerText)-Number(element.rupees)
                grand.innerText=(Number(grand.innerText)-element.rupees).toFixed(2)
            }
        })

        quan.append(incr,p,decre)

        div_btn.append(remove,quan)

        detail.append(pattern,title,rupees,div_btn)

        data.append(card_img,detail)

        card.append(data)
        
        // container.append(card)
        mainSection.append(card)
    })
    totalPrice.innerText=sum;
    grand.innerText=((Number(totalPrice.innerText))+80.20).toFixed(2)
}

let confirm=document.getElementById("confirm");
let succAnc=document.getElementById("succAnc")

confirm.addEventListener("click",()=>{
    alert("Your Payment is Successful, Thank you for Purchasing")
    succAnc.setAttribute("href","./index.html")
    whole.innerHTML=""
    localStorage.clear("cartitem")
})

document.querySelector("#placeOrder").addEventListener("click",()=>{
    document.querySelector(".popup").classList.add("active");
    
})

document.querySelector(".popup .close-btn").addEventListener("click",()=>{
    document.querySelector(".popup").classList.remove("active");

})

