package com.bjr.calculadora.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bjr.calculadora.servicio.CalServicio;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/calculadora")
public class CalControlador {

    private final CalServicio calServicio;

    @Autowired
    public CalControlador(CalServicio calServicio){
        this.calServicio = calServicio;
    }

    @GetMapping("/operacion")
    public double operacion(@RequestParam double primerNumero, @RequestParam double segundoNumero, @RequestParam String operador){
        return calServicio.operaciones(primerNumero, segundoNumero, operador);
    }
    
}
