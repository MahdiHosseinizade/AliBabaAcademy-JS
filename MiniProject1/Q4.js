// The fourth challenge

const Users = [
    { id: 0, firstName: 'Mmd' },
    { id: 1, firstName: 'Amir' }
]
// 1 ---------------------------
function showAllUsers () {
    for(let user of Users){
        console.log(`Id of user is : ${user.id} , Name of user is :${user.firstName}`);
    }
}
// 2 -----------------------------
function getUserById(id) {
    for (let user of Users) {
      if (user.id === id) {
        console.log(`user found -> Id of user : ${user.id} , Name of user is : ${user.firstName}`);
        return;
      }
    }
    console.log("user not found 404 :)");
}
// 3 ------------------------------- 
function createUser(id,firstName){
    // const userExists = Users.some(user => user.id === id);
    for(let user in Users){
        if (Users[user].id === id) {
            console.log('User with this id is already exist');
            return;
        }
    }
    const newUser = {
        id ,
        firstName
    }
    Users.push(newUser)
    console.log('user added !');
    showAllUsers();
}
//  4-----------------------------------
function editUser(id, newName) {
    let userFound = false;
    for(let user in Users){
        if (Users[user].id === id) {
            Users[user].firstName = newName;
            userFound = true;
            break;
        }
    }
    if (userFound) {
        console.log(`User with id ${id} has been updated to ${newName}`);
    } else {
        console.log('User not found');
    }
    showAllUsers();
}


// showAllUsers()
// getUserById(5);
// createUser(1,'mmd')
// editUser(1,'Arsalan')