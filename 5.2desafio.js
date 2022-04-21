let data = [
    {
      titulo: "us",
      genero: "terror",
      ano: "2019", 
    },
    {
      titulo: "transformers: O Lado Oculto da Lua",
      genero: ["ação", "sci-fi"],
      ano: "2011", 
    },
    {
      titulo: "moonfall - ameaça lunar",
      genero: ['Aventura', "sci-fi"], // array de gêneros
      ano: "2022", 
    },
    {
      titulo: "casa gucci",
      genero: "drama", // é um string
      ano: "2021", 
    },
    {
      titulo: "encanto",
      genero: ["animação", "musical"],
      ano: "2021", 
    },
    {
      titulo: "Demon Slayer - Mugen Train",
      genero: ["ação", "fantasia"],
      ano: "2019", 
    },
    {
      titulo: "O Último Suspiro",
      genero: ["drama", "sci-fi"],
      ano: "2019", 
    },
    {
      titulo: "Suspiria",
      genero: "terror",
      ano: "1977", 
    },
    {
      titulo: "Corpo Elétrico",
      genero: ["drama", "ficção"],
      ano: "2017", 
    },
    {
      titulo: "Amour",
      genero: ["drama", "romance"],
      ano: "2012", 
    },
    {
      titulo: "Ninho de Musaranho",
      genero: "terror",
      ano: "2014", 
    },
    {
      titulo: "Colonia",
      genero: "suspense",
      ano: "2015", 
    },
    {
      titulo: "Homem-Aranha: Sem Volta para Casa",
      genero: ["ação", "aventura"],
      ano: "2021", 
    }]
  
    busca cliente1 = "Suspense";
    busca cliente2 = "Corpo Elétrico"
    busca cliente3 = "Homem-Aranha: Sem Volta para Casa"
    busca cliente4 = "sci-fi" 
    busca cliente5 = "romance"

// O que eu tinha pensando antes da monitoria para tirar dúvida (18/abril/2022):
  // console.log(data.genero["terror"])    
  
  //   const filtrarPorTitulo = data.filter((titulo) = "us" )
  //   console.log(filtrarPorTitulo)

//O que fizemos durante a monitoria para tirar dúvidas (19/abril/2022):
    // criar uma função que vá nessa lista do banco de dadas e que traga essa info.
    // escolher um método para percorrer a array, precisa ficar dentro do escopo da função
    // Usar o find? Porque cada objeto só vai ter um título único, então pode encontrar o primeiro e ser só aquele.
    // Usar o filter pra encontrar por gênero, porque vai ser mais de um.

    // let cliente1 = "Suspense"; // genero 
    // let cliente2 = "Corpo Elétrico" //titulo
    // let cliente3 = "Homem-Aranha: Sem Volta para Casa" //titulo
    // let cliente4 = "sci-fi" //genero
    // let cliente5 = "romance" //genero

    // function buscarPorTitulo(titulo){
    //   const encontrarTitulo = data.find((element) => element.titulo == titulo)

    //   return console.log (encontrarTitulo)
    // }
    // buscarPorTitulo(cliente2) // tem que ver se a cliente é genero ou titulo; pra ver em qual função colocá-la
    // buscarPorTitulo(cliente3)

    // function buscarPorGenero(genero){
    //   const encontrarTitulo = data.filter((element) => element.genero.includes(genero))

    //   return console.log (encontrarTitulo)
    // }

    // buscarPorGenero (cliente1)
    // buscarPorGenero (cliente4)
    // buscarPorGenero (cliente5)

    //filtrar por nome do filme (outra forma que a Carolaine fez)
    // const filtrarPorTitulo = data.filter((filme) => filme.titulo == 'us');
    // console.log(filtrarPorTitulo);

    // Semana 4 aula 2 - 20/abril/2022