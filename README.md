# Generic CRUD
## CRUD OPERATIONS 
```
    1- CREATE 
    2- READ 
    3- UPDATE 
    4- DELETE

```

## Installation 

```
    npm init 
    npm install 
    npm i mongoose 

```

## Usage 
### 1-  Create a schema like

```
    const userSchema = new Mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        minLength:4,
    },
     lastName:{
       type:String,
       minLength:4,
     },
     email:{
        type:String, 
        unique:true,
        required:true
    },
     password:{
        type:String,
        minLength:6,
        required:true
     } , ..... 
     
    }


```
### 2- Create a datatype like 

```
    export interface StoteType {
     storeName :string,
     about:string,
     rating:string,
     category:string,
     admins:string
    }

```