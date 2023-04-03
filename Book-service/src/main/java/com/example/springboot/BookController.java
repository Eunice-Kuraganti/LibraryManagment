package com.example.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import ch.qos.logback.core.model.Model;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class BookController {

    @Autowired
    private BookRepository bookRepository;
   
    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }
    @GetMapping("/book/{id}")
    public Book getBookById(@PathVariable long id){
        return bookRepository.findById(id);
    }
    @PostMapping("/addbook")
    public Book saveBook(@RequestBody Book book){
        return bookRepository.save(book);
    }
    @DeleteMapping("/book/{id}")
    public void deleteBookById(@PathVariable long id){
        bookRepository.deleteById(id);
    }
    @GetMapping("/{accessnumber}")
    public List<Book> getBookByAccessnumber(@PathVariable String accessnumber) {
     return bookRepository.findByAccessnumber(accessnumber);
    }
    @GetMapping("/author/{authorName}")
    public List<Book> getBookByAuthor(@PathVariable String authorName) {
     return bookRepository.findByAuthor(authorName);
    }
    @GetMapping("/category/{categoryName}")
    public List<Book> getBookByCategory(@PathVariable String categoryName) {
     return bookRepository.findByCategory(categoryName);
    }
    @GetMapping("/keyword/{keywordName}")
    public List<Book> findAll(@PathVariable String keywordName) {
        return bookRepository.search(keywordName);
    }
	@GetMapping("/title/{titleName}")
	public List<Book> getBookByTitle(@PathVariable String titleName){
	    return bookRepository.findByTitle(titleName);
	   
	}
	
}
