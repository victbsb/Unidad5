const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: false},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: true},
    {username: 'sergio58', age: 26, premium: true},
];

hi = prompt("Hola, introduce tu nombre de usuario")
noPremium = [];

const premium = users
    .filter(function(user){
        if (users.premium == true){
            console.log(`${hi}, tu usuario es de tipo premium`)
        };});
    users.map(function(user){
                noPremium.push(user)
            });
    
console.log(premium);


/*Al parecer no pedía lo de la diapo, sino que apareciese en consola los datos de cada objeto del array

users.map(function(user)){
    console.log('El usuario ' + user.username + ' tiene ' +  user.age + ' años');

const noPremium = users.filter(function(user)){
    return user.premium == false
}
})
}

console.log('noPremium', noPremium);
*/

