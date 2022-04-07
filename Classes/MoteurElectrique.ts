import { Moteur } from "../Interfaces/Moteur";

export class MoteurElectrique implements Moteur {
    
    /**
     * 
     * Permet d'afficher j'accelère
     */
    augmenterTours(): void {
        console.log('J\'accelère');
    }

    /**
     * 
     * Permet de'afficher je recharge
     */
    Recharger(): void {
        console.log('Je recharge ma tesla avec le super chargeur');
    }

}