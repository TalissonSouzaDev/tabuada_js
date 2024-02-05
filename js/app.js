const btnsubmit =  document.querySelector("#submit");
const numero =  document.querySelector("#numero");
const operacao =  document.querySelector("#operacao");
const tm_tabuada =  document.querySelector("#tm_tabuada");
let  span =  document.getElementById("container-tabuada")


btnsubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    span.style.visibility = "visible"
    span.innerHTML = ""
    Tabuada(tm_tabuada.value,numero.value,operacao.value)

})


async function Tabuada(tamanhotab,numerocalc,operacao) 
{
    switch(operacao)
    {
        case '+':
             WriteLineOption(tamanhotab,numerocalc,operacao)
            break
        case '-':
            WriteLineOption(tamanhotab,numerocalc,operacao)
            break
        case 'x':
            WriteLineOption(tamanhotab,numerocalc,operacao)
            break
        case '/':
            WriteLineOption(tamanhotab,numerocalc,operacao)
            break
        default:
            alert("Não consegui indentifica seu pedido")
    }
}

    function WriteLineOption(tamanhotab,numerocalc,operacao)
    {
        for(i = 0; i < tamanhotab; i++)
        {
            let operation =  0;
           if(operacao == '+')
           {
            operation = (i+1) + parseFloat(numerocalc)
           }
           else if(operacao == '-')
           {
            operation =  (i+1) - parseFloat(numerocalc)
           }
           else if(operacao == 'x')
           {
            operation = (i+1) * parseFloat(numerocalc)

           }
           else if(operacao == '/')
           {
            operation = parseFloat(numerocalc) / (i+1) 
         
          
           }
            
            span.innerHTML += `<span>${(i+1)}  ${operacao} ${numerocalc} = ${operacao == '/' ? operation.toFixed(1) : operation} </span>`

        }
    }
