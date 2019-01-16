import Contact from './contact.model';
export class ContactLib {

    public async getContacts (){
        try {
            let contacts = Contact.findAll();
            return Promise.resolve(contacts);
        }catch(err){
            return Promise.reject(err);
        }
    }

    public getContactsPromise (){
       return Contact.findAll();
    }



}