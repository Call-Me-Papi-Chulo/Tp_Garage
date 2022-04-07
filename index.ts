import { Garagiste } from "./Classes/Garagiste";
import { Voiture } from "./Classes/Voiture";
import {MoteurEssence} from "./Classes/MoteurEssence";
import { Garage } from "./Classes/Garage";
import { Moto } from "./Classes/Moto";

let monGaragiste : Garagiste = new Garagiste('Benjamin', 21);
let maVoiture : Voiture = new Voiture('Dacia', new MoteurEssence());
let maMoto : Moto = new Moto('Kawasaki', new MoteurEssence());
let monGarage : Garage = new Garage();

monGaragiste.sePresenter();
maVoiture.afficherVehicule();
monGarage.ajouterVehicule(maVoiture);
monGarage.ajouterVehicule(maMoto);
monGarage.afficherGarage();
monGarage.retirerVehicule(maMoto);
monGarage.afficherGarage();

