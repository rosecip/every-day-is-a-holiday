import { Review } from "../../models/index.js"

class ReviewSeeder {
    static async seed() {
        const reviewsData = [
            {
                title: "Christmas is overrated",
                body: "christmas is kinda overrated. Christmas lights are nice.",
                rating: 3,
                holidayId: 1,
                userId: 1
            },
            {
                title: "Halloween",
                body: "Halloween is a great slept on holiday, Aaron was a pirate. Rose caused mass destruction.",
                rating: 4,
                holidayId: 2,
                userId: 1
            }
        ]

        for (const singleReviewData of reviewsData) {
            const currentReview = await Review.query().findOne(singleReviewData)
            if (!currentReview) {
                await Review.query().insert(singleReviewData)
            }
        }
    }
}

export default ReviewSeeder