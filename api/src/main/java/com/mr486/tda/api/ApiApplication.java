package com.mr486.tda.api;

import com.mr486.tda.api.entity.Reunion;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiApplication {

	public static Reunion reunion = new Reunion("Nom", 5);
	public static void main(String[] args) {

		SpringApplication.run(ApiApplication.class, args);
	}

}
