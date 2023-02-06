package com.mr486.tda.api.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mr486.tda.api.ApiApplication;
import org.springframework.data.relational.core.sql.In;
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

        final GsonBuilder builder = new GsonBuilder();
        final Gson gson = builder.create();

        return gson.toJson(ApiApplication.reunion);
    }
}
