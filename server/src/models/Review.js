const Model = require("./Model.js")

class Review extends Model {
  static get tableName() {
    return "reviews"
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "body", "rating"],
      properties: {
        title: { type: "string", minLength: 1, maxLength: 45 },
        body: { type: "string", minLength: 5, maxLength: 350 },
        rating: { type: ["integer", "string"] },
      },
    }
  }

  static get relationMappings() {
    const { Holiday, User } = require("./index.js")
    return {
      holiday: {
        relation: Model.BelongsToOneRelation,
        modelClass: Holiday,
        join: {
          from: "reviews.holidayId",
          to: "holidays.id",
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "reviews.userId",
          to: "users.id",
        },
      },
    }
  }
}

module.exports = Review
