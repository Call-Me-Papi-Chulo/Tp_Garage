import { MoteurThermique } from "../Interfaces/MoteurThermique";

export class MoteurEssence implements MoteurThermique {
    
    /**
     * 
     * Permet d'afficher j'accelère
     */
    augmenterTours(): void {
        console.log('J\'accelère');
    }
    
    /**
     * 
     * Permet de'afficher je fais le plein
     */
    faireLePlein(): void {
        console.log('Je fais le plein d\essence a 2€ le litre');
    }



}