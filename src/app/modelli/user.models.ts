export class User{
    constructor(
        public nome: string,
        public  email: string,
        public  id: string,
        private _token: string,
        private _expirationDate: Date,
        public profileImage: string,
        public profileImageUrl: string,
       
    ){}

get token(){
    if(!this._expirationDate || new Date() > this._expirationDate){
        return null
    }
    return this._token
}
} 