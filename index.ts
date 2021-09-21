//Crie, em TypeScript, uma interface chamada UserProps, que conterá as propriedades firtsName,lastName, username, email, password, cpf, contacto e isAdmin. Após criar a interface, crie uma classe User implementando essa interface. Faça os métodos getter e setter de cada propriedade.

interface UserProps{
    firtsName:String
    lastName:String
    username:String
    email:String
    password:String
    cpf:String
    contacto:String
    isAdmin:Boolean
}

class User implements UserProps {

    firtsName!:String
    lastName!:String
    username!:String
    email!:String
    password!:String
    cpf!:String
    contacto!:String
    isAdmin!:Boolean

    constructor(
        firtsName:String,
        lastName:String,
        username:String,
        email:String,
        password:String,
        cpf:String,
        contacto:String,
        isAdmin:Boolean
    ){
        this.firtsName=firtsName,
        this.lastName=lastName,
        this.username=username,
        this.email=email,
        this.password=password,
        this.cpf=cpf,
        this.contacto=contacto,
        this.isAdmin=true
    }

    getfirtsName(){
                return this.firtsName
            }            
    setfirtsName(firtsName:string){
        return this.firtsName = firtsName;
    }

    getlastName(){
        return this.lastName
    }            
    setlastName(lastName:string){
    return this.lastName = lastName;
    }

    getusername(){
        return this.username
    }            
    setusername(username:string){
    return this.username = username;
    }

    getemail(){
        return this.email
    }            
    setemail(email:string){
    return this.email = email;
    }

    getpassword(){
        return this.password
    }            
    setpassword(password:string){
    return this.password = password;
    }

    getcpf(){
        return this.cpf
    }            
    setcpf(cpf:string){
    return this.cpf = cpf;
    }

    getcontacto(){
        return this.contacto
    }            
    setcontacto(contacto:string){
    return this.contacto = contacto;
    }
    
    getisAdmin(){
        return this.isAdmin
    }            
    setisAdmin(isAdmin:boolean){
    return this.isAdmin = true;
    }
}

let User1 = new User (
        "Marcelly",
        "Monteiro",
        "mmonteiro",
        "mm@xx.com",
        "xxxxx",
        "12345678911",
        "12-123456",
        true
)

console.log(User1)

