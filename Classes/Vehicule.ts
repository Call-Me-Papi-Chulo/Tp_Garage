import {Moteur} from "../Interfaces/Moteur";

export abstract class Vehicule {

    protected _marque: string;
    public _moteur: Moteur;

    constructor(marque: string, moteur: Moteur) {

        this._marque = marque;
        this._moteur = moteur;
        
    }

    /**
     * 
     * Permet d'afficher le vehicule avance
     */
    public avancer(): void {
        console.log('Le véhicule avance');
    }

    /**
     * 
     * Permet d'afficher le vehicule recule
     */
    public reculer(): void {
        console.log('Le véhicule recule');
    }

    /**
     * 
     * Permet d'afficher le vehicule freine
     */
    public freiner(): void {
        console.log('Le véhicule freine');
    }

    /**
     * 
     * Permet d'afficher la marque du vehicule
     */
    public afficherVehicule(): void {
        console.log(`Le véhicule est de marque : ${this.marque} `);
    }

    get marque(): string {
        return this._marque;
    }

    set marque(value: string) {
        this._marque = value;
    }

    get moteur(): Moteur {
        return this._moteur;
    }

    set moteur(value: Moteur) {
        this._moteur = value;
    }

    
}