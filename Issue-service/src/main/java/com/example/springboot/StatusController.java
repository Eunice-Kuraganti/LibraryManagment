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
import com.example.springboot.StatusRepository;
@RestController
@CrossOrigin("*")
public class StatusController {
    
	@Autowired
    private StatusRepository statusRepository;
    
    @GetMapping("/getStatus")
    List<Status> getStatus(){
        return statusRepository.findAll();
    }
    @PostMapping("/postStatus")
    Status postStatus(@RequestBody Status postStatus) {
        return statusRepository.save(postStatus);
    }
    @DeleteMapping("/cart/{id}")
    public void deleteBookById(@PathVariable Integer id){
        statusRepository.deleteById(id);
    }
}