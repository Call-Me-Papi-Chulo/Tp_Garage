import { Garage } from "./Garage";
import { Personne } from "./Personne";

export class Garagiste extends Personne{

    constructor(nom: string, age: number) {
        super(age, nom);
    }

    /**
     * 
     * Permet d'afficher la phrase je conduis
     * 
     */
    public conduire(): void {
        console.log('Je suis entrain de conduire Vroom Vroom !');
    }
    
    /**
     * 
     * Permet d'afficher la phrase je conduis
     * 
     */
    public presenterGarage(garage: Garage): void {
        garage.afficherGarage();
    }

    public faireLePleinDeToutesLesVoitures(): void {
        
    }

}