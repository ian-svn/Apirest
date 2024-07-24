package com.crud.api.controllers;

import com.crud.api.models.UserModel;
import com.crud.api.services.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Optional;

// https://

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(path = "/getUsers")
    public ArrayList<UserModel> getUsers(){
        return this.userService.getUsers();
    }

    @GetMapping(path = "/getUser/{id}")
    public Optional<UserModel> getUsers(@PathVariable Long id){
        return this.userService.getById(id);
    }

    @PostMapping(path = "/addUser")
    public UserModel saveUser(@RequestBody UserModel user){
        return this.userService.saveUser(user);
    }
    /*

    {
    "firstName":"ian",
    "lastName":"apellido",
    "email": "iansan@gmail.com"
    }

     */

    @PutMapping(path = "/modifyUser/{id}")
    public UserModel updateUserById(@RequestBody UserModel request, @PathVariable Long id) {
        return this.userService.updateById(request,id);
    }

    @DeleteMapping(path = "/deleteUser/{id}")
    public boolean deleteById(@PathVariable Long id) {
        boolean ok = this.userService.deleteUser(id);
        if(ok){
            ok=true;
        } else {
            ok = false;
        }
        return ok;

        /*
        Boolean ok = this.userService.deleteUser(id);
        if(ok){
            return ResponseEntity.ok("User " + id + " deleted correctly.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found. ");
        }
        */
    }

}
