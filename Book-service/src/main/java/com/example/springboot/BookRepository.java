package com.example.springboot;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findAll();
    Book findById(long id);
	List<Book> findByAccessnumber(String accessnumber);
	List<Book> findByAuthor(String author);
	List<Book> findByTitle(String title);
    @Query("SELECT p FROM Book p WHERE p.author LIKE %?1%"
            + " OR p.title LIKE %?1%"
            + " OR p.accessnumber LIKE %?1%"
            + " OR CONCAT(p.id, '') LIKE %?1%")
	public List<Book> search(String keyword);
	List<Book> findByCategory(String categoryName);
}
