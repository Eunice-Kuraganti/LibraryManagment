package com.example.springboot;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Order;
import org.springframework.boot.test.context.SpringBootTest;
import static io.restassured.RestAssured.*;
import com.example.springboot.auth.AuthenticationRequest;
import io.restassured.http.ContentType;

@SpringBootTest
class UserServiceApplicationTests {
	@Test
	void LoginTest() {
		AuthenticationRequest authCheck = new AuthenticationRequest();
		authCheck.setEmail("user");
		authCheck.setPassword("user");
		
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.body(authCheck)
		.when()
		.post("http://localhost:5000/api/v1/auth/authenticate")
		.then()
		.assertThat().statusCode(200);
	}
	
	}
