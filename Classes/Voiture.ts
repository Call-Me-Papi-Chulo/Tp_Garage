import { Moteur } from "../Interfaces/Moteur";
import { Vehicule } from "./Vehicule";

export class Voiture extends Vehicule {

    constructor(marque: string, moteur: Moteur) {
        super(marque, moteur);
    }

    /**
     * 
     * Permet d'afficher la marque de la voiture 
     */
    afficherVehicule(): void {
        console.log(`La voiture est de marque : ${this.marque} `);
    }

}