# Usa una imagen base con OpenJDK 11 y Maven
FROM maven:3.8.4-openjdk-11 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto al directorio de trabajo
COPY . /app

# Ejecuta Maven para construir el proyecto
RUN mvn clean install

# Crea una nueva imagen basada en OpenJDK 11
FROM adoptopenjdk:11-jre-hotspot

# Exponer el puerto que utilizará la aplicación
EXPOSE 8080

# Copiar el archivo JAR construido desde la etapa anterior
COPY --from=build /app/target/tfmpocha-0.0.1-SNAPSHOT.jar /app/app.jar

# Establecer el punto de entrada para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "/app/app.jar"]