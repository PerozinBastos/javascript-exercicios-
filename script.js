function verificar() {
    var data = new Date()   // new Data() função pega datas //
    var ano = data.getFullYear()
    var anodoform = document.querySelector('#txtano')         //# porque é um ID//
    var resultado = document.querySelector('.resultado')     //. porque é uma Classe, vou usar o InnerHTML//

    if (anodoform.value == 0 || Number(anodoform.value) > ano) {
        window.alert('Verificar dos dados preenchidos.')  
    }   else {
        var sexodoform = document.getElementsByName('radsex')
        var idade = ano - Number(anodoform.value)          //number para garantir que o resultado do input venha como numero//
        var genero = ''
        var img = document.createElement('img')          //cria uma 'div' de imagem //
        img.setAttribute('id', 'foto')                  //cria um id//
            if (sexodoform[0].checked) {                //.checked para referenciar ao selecionado do input radio, entra [] a posição do radio //
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21 ){
            img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 50) {
            img.setAttribute('src', 'foto-bebe-m.png')
            } else {
            img.setAttribute('src', 'foto-bebe-m.png')
            }

        } else if (sexodoform[1].checked){
            genero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                //criança
                } else if (idade < 21 ){
                //jovem
                } else if (idade < 50) {
                //adulto
                } else {
                // o que sobrou, idoso
                }
        }
        
                 resultado.innerHTML= `Detectamos ${genero} com ${idade} anos.` // escreve no HTML //
                 resultado.style.textAlign = 'center'
                 resultado.appendChild(img)  //aparecer a div criada de img pelo js//
    }
     }



