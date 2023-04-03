test('conhecendo as principais assertivas do jest', ()=>{

    let number = null;
    //verificando se o valor esta vazio
    expect(number).toBeNull();
    number = 10
    //verificando se o valor não é vazio
    expect(number).not.toBeNull();
    //verificando a igualdade
    expect(number).toBe(10);
    //para itpos primitivos tanto o toBe quanto o toEqual são iguais
    expect(number).toEqual(10);
    //caso nao tenha certeza do valor que esta vindo
    expect(number).toBeLessThan(11);

});

//trabalhando com objetos

test('devo saber trabalhar com objetos', ()=>{
    const obj = { name: 'Roger', email: 'rogerfernandes.developer@gmail.com'}

    //descobrindo se possui a propriedade
    expect(obj).toHaveProperty('name');
    
    //verificando o nome do name do objeto
    expect(obj).toHaveProperty('name', 'Roger');

    const obj2 = {name: 'roger', email: 'rogerfernandescomputing@gmail.com'}

    //verificando se ele realmente é o objeto2 
    expect(obj2).toBe(obj2);
    
});
