package com.tfm_pocha.tfmpocha;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.tfm_pocha.tfmpocha")
@EntityScan(basePackages = "com.tfm_pocha.tfmpocha.Models")
public class TfmpochaApplication  extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(TfmpochaApplication.class, args);
	}
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(TfmpochaApplication.class);
	}
}
