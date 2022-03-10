import { Animal, Dog } from "./ClassAnimal";

export class AnimalSounds {
  public playSounds(animal: Animal): void {
    animal.makeNoise();

    const dog = new Dog("uauau");
    const cat = new Cat("zzz");

    const animalSounds = new AnimalSounds();
    animalSounds.playSounds(dog);

    const animalSounds = new AnimalSounds();
    animalSounds.playSounds(cat);
  }
}
