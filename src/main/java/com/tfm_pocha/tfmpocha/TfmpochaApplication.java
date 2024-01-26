package com.tfm_pocha.tfmpocha;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.tfm_pocha.tfmpocha")
@EntityScan(basePackages = "com.tfm_pocha.tfmpocha.Models")
public class TfmpochaApplication {

	public static void main(String[] args) {
		SpringApplication.run(TfmpochaApplication.class, args);
	}

}
