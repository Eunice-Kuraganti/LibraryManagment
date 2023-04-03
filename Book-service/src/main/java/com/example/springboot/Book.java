package com.example.springboot;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;
    @Column(name = "category")
    private String category;
    @Column(name = "accessnumber")
    private String accessnumber;
    
    public Book() {}

    public Book(String title, String author, int rating, String accessnumber) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.accessnumber = accessnumber;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }


    public void setTitle(String title) {
        this.title = title;
    }
    public String getCategory() {
        return category;
    }


    public void setCategory(String category) {
        this.category = category;
    }

    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAccessnumber() {
        return accessnumber;
    }

    public void setAccessnumber(String accessnumber) {
        this.accessnumber = accessnumber;
    }
}