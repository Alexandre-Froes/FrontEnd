const dataAtual = new Date();

var diaSemana = dataAtual.getDay(); 

switch(diaSemana) {
    case 0:
        document.write("Hoje é domingo!");
    break;

    case 1:
        document.write("Hoje é segunda!");
    break;

    case 2:
        document.write("Hoje é terça!");
    break;

    case 3:
        document.write("Hoje é quarta!");
    break;

    case 4:
        document.write("Hoje é quinta!");
    break;
        
    case 5:
        document.write("Hoje é sexta!");
    break;

    default:
        document.write("Hoje é sábado!");
    break;
    }