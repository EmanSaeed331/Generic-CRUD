
   // Create 
   async function create<T>(data:T , model:any){
        const newObj = await new model(data);
        await newObj.save()
        return newObj;
     }

    // read  all  
    async function read(model:any){
        return await model.find({});
    }

    async function get(model:any , filter:object){
        return await model.find(filter);
    }

    // update
    async function update<T>(id:string, data:T , model:any){
        return  await model.findByIdAndUpdate(id,data); 
    }

    // delete
    async function remove(id:string , model:any){
        return await model.findOneAndDelete(id);
    }

    // get data by Id 
    async function getById (id:string,model:any){
        const data = await model.findOne({id});
        if(!data) {
            return 'id is not valid';
        }
        return data ; 
    }
 

export const crud = {
    create,
    read,
    update,
    remove,
    getById,
    get
}