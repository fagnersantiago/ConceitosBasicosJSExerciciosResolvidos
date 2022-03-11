import { Animal, Dog, Cat } from "./ClassAnimal";

export class AnimalSounds {
  public playSounds(animal: Animal): void {
    animal.makeNoise();

    const dog = new Dog("uauau");
    const cat = new Cat("zzz");

    const animalSoundsdog = new AnimalSounds();
    animalSoundsdog.playSounds(dog);

    const animalSounds = new AnimalSounds();
    animalSounds.playSounds(cat);
  }
}
