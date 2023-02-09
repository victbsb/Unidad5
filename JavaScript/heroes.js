const heroes = [
    {name: 'Spider-Man'},
    {name: 'Thor'},
    {name: 'Black Panther'},
    {name: 'Captain Marvel'},
    {name: 'Silver Surfer'},
];

const index = [0,1,2,3,4]

var heroes2 = heroes.map(function(heroe,index){
        return {id: index, hero: heroe.name}});
  
console.log('Héroes con identificadores', heroes2)

//Para hacerlo con la flecha: ()=>)
//const heroes3 =heroes.map(heroe, index => ({id: index, heroe: heroe.name}))