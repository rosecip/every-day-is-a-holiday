import ReviewsSerializer from "./ReviewsSerializer.js"

class HolidaySerializer {
  static async getSummary(holiday) {
    try {
      const allowedAttributes = ["name", "date"]

      let serializedHolidays = {}
      for (const attribute of allowedAttributes) {
        serializedHolidays[attribute] = holiday[attribute]
      }

      const relatedReviews = await holiday.$relatedQuery("reviews")
      const serializedReviews = await Promise.all(
        relatedReviews.map(async (review) => await ReviewsSerializer.getSummary(review))
      )

      serializedHolidays.reviews = serializedReviews
      return serializedHolidays
    } catch (error) {
      throw error
    }
  }
}

export default HolidaySerializer
