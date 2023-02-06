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

        final GsonBuilder builder = new GsonBuilder();
        final Gson gson = builder.create();

        return gson.toJson(ApiApplication.reunion);
    }

    @GetMapping("/data/plus")
    public String addData() {

        Integer age = ApiApplication.reunion.getAge();

        ApiApplication.reunion.setName("En cours");
        ApiApplication.reunion.setAge(age + 1);

        return "{ 'ajout': true}";
    }

    @GetMapping("/data/moins")
    public String removeData() {

        if(ApiApplication.reunion.getAge()>0){
            Integer age = ApiApplication.reunion.getAge()-1;
            ApiApplication.reunion.setAge(age);
            return "{ 'retrait': true}";
        } else return "{ 'retrait': false}";

    }

    @GetMapping("/data/raz")
    public String razData() {
        ApiApplication.reunion.setName("Vide");
        ApiApplication.reunion.setAge(0);
        return "{ 'raz': true}";
    }
}
