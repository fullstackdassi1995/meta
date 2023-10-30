import React from "react";
import { Component } from "react";
class signUp extends Component{
    render(){
        return(
         <div class="signup">
			<form action="javascript:signIn()">
				<label for="chk" aria-hidden="true">Sign up</label>
				<input type="text" name="txt" id="user_name" placeholder="User name" required></input>
				<input type="email" name="email" placeholder="Email" required id="user_email"></input>
				<input type="password" name="pswd" placeholder="Password" required id="user_pass"></input>

				<button type="submit" id="clickSignIn">Sign up</button>
				
			</form>
		</div>
        )

    }
    
}