function calcularArea() {
  const A = parseFloat(document.getElementById("alturaA").value);
  const C = parseFloat(document.getElementById("alturaC").value);
  const B = parseFloat(document.getElementById("baseB").value);

  if (A > 0 && B > 0 && C > 0) {
    const area = ((A + C) / 2) * B;
    alert(`El área del terreno es: ${area.toFixed(2)} m²`);
  } else {
    alert("Por favor, ingrese valores mayores a cero.");
  }
}