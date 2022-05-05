/* eslint-disable no-console */
import { connection } from "../boot.js"
import HolidaySeeder from "./seeders/HolidaySeeder.js"
import ReviewSeeder from "./seeders/ReviewSeeder.js"

class Seeder {
  static async seed() {

    console.log("seeding holidays...")
    await HolidaySeeder.seed()
    console.log("seeding reviews...")
    await ReviewSeeder.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder