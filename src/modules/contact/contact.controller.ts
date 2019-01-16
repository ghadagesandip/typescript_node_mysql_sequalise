import { Request, Response, Application } from "express";
import { BaseCotroller } from '../BaseApi';
import {ContactLib} from "./contact.lib";

export class ContactApi extends BaseCotroller{

    constructor() {
        super();
        this.init();
    }

    public register(express: Application) : void{
        express.use('/api/contacts', this.router);
    }

    public init(): void {
        this.router.get('/', this.getContactsProise);
        this.router.post('/', this.addNewContact);
        this.router.put('/:contactId', this.updateContact);
    }

    //this is using aync await it actually await for query to execute
     public async getContacts(req: Request, res: Response) {
        const contactlib: any = new ContactLib();
        console.log('geting data')
        try{
            let contacts = await contactlib.getContacts();
            console.log('json data foud', contacts)
            res.json(contacts);
        }
        catch(err){
            res.status(400).send(err);
        }
        console.log('done geting data');
    }

    //this is using promise continue execution of next task and
    // send response once promise is resolved
    public async getContactsProise(req: Request, res: Response) {
        const contactlib: any = new ContactLib();
        console.log('geting data')

        contactlib.getContacts()
            .then((contacts: any) => {
                console.log('json data foud', contacts)
                res.json(contacts);
            })
            .catch((err: any) => {
                res.status(400).send(err);
            });
            
        console.log('done geting data')
    }
    public addNewContact(req: Request, res: Response) {

    }

    public getContactWithID(req: Request, res: Response) {

    
    }

    public updateContact(req: Request, res: Response) {

       
    }

}
