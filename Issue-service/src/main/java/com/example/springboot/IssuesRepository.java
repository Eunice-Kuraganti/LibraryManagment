package com.example.springboot;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IssuesRepository extends JpaRepository<Issues, Integer>{
}
