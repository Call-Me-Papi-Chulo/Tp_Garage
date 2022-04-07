import { Moteur } from "../Interfaces/Moteur";
import { Vehicule } from "./Vehicule";

export class Moto extends Vehicule {

    constructor(marque: string, moteur: Moteur) {
        super(marque, moteur);
    }

    /**
     * 
     * Permet d'afficher je Je cabre la moto en Y
     */
    public faireUnWheeling(): void {
        console.log('Je cabre la moto en Y');
    }

    /**
     * 
     * Permet d'afficher la marque de la moto
     */
    afficherVehicule(): void {
        console.log(`Le camion est de marque : ${this.marque}`);
    }
    

}