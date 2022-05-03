import { Holiday } from "../../models/index.js"

class HolidaySeeder {
    static async seed() {
        const holidaysData = [
            {
                name: "Christmas",
                date: "12/25"
            },
            {
                name: "Halloween",
                date: "10/31"
            },
            {
                name: "4th of July",
                date: "7/4"
            },
            {
                name: "Tim's Birthday",
                date: "Everyday"
            },
            {
                name: "Valentines Day",
                date: "2/14"
            }
        ]

        for (const singleHolidayData of holidaysData) {
            const currentHoliday = await Holiday.query().findOne(singleHolidayData)
            if (!currentHoliday) {
                await Holiday.query().insert(singleHolidayData)
            }
        }
    }
}

export default HolidaySeeder