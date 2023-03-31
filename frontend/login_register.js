var x=document.getElementById("login");
			var y=document.getElementById("register");
			var z=document.getElementById("btn");
			
			function register() {
				x.style.left = "-200px";
				y.style.left = "190px";
				z.style.left = "110px";
			}
			
			function login() {
				x.style.left = "190px";
				y.style.left = "-500px";
				z.style.left = "0";
			}

			
			let registerBtn=document.getElementById("register");
			registerBtn.addEventListener("submit",(e)=>{
				e.preventDefault();
				onRegister()
			})

			function onRegister(){
				let baseURL="http://localhost:7080/users/register"
					let obj={
						name:registerBtn.nameR.value,
						email:registerBtn.emailR.value,
						password:registerBtn.passR.value
					}
					console.log(obj);

					fetch(baseURL,{
						method:"POST",
						headers:{
							"Content-type":"application/json"
						},
						body:JSON.stringify(obj)
					})
					.then((res)=>res.json())
					.then((res)=>{
						if(res){
							alert(res.msg);
						}
					})
					.catch((err) => console.log(err));
			}


			let loginBtn=document.getElementById("login");
			loginBtn.addEventListener("submit",(e)=>{
				e.preventDefault();
				onLogin()
			})

			function onLogin(){
				let baseURL="http://localhost:7080"
					let obj={
						email:loginBtn.emailL.value,
						password:loginBtn.passL.value
					}
					// console.log(obj);

					fetch(`${baseURL}/users/login`,{
						method:"POST",
						headers:{
							"Content-type":"application/json"
						},
						body:JSON.stringify(obj)
					})
					.then((res)=>res.json())
					.then((res)=>{
						if(res){
							alert(res.msg);
							window.location.href="http://127.0.0.1:5500/frontend/index.html"
						}
					})
					.catch((err) => console.log(err));
			}
			


			// Accordian
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }