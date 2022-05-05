const Model = require("./Model")

class Holiday extends Model {
  static get tableName() {
    return "holidays"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "date"],
      properties: {
        name: { type: "string" },
        date: { type: "string" },
      },
    }
  }

  static get relationMappings() {
    const Review = require("./Review.js")
    return {
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "holidays.id",
          to: "reviews.holidayId"
        }
      }
    }
  }
}

module.exports = Holiday
