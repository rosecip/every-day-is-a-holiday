/* eslint-disable no-console */
import { connection } from "../boot.js"
import HolidaySeeder from "./seeders/HolidaySeeder.js"

class Seeder {
  static async seed() {

    console.log("seeding holidays...")
    await HolidaySeeder.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder