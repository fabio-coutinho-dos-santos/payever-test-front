export class User{
    constructor(
        public name:String,
        public email:String,
        public createdAt: Date,
        public updateAt:Date,
        public _id?:String,
    ){}
}