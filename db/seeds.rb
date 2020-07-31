# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Transaction.destroy_all
User.destroy_all

User.create([
  {
    email: "hello@bambank.com",
    password: "password",
    first_name: "Bambank",
    balance: 1000000
  },
  {
    email: "john@example.com",
    password: "password",
    first_name: "John"
  },
  {
    email: "bill@example.com",
    password: "password",
    first_name: "Bill"
  }
])

Transaction.create([
  {
    sender: User.find_by(email: "john@example.com"),
    receiver: User.last,
    amount: 10.00,
    reference: "party"
  }
])