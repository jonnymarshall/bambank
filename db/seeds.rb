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
    avatar_url: "https://www.shareicon.net/data/2016/10/20/846458_blue_512x512.png",
    balance: 1000000,
  },
  {
    email: "john@example.com",
    password: "password",
    first_name: "John",
    avatar_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11d051fd-e033-4bbe-a7dc-41c8da636c34/d7yso8k-585fe3cb-d9d0-46f9-a483-a27a1dbf3faa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xMWQwNTFmZC1lMDMzLTRiYmUtYTdkYy00MWM4ZGE2MzZjMzQvZDd5c284ay01ODVmZTNjYi1kOWQwLTQ2ZjktYTQ4My1hMjdhMWRiZjNmYWEucG5nIn1dXX0.F5On7t0rAD_y3hX1HMA_I2WMA6DV2ZKPuafjxSI3P80"
  },
  {
    email: "sarah@example.com",
    password: "password",
    first_name: "Sarah",
    avatar_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8fc52784-7a18-4d4d-9ccb-110a8d80a5bb/d6mtt55-f9b343d7-8f79-40d9-8c5c-401bc3ce8d03.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi84ZmM1Mjc4NC03YTE4LTRkNGQtOWNjYi0xMTBhOGQ4MGE1YmIvZDZtdHQ1NS1mOWIzNDNkNy04Zjc5LTQwZDktOGM1Yy00MDFiYzNjZThkMDMuanBnIn1dXX0.6-3ihZXl6Fxd6GnP4DHwAjiH1S9i4E3xeyKB5uR40gA"
  },
  {
    email: "samantha@example.com",
    password: "password",
    first_name: "Samantha",
    avatar_url: "https://static.boredpanda.com/blog/wp-content/uploads/2017/03/seol-58d1246b4f584-png__880.jpg"
  },
  {
    email: "zayne@example.com",
    password: "password",
    first_name: "Zayne",
    avatar_url: "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/f6/Shoto_Todoroki_Anime_Portrait.png/revision/latest?cb=20180503174441"
  },
  {
    email: "jim@example.com",
    password: "password",
    first_name: "Jim",
    avatar_url: "https://vignette.wikia.nocookie.net/thekindaichicasefiles/images/f/f1/Ryosuke_Komori_(Anime_Portrait).jpg/revision/latest/scale-to-width-down/120?cb=20161023010027"
  },
  {
    email: "Hannah@example.com",
    password: "password",
    first_name: "Hannah",
    avatar_url: "https://lh3.googleusercontent.com/w0hBYvcTMDHcNcq9Lcu6N8SYslnwioJK664s6Q8MVt9WhRAQKBw6_kVKOrgPokFoI88=s180"
  },
  {
    email: "kyle@example.com",
    password: "password",
    first_name: "Kyle",
    avatar_url: "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/6/67/Mirio_Togata_Anime_Portrait.png/revision/latest/scale-to-width-down/161?cb=20180923214326"
  },
  {
    email: "bella@example.com",
    password: "password",
    first_name: "Bella",
    avatar_url: "https://thumbs.dreamstime.com/t/beautiful-cartoon-smiling-girl-portrait-long-brown-hair-big-black-eyes-yellow-shirt-hand-drawn-illustration-isolated-white-139380567.jpg"
  }
])

Transaction.create([
  {
    sender: User.find_by(email: "sarah@example.com"),
    receiver: User.find_by(email: "john@example.com"),
    amount: 10.00,
    reference: "party"
  }
])