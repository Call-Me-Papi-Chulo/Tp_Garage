import { Vehicule } from "./Vehicule";
import { Garagiste } from "./Garagiste";
import { Moto } from "./Moto";
import { Voiture } from "./Voiture";
import { Camion } from "./Camion";

export class Garage {

    public _Vehicule: Vehicule[] = [];
    public _Garagiste: Garagiste[] = [];

    constructor(...garagiste: Garagiste[]) {
        this._Garagiste = garagiste;
    }
    

    /**
     * 
     * @param vehicule 
     * 
     * Permet d'ajouter un vehicule au garage
     */
    public ajouterVehicule(vehicule: Vehicule): void {
        this._Vehicule.push(vehicule);
    }


    /**
     * 
     * @param vehicule 
     * Permet de retirer un vehicule du garage
     */
    public retirerVehicule(vehicule: Vehicule): void {
        let index = this._Vehicule.indexOf(vehicule);
        this._Vehicule.splice(index, 1);
    }

    /**
     * 
     * Permet d'afficher tout les vehicules present dans le garage
     * 
     */
    public afficherGarage(): void{
        this._Garagiste.map(garagiste => {
            console.log(garagiste.sePresenter());
        });
        this._Vehicule.map(vehicule=>{
            console.log(vehicule.afficherVehicule());
        });

    }

    /**
     * 
     * Permet d'afficher les motos 
     */
    public afficherMotos(): void{
        this._Vehicule.map(vehicule=> {
            if (vehicule instanceof Moto){
                console.log(vehicule.afficherVehicule());
            }
         });
    }

    /**
     * 
     * Permet d'afficher les voitures 
     */
    public afficherVoitures(): void{
        this._Vehicule.map(vehicule=> {
            if (vehicule instanceof Voiture){
                console.log(vehicule.afficherVehicule());
            }
         });
    }

    /**
     * 
     * Permet d'afficher les camions 
     */
    public afficherCamions(): void {
        this._Vehicule.map(vehicule=> {
            if (vehicule instanceof Camion){
                console.log(vehicule.afficherVehicule());
            }
         });
    }

}