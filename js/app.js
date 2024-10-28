/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/
                   
const bikeWeigth = []
const raceBikes = [
    {
         nome: 'Bianchi',
         peso: 15
    },

    {
        nome: 'Look',
        peso: 8
    },

    {
        nome: 'Pinarello',
        peso: 6
    },

    {
        nome: 'Colnago',
        peso: 7 
    }
]



let lighterBike = raceBikes[0]

for (let i = 0; i < raceBikes.length; i++) {
    const currentBike = raceBikes[i];
    if (currentBike.peso < lighterBike.peso) {
        lighterBike = currentBike
    }
    
    }

    console.log(lighterBike)
   

    

/*Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

// Creiamo un array di oggetti
const NewArrayTeams = []
const teams = [
    {
        nome: 'Napoli',
        puntiFatti: 0, 
        falliSubiti: 0  
   },

   {
       nome: 'Juventus',
       puntiFatti: 0, 
       falliSubiti: 0  
   },

   {
       nome: 'Milan',
       puntiFatti: 0, 
       falliSubiti: 0 
   },

   {
       nome: 'Inter',
       puntiFatti: 0, 
       falliSubiti: 0  
   }
]

// Aggiungiamo casialmente punti e falli subiti

// teams.forEach(team => {
//     puntiFatti = randomPointsAndFouls()
//     falliSubiti = randomPointsAndFouls()
// })

teams[0].puntiFatti = randomPointsAndFouls() 
teams[0].falliSubiti = randomPointsAndFouls()

teams[1].puntiFatti = randomPointsAndFouls() 
teams[1].falliSubiti = randomPointsAndFouls()

teams[2].puntiFatti = randomPointsAndFouls() 
teams[2].falliSubiti = randomPointsAndFouls()

teams[3].puntiFatti = randomPointsAndFouls() 
teams[3].falliSubiti = randomPointsAndFouls()

//Selezionare solo nome e falli subiti da ogni oggetto

for (let i = 0; i < teams.length; i++) {
    const currentElement = teams[i];
    
    teams.forEach(team => {
        delete team['puntiFatti']
    })

    NewArrayTeams.push(currentElement)
}

console.log(NewArrayTeams)

//

/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/

function sliceArray(elements, start, end) {

    start = Math.max(start,0)

    //if(start < 0) {
        //start = 0
    //}

    end = Math.min(end, elements.length)

    // if(end > elements.length) {
    //     end = elements.length
    // }

    const result = []

    for (let i = start; i < end; i++) {
        const el = elements[i];

        result.push(el)
        
    }
        return result
}

const numbers = [1, 3, 4, 5, 6, 9, 3, 4]

const newNumbers = sliceArray(numbers, 2, 6)
console.log(newNumbers)
//Funzioni

function randomPointsAndFouls() {
    return Math.floor(Math.random() * (10 - 0 + 1) + 0)
}