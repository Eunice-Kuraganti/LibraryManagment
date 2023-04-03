package com.example.springboot;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.springboot.IssuesRepository;
@RestController
@CrossOrigin("*")
public class IssueController {
    
    @Autowired
    private IssuesRepository issuesRepository;
    @GetMapping("/getIssues")
    List<Issues> getIssuesRequest(){
        return issuesRepository.findAll();
    }
    
    @PostMapping("/addIssue")
    Issues newIssuesRequest(@RequestBody Issues newIssuesRequest) {
        return issuesRepository.save(newIssuesRequest);
    }
    @DeleteMapping("/issue/{id}")
    public void deleteBookById(@PathVariable Integer id){
        issuesRepository.deleteById(id);
    }
    }
