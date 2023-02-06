package com.mr486.tda.api.entity;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mr486.tda.api.ApiApplication;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@Component
@NoArgsConstructor
public class Reunion {
    private String name;
    private Integer age;

    public Reunion(String name, Integer age) {
        this.name = name;
        this.age = age;
    }

    public String toJson(){
        final GsonBuilder builder = new GsonBuilder();
        final Gson gson = builder.create();

        return gson.toJson(ApiApplication.reunion);
    }
}
