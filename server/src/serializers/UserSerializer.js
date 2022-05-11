class UserSerializer {
  static getSummary(user) {
    const allowedAttribute = ["id", "email"]

    let serializedUser = {}
    for (const attribute of allowedAttribute) {
      serializedUser[attribute] = user[attribute]
    }
    return serializedUser
  }
}

export default UserSerializer
