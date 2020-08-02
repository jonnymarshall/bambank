# Bambank

An online bank, Bambank, allowing users to send and receive Bambeuros, Bambank's native currency, to one another.
The app is built using Ruby on Rails with a React front end and is fully responsive.

# Ruby Version
Tested with ruby 2.7.1

# Installation

To use this project, first clone the repo using the command below:

```git init```

```git clone https://github.com/jonnymarshall/bambank.git```

Install gems:
```bundle```

Install packages:
```yarn```

Create database, run migrations and seed dummy users:
```rails db:create db:migrate db:seed```

Serve app:
```rails s```

In the browser navigate to:
```http://localhost:3000```

# Notes
The app uses a very basic two table database structure of Users and Transactions. Focus has been put on front end design and interaction.

## A user of the app DOES:
Have the ability to send and receive payments to other users.
Receive a bonus of 100 Bambeuros.

## A user of the app DOES NOT:
Have the ability to create a custom contact list (all Bambeuro users are listed as payees).
Have the ability to edit their account details after initial signup.
Have the ability to add to their balance (or withdraw their balance)

## Testing:
As the backend has been kept very basic, there are currently no tests for the application.

## Validations:
Currently there are validations happening in the front end only (such as a user not being able to send a payment to themself, or sending a payment amount which is above their balance)

## Data & Storage:
Currently all images are coming from image externally hosted image URLs as a string on the User model. ActiveStorage/AWS not set up.