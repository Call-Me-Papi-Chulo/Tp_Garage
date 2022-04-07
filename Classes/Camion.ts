import { Moteur } from "../Interfaces/Moteur";
import { Vehicule } from "./Vehicule";

export class Camion extends Vehicule {

    constructor(marque: string, moteur: Moteur) {
        super(marque, moteur);
    }

    /**
     * 
     * permet d'afficher j'attache la remorque
     */
    public attacherRemorque(): void {
        console.log('J\'attache la remorque');
    }

    /**
     * 
     * permet d'afficher je detache la remorque
     */
    public detacherRemorque(): void {
        console.log('Je detache la remorque');
    }

    /**
     * 
     * Permet d'afficher la marque du Camion
     */
    afficherVehicule(): void {
        console.log(`Le camion est de marque : ${this.marque}`);
    }

}