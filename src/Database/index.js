import * as SQLite from "expo-sqlite";

// Criação do banco db
const db = SQLite.openDatabase("db.db");

export default db;