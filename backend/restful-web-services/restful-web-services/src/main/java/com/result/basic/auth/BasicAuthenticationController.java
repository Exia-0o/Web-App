package com.result.basic.auth;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

// Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {

	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWordBean() {
		//throw new RuntimeException("Something Went Wrong...");
		return new AuthenticationBean("You are authenticated");
	}
}
