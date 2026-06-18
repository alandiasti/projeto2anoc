const alunos = [
    {nome:"Ayrla", foto:"/img/Ayrla.webp"},
    {nome:"José Francisco", foto:"/img/jose.jpeg"},
    {nome:"Kaio", foto:"/img/Kaio.webp"},
    {nome:"Luanna", foto:"/img/luanna.jpeg"},
    {nome:"Maria Lúcia", foto:"/img/Maria_L.webp"},
    {nome:"Maria Clara", foto:"/img/MariaC.jpg"},
    {nome:"Maria Rita", foto:"/img/MariaR.jpeg"},
    {nome:"Lorena", foto:"/img/lorena.jpeg"},
    {nome:"Rebeca", foto:"/img/Rebeca.jpg"},
    {nome:"Sara Maria", foto:"/img/sara.jpeg"},
    {nome:"Taynara", foto:"/img/Taynara.jpg"},
    {nome:"Victor Emanuel", foto:"/img/Victor.jpeg"},
    {nome:"Davi", foto:"/img/Davi.png"},
    {nome:"Fabiola", foto:"/img/Fabiola.jpeg"},
    {nome:"Francisco Vitor", foto:"/img/FranciscoV.jpeg"},
    {nome:"Geovana", foto:"/img/Geovanna.jpeg"},
    {nome:"João Pedro", foto:"/img/JoaoP.jpeg"},
    {nome:"Kauane", foto:"/img/Kauane.jpeg"},
    {nome:"Isabelly", foto:"/img/isabely.jpeg"},
    {nome:"Isis", foto:"/img/isis.jpeg"},
    {nome:"Isac", foto:"/img/isaque.jpeg"},
    {nome:"João Victor", foto:"/img/JoaoV.jpeg"},
    {nome:"Luis", foto:"/img/Luis.jpg"},
    {nome:"Manoel Vitor", foto:"/img/ManoelV.jpeg"},
    {nome:"Michael", foto:"/img/Michael.jpeg"},
    {nome:"Mikaelly", foto:"/img/Mikaely.jpeg"},
    {nome:"Andrelane", foto:"/img/Andrelane.jpeg"},
    {nome:"João Inácio", foto:"/img/JoãoI.jpeg"},
    {nome:"Douglas", foto:"/img/Douglas.jpeg"},
    {nome:"Sarah Nauhanne", foto:"/img/SarahN.jpeg"},
    {nome:"Talison", foto:"/img/Talison.jpeg"},
    {nome:"Willyam", foto:"/img/Wiliam.jpeg"},
];

const galeria = document.getElementById("galeria");

alunos.forEach(aluno=>{
    galeria.innerHTML += `
        <div class="card">
            <img src="${aluno.foto}" alt="${aluno.nome}">
            <p>${aluno.nome}</p>
        </div>
    `;
});