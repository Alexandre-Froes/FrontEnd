const showAllUsers = usuarios => {
    usuarios.forEach(pessoa => console.log(`Nome: ${pessoa.nome}`));
}

const showUsersGender = (usuarios, gender) => {
    usuarios
        .filter(user => user.sexo == gender)
        .forEach(user => console.log(user.nome));
}

const manageUsers = {
    showUsersGender,
    showAllUsers
}

export default manageUsers;