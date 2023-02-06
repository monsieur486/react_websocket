package com.mr486.tda.api.entity;

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
}
