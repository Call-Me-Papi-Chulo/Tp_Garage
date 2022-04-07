export abstract class Personne {

    public _age: number;
    public _nom: string;

    constructor(age: number, nom: string) {
        this._age = age;
        this._nom = nom;
    }

    /**
     * 
     * Permet d'afficher le nom est l'age de la personne
     */
    public sePresenter(): void{
        console.log(`nom : ${this._nom} \nage : ${this._age}`);
    }

    

}