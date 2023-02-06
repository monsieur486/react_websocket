package com.mr486.tda.api.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mr486.tda.api.ApiApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces="application/json")
@CrossOrigin(origins="*")
public class ApiController {
    @GetMapping("/data")
    public String getData() {
        return ApiApplication.reunion.toJson();
    }

    @GetMapping("/data/plus")
    public String addData() {

        Integer age = ApiApplication.reunion.getAge();

        ApiApplication.reunion.setName("En cours");
        ApiApplication.reunion.setAge(age + 1);

        return ApiApplication.reunion.toJson();
    }

    @GetMapping("/data/moins")
    public String removeData() {

        if(ApiApplication.reunion.getAge()>0){
            Integer age = ApiApplication.reunion.getAge()-1;
            ApiApplication.reunion.setAge(age);
        }
        return ApiApplication.reunion.toJson();

    }
    @GetMapping("/data/raz")
    public String razData() {
        ApiApplication.reunion.setName("");
        ApiApplication.reunion.setAge(0);
        return ApiApplication.reunion.toJson();
    }
}
