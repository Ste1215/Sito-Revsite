export class User{
    constructor(
        public  email: string,
        public  id: string,
        private _token: string,
        private _expirationDate: Date,
        public profileImage: string
    ){}

get token(){
    if(!this._expirationDate || new Date() > this._expirationDate){
        return null
    }
    return this._token
}
} 