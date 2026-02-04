 enum Role{
    user="user",
    admin="admin",
    seller="seller"
}
console.log(Role);
type loginDetails={
name:string,
email:string,
password:string,
role:Role

}

const user1:loginDetails ={
name:"Anuja",
email:"anujamaurya@gmial.com",
password:'anu',
role:Role.admin

}
// console.log(user1.area);

console.log(user1);