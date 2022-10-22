const conteiner=document.querySelector('.conteiner')
const iniciox=document.querySelector('#iniciox')
const inicioy=document.querySelector('#inicioy')
const destinox=document.querySelector('#destinox')
const destinoy=document.querySelector('#destinoy')
const boton=document.querySelector('#button')
const mercante=document.querySelector('#mercantes')
const fast=document.querySelector('#fast')
const ligera=document.querySelector('#liviana')
const pesada=document.querySelector('#pesada')
const portas=document.querySelector('#portas')
const nivel1=document.querySelector('#nivel1')
const nivel2=document.querySelector('#nivel2')
const nivel3=document.querySelector('#nivel3')
const nivel4=document.querySelector('#nivel4')
const nivel5=document.querySelector('#nivel5')
const result=document.querySelector('.result')
const form=document.querySelector('.form')

const velMercante=10.4164
const velFlotaLigera=5.5554
const velFlotaRapida=8.3331
const velFlotaPesada=4.1665
const velPortas=2.7777


let dias=0
let horas=0
let minutos=0 
let segundos=0



function calcular(){
    let num1=Number(iniciox.value)
    let num2=Number(inicioy.value)
    let num3=Number(destinox.value)
    let num4=Number(destinoy.value)
        if(num1!='' && num2!='' && num3!='' && num4!=''){
            if(num1>0 && num1<100 && num2>0 && num2<100 && num3>0 && num3<100 && num4>0 && num4<100){
                if(Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3) &&Number.isInteger(num4)){
                    let a=num3-num1
                    let b=num4-num2
                    let distancia=(Math.sqrt((a*a)+(b*b)))*10000
                    if(distancia==0){
                        distancia=4999.872
                    }
                    let tiempo
                    let velocidad=0
                
                    if(mercante.checked){
                        velocidad=velMercante
                    }
                    if(fast.checked){
                        velocidad=velFlotaRapida
                    }
                    if(ligera.checked){
                        velocidad=velFlotaLigera
                    }
                    if(pesada.checked){
                        velocidad=velFlotaPesada
                    }
                    if(portas.checked){
                        velocidad=velPortas
                    }
                    
                    if(nivel1.checked){
                        velocidad=velocidad*1.1
                    }
                    if(nivel2.checked){
                        velocidad=velocidad*1.3
                    }
                    if(nivel3.checked){
                        velocidad=velocidad*1.5
                    }
                    if(nivel4.checked){
                        velocidad=velocidad*1.7
                    }
                    if(nivel5.checked){
                        velocidad=velocidad*2
                    }
                    if(velocidad!=0){

                        tiempo= (distancia/velocidad)

                        if (tiempo>=84400){
                            dias=Math.floor(tiempo/84400)
                            tiempo=tiempo%84400
                        }
                        if(tiempo>=3600){
                            horas=Math.floor(tiempo/3600)
                            tiempo=tiempo%3600
                        }
                        if(tiempo>=60){
                            minutos=Math.floor(tiempo/60)
                            tiempo=tiempo%60
                        }
                        if(tiempo!=0){
                            segundos=Math.floor(tiempo)
                        }
                        

                        let mostrarTiempo=" El tiempo de viaje es: "
                        if(dias!=0){
                            mostrarTiempo=mostrarTiempo+dias+" D "
                        }
                        if(horas!=0){
                            mostrarTiempo=mostrarTiempo+horas+" h "
                        }
                        mostrarTiempo=mostrarTiempo+minutos+" m "+segundos+" s"
                        result.innerHTML=mostrarTiempo
                        iniciox.value=null
                        inicioy.value=null
                        destinox.value=null
                        destinoy.value=null
                        mercante.checked=false
                        fast.checked=false
                        ligera.checked=false
                        pesada.checked=false
                        portas.checked=false
                        nivel1.checked=false
                        nivel2.checked=false
                        nivel3.checked=false
                        nivel4.checked=false
                        nivel5.checked=false
                        tiempo=0
                        distancia=0
                        velocidad=0
                    }
                    else{
                        alert("Debe seleccionar un tipo de embarcacion")
                    }
                }
                else{
                    alert("Solo acepta numeros enteros")
                }
            }
            else{
                alert("Las coordenadas deben estar entre 1-99")
        }
    }
    else{
    alert("Debe llenar todas las coordenadas")
    }
}



boton.addEventListener('click', calcular)

