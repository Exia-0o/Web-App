package com.result.webservices.restfulwebservices.helloworld;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

// Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {
	// GET
	// URI - /hello-world
	// method - "Hello World"
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWordBean() {
		return new HelloWorldBean("Hello World");
	}
	
	//hello-world-bean/path-variable/admin
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		//throw new RuntimeException("Something Went Wrong...");
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
