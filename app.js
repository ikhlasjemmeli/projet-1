
    var small_menu= document.querySelector('.tog')
    var menu= document.querySelector('.menu')
    small_menu.onclick = function(){
       small_menu.classList.toggle('active');
       menu.classList.toggle('resp');
    }

    
        function validation()
        {
            var message =" Veuillez remplir les champs suivants : \n" ;
            var ch ="";
            if(document.getElementById("name").value==""){
                ch +=  "¤ Name \n" ;
            }
            if(document.getElementById("email").value==""){
                ch +=  "¤ Email \n" ;
            }
            if(document.getElementById("tel").value==""){
                ch +=  "¤ Number \n" ;
            }
            if(document.getElementById("date").value==""){
                ch +=  "¤ Date \n" ;
            }
            else
	 			{
					if(!document.getElementById("email").value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
					{
						alert("¤ Adresse email invalide! \n");
					}
	 			}
            if(ch!=""){
                alert(msg+ch) ;
            }
            else{
                document.getElementById("res").submit();
            }

        }
    
