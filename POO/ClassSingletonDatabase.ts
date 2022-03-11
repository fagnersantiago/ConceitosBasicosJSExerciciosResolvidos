//singleton
export class Database {
  private static database: Database;
  constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log("conectando...", `${this.host} ${this.user} ${this.password}`);
  }

  static getConnectionDatabase(host: string, user: string, password: string) {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db = Database.getConnectionDatabase("locahost", "mysql", "123");
db.connect();

console.log(db);
