
function checkEmailId()
{
	var mailId = document.getElementById("mail-input").value
	var mailIdLen = mailId.length
    
	if (mailIdLen > 0)
	{
		document.getElementById("icon1").setAttribute("class","fa fa-check-circle fa-2x")
		document.getElementById("icon1").style.color = "green"
		document.getElementById("mail-input").style.borderColor = "green"
	}
	else
	{
		var msg = "please provide the Email Address"
		document.getElementById("mail-err").innerHTML = msg
		document.getElementById("icon1").setAttribute("class","fa fa-exclamation-circle fa-2x")
		document.getElementById("icon1").style.color ="red"
		document.getElementById("mail-input").style.borderColor = "red"
		document.getElementById("mail-label").style.color = "red"
	
	}

}

function checkPassword()
{
	var pass = document.getElementById("password-input").value
	var passLen = pass.length

	if (passLen >0)
	{
        document.getElementById("icon3").setAttribute("class","")
		document.getElementById("password-input").style.borderColor = "green"
		document.getElementById("icon3").style.borderColor ="green"
	}
	else
	{
      var msg = "please provide a password"
		document.getElementById("password-err").innerHTML = msg
		document.getElementById("icon2").setAttribute("class","fa fa-exclamation fa-2x")
		document.getElementById("icon2").style.color ="red"
		document.getElementById("icon3").style.borderColor ="red"
		document.getElementById("password-input").style.borderColor = "red"
		document.getElementById("password-label").style.color = "red"

	}
}


function search()
{
	var num = document.getElementById("input-box").value
	
	if (num == 1)
	{
		document.getElementById("link").setAttribute("href","add-book-details.html")
	}
	else if (num == 2)
	{
		document.getElementById("link").setAttribute("href","search-book.html")
	}
    else if (num == 3)
	{
		document.getElementById("link").setAttribute("href","update-book-details.html")
	}
    else if (num == 4)
	{
		document.getElementById("link").setAttribute("href","remove-book.html")
	}
}






