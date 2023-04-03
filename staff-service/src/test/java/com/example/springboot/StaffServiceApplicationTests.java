package com.example.springboot;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Order;
import org.springframework.boot.test.context.SpringBootTest;
import static io.restassured.RestAssured.*;
import com.example.springboot.auth.AuthenticationRequest;
import io.restassured.http.ContentType;

@SpringBootTest
class StaffServiceApplicationTests {

	@Test
	@Order(1)
	void LoginTest() {
		AuthenticationRequest authCheck = new AuthenticationRequest();
		authCheck.setEmail("admin");
		authCheck.setPassword("admin");
		
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.body(authCheck)
		.when()
		.post("http://localhost:5001/api/v1/auth/authenticate")
		.then()
		.assertThat().statusCode(200);
	}
	

}
