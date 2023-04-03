package com.example.springboot;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Order;
import org.springframework.boot.test.context.SpringBootTest;
import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;

@SpringBootTest
class BookServiceApplicationTests {


	@Test
	@Order(1)
	void getAllBooks() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:5002/books")
		.then()
		.assertThat().statusCode(200);
	}
	
	@Test
	@Order(2)
	void getBookById() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:5002/book/1")
		.then()
		.assertThat().statusCode(200);
	}
	
	@Test
	@Order(3)
	void getBookByAccessnumber() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:5002/382344539900042")
		.then()
		.assertThat().statusCode(200);
	}
	
	@Test
	@Order(4)
	void getBookByAuthor() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:5002/author/abc")
		.then()
		.assertThat().statusCode(200);
	}
	
	@Test
	@Order(5)
	void getBookByCategory() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:5002/category/Programming")
		.then()
		.assertThat().statusCode(200);
	}
	@Test
	@Order(6)
	void findAll() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:5002/keyword/the")
		.then()
		.assertThat().statusCode(200);
	}
	@Test
	@Order(7)
	void getBookByTitle() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:5002/title/Hour of the Assasin")
		.then()
		.assertThat().statusCode(200);
	}
	@Test
	@Order(8)
	void saveBook() {
		Book t=new Book();
		t.setId(24L);
		t.setTitle("eunice");
		t.setAuthor("eunice");
		t.setCategory("Action");
		t.setAccessnumber("56782835331");
		
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.body(t)
		.when()
		.post("http://localhost:5002/addbook")
		.then()
		.assertThat().statusCode(200);
	}
	@Test
	@Order(9)
	void deleteBookById() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.delete("http://localhost:5002/book/22")
		.then()
		.assertThat().statusCode(200);
	}
}
