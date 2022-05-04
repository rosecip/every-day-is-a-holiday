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
}

module.exports = Holiday
