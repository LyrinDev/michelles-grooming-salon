export class Pets{ 
    public firstName: string;
    public lastName: string;
    public species: string;
    public breed: string;
    public photoUrl: string;
    public parentId: string;
    public hasRabiesVac: boolean;

    constructor(firstName: string, 
        lastName: string, 
        species: string, 
        breed: string, 
        photoUrl: string, 
        parentId: string,
        hasRabiesVac:boolean){

        this.firstName = firstName;
        this.lastName = lastName;
        this.species = species;
        this.breed = breed;
        this.photoUrl = photoUrl;
        this.parentId = parentId;
        this.hasRabiesVac = hasRabiesVac;

    }
}