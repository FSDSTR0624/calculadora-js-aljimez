
  
  function clearDisplay(){
    document.getElementById("display").value = "";
  }
  function pwoff() {
    document.getElementById("display").value = "POWEROFF";
    const buttoner7 = document.getElementById('buttoner7');
    buttoner7.disabled = true; 
    const buttoner8 = document.getElementById('buttoner8');
    buttoner8.disabled = true; 
    const buttoner9 = document.getElementById('buttoner9');
    buttoner9.disabled = true;
    const buttoner4 = document.getElementById('buttoner4');
    buttoner4.disabled = true;
    const buttoner5 = document.getElementById('buttoner5');
    buttoner5.disabled = true;
    const buttoner6 = document.getElementById('buttoner6');
    buttoner6.disabled = true;
    const buttoner1 = document.getElementById('buttoner1');
    buttoner1.disabled = true;
    const buttoner2 = document.getElementById('buttoner2');
    buttoner2.disabled = true;
    const buttoner3 = document.getElementById('buttoner3');
    buttoner3.disabled = true;
    const buttonerC = document.getElementById('buttonerC');
    buttonerC.disabled = true; 
    const buttoner0 = document.getElementById('buttoner0');
    buttoner0.disabled = true; 
    const buttoner = document.getElementById('buttoner+');
    buttoner.disabled = true; 
    const buttoneres = document.getElementById('buttoner-');
    buttoneres.disabled = true;
    const buttonermul = document.getElementById('buttonermul');
    buttonermul.disabled = true;
    const buttonerdiv = document.getElementById('buttonerdiv');
    buttonerdiv.disabled = true;
    const buttonersame = document.getElementById('buttoner=');
    buttonersame.disabled = true;



  }
  function pwron() {
    document.getElementById("display").value = "";
    const buttoner7 = document.getElementById('buttoner7');
    buttoner7.disabled = false; 
    const buttoner8 = document.getElementById('buttoner8');
    buttoner8.disabled = false; 
    const buttoner9 = document.getElementById('buttoner9');
    buttoner9.disabled = false;
    const buttoner4 = document.getElementById('buttoner4');
    buttoner4.disabled = false;
    const buttoner5 = document.getElementById('buttoner5');
    buttoner5.disabled = false;
    const buttoner6 = document.getElementById('buttoner6');
    buttoner6.disabled = false;
    const buttoner1 = document.getElementById('buttoner1');
    buttoner1.disabled = false;
    const buttoner2 = document.getElementById('buttoner2');
    buttoner2.disabled = false;
    const buttoner3 = document.getElementById('buttoner3');
    buttoner3.disabled = false;
    const buttonerC = document.getElementById('buttonerC');
    buttonerC.disabled = false; 
    const buttoner0 = document.getElementById('buttoner0');
    buttoner0.disabled = false; 
    const buttoner = document.getElementById('buttoner+');
    buttoner.disabled = false; 
    const buttoneres = document.getElementById('buttoner-');
    buttoneres.disabled = false;
    const buttonermul = document.getElementById('buttonermul');
    buttonermul.disabled = false;
    const buttonerdiv = document.getElementById('buttonerdiv');
    buttonerdiv.disabled = false;
    const buttonersame = document.getElementById('buttoner=');
    buttonersame.disabled = false;
  }
  // Función principal que llama a las operaciones
  function calculadora(num1, num2, operacion) {
    switch (operacion) {
      case "+":
        return add(num1, num2);
      case "-":
        return substract(num1, num2);
      case "*":
        return product(num1, num2);
      case "/":
        return division(num1, num2);
      default:
        throw new Error("Operación no válida");
    }
  }

function appendCharacter(character) {
    document.getElementById('display').value += character;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}