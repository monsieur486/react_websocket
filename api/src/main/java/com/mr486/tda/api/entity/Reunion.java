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
    private String nom;
    private Integer clics;

    public Reunion(String nom, Integer clics) {
        this.nom = nom;
        this.clics = clics;
    }

    public String toJson(){
        final GsonBuilder builder = new GsonBuilder();
        final Gson gson = builder.create();

        return gson.toJson(ApiApplication.reunion);
    }
}
