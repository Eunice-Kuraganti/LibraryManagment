package com.example.springboot;

import static io.restassured.RestAssured.given;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import io.restassured.http.ContentType;

@SpringBootTest
class IssueServiceApplicationTests {

	@Test
	@Order(1)
	void getIssuesRequest() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:7000/getIssues")
		.then()
		.assertThat().statusCode(200);
	}
	@Test
	@Order(2)
	void getStatus() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:7000/getStatus")
		.then()
		.assertThat().statusCode(200);
	}
	

}
