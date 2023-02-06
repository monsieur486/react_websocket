package com.mr486.tda.api.controller;

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

        Integer age = ApiApplication.reunion.getClics();

        ApiApplication.reunion.setNom("En cours");
        ApiApplication.reunion.setClics(age + 1);

        return ApiApplication.reunion.toJson();
    }

    @GetMapping("/data/moins")
    public String removeData() {

        if(ApiApplication.reunion.getClics()>0){
            Integer age = ApiApplication.reunion.getClics()-1;
            ApiApplication.reunion.setClics(age);
        }
        return ApiApplication.reunion.toJson();

    }
    @GetMapping("/data/raz")
    public String razData() {
        ApiApplication.reunion.setNom("");
        ApiApplication.reunion.setClics(0);
        return ApiApplication.reunion.toJson();
    }
}
