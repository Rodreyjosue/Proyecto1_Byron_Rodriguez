package com.bjr.calculadora.servicio;

import org.springframework.stereotype.Service;

@Service
public class CalServicio {
    
    public double operaciones(double primerNumero, double segundoNumero, String operador){
       switch (operador) {
        case "+": return primerNumero+segundoNumero;
        case "-": return primerNumero-segundoNumero;
        case "*": return primerNumero*segundoNumero;
        case "/": 
            if (segundoNumero==0) {
                throw new IllegalArgumentException("Division entre 0");
            }
            return primerNumero/segundoNumero; 
        default:
            throw new IllegalArgumentException("Operador incorrecto )(+)");
       }
    }
}


