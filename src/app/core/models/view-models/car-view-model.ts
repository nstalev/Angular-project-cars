export class CarModel{
    constructor(
        public _id : number,
        public title:string,
        public description: string,
        public category: string,
        public url1 : string,
        public url2 : string,
        public url3? : string,
        public url4? : string,
        public url5? : string,
        public url6? : string
    ){ }
}