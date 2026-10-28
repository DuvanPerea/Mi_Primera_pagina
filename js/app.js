/*const aforos=document.getElementById("aforo");
const aforofuera=document.getElementById("cantidad");

aforos.addEventListener("input", function() { 
    let aforo= Number(aforos.value);
    if (aforo<20){ aforofuera.textContent = "Aforo bajo";
    } else if (aforo<50){aforofuera.textContent="Aforo medio";}
    else{aforofuera.textContent="Aforo alto"}
});*/

const transporte=document.getElementById("transporte");
const respuesta=document.getElementById("respuesta");
const imagenGusto=document.getElementById("imagengusto")

const entrada1=document.getElementById("entrada");
const respuesta1=document.getElementById("respuestaNumero");

const boton=document.getElementById("boton");

boton.addEventListener("click", function(){
    alert("En que universidad estudio?")
})



entrada1.addEventListener("input", function () {
    let numero=Number(entrada1.value);

    if (numero<42){respuesta1.textContent="El numero es mayor";

    }
    else if(numero>42){respuesta1.textContent="El numero es menor";

    }
    else{respuesta1.textContent="¡Felicidades! Acertaste";}

});

transporte.addEventListener("change", function () {
    let opcion=transporte.value;
    if (opcion==="patinaje"){respuesta.textContent = "Me gusta mucho el patinaje de velocidad; lo entrené por 5 años como deportista de alto rendimiento.";
        imagenGusto.src ="https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/uy01dhb4idwszhjfddch";
        imagenGusto.style.display="inline-block";
    } else if (opcion==="taekwondo"){respuesta.textContent ="Por un amigo de la universidad conocí el taekwondo; me gustó su forma de combate, sus entrenamientos dinámicos y todas sus reglas.";
        imagenGusto.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrE_R556e-dSxxJQRHKkVyBRQnU_vlrJZK8Yaqsbb-w&s=10";
        imagenGusto.style.display="inline-block";
    } else if (opcion==="tecno"){respuesta.textContent="Me gusta esta música ya que es bastante movida, por sus sonidos y ritmos; también la forma en que se baila es algo bastante dinámico.";
        imagenGusto.src="https://loqueva.com/wp-content/uploads/2023/08/Hard-Techno-musica-electronica-1-1.jpg";
        imagenGusto.style.display="inline-block";
    } else {respuesta.textContent="Selecciona una de las siguientes opciones:";
        imagenGusto.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWLZcRBiPgu9qdXzicIFhtDOoFJlwzDcfT0HuWjFlRg&s=10";
        imagenGusto.style.display="inline-block";
    }      
    
});
