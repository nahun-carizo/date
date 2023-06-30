function cantidadDiasAnioNuevo(fecha) {
    const anioNuevo = new Date(fecha.getFullYear() + 1, 0, 1);
    const diferencia = Math.floor((anioNuevo - fecha) / (1000 * 60 * 60 * 24));
    return diferencia;
  }
  
  function cantidadDiasCatar2022() {
    const fechaCampeonato = new Date(2022, 11, 18);
    const fechaActual = new Date();
    const diferencia = Math.floor((fechaActual - fechaCampeonato) / (1000 * 60 * 60 * 24));
    return diferencia;
  }
  
  function calcularAniosCompletos(fecha1, fecha2) {
    const diferencia = fecha2.getFullYear() - fecha1.getFullYear();
    const fecha1CumpleAnios = new Date(fecha2.getFullYear(), fecha1.getMonth(), fecha1.getDate());
    
    if (fecha2 < fecha1CumpleAnios) {
      return diferencia - 1;
    } else {
      return diferencia;
    }
  }
  
  function esDiaLaborable(fecha) {
    const dia = fecha.getDay();
    return dia >= 1 && dia <= 5;
  }
  
  // Obtener fechas ingresadas por el usuario
  const fechaInput = prompt("Ingrese una fecha (YYYY-MM-DD):");
  const fecha = new Date(fechaInput);
  
  const fecha1Input = prompt("Ingrese la primera fecha (YYYY-MM-DD):");
  const fecha1 = new Date(fecha1Input);
  
  const fecha2Input = prompt("Ingrese la segunda fecha (YYYY-MM-DD):");
  const fecha2 = new Date(fecha2Input);
  
  console.log("Días restantes para Año Nuevo:", cantidadDiasAnioNuevo(fecha));
  console.log("Días desde el Campeonato Mundial de Fútbol 2022:", cantidadDiasCatar2022(fecha));
  console.log("Años completos transcurridos entre las fechas:", calcularAniosCompletos(fecha1, fecha2));
  console.log("¿Es día laborable?", esDiaLaborable(fecha));