package com.tfm_pocha.tfmpocha.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tfm_pocha.tfmpocha.Models.Imagen;

@Repository
public interface ImagenRepository extends JpaRepository<Imagen, Long> {
	List<Imagen> getImagenByName(String name);
}
