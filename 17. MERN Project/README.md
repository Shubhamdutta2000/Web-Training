# Note Taking App

A Personal note webapp where user can write their own things uniquely

## Features

- Users can create an account and log in.
- User can view all entries to their note.
- Users can view the contents of a note entry.
- Users can add or modify an entry.
- Users can delete an entry

## Additional Features

- Forget Password
- Email Verification

## Screenshot

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDb](https://www.mongodb.com/cloud/atlas/lp/try2-in?utm_source=google&utm_campaign=gs_apac_india_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624347)
- [React](https://reactjs.org/)
- Redux
- MUI

## API Endpoints

| Endpoint                  | Functionality        |
| ------------------------- | -------------------- |
| POST `/users/signup`      | Register a user      |
| POST `/users/login`       | Login a user         |
| GET `users/notes`         | Fetch all entries    |
| GET `users/notes/<Id>`    | Fetch a single entry |
| POST `users/notes`        | Create an entry      |
| PATCH `users/notes/<Id>`  | Modify an entry      |
| DELETE `users/notes/<Id>` | Delete an entry      |
| POST `reset/pass`         | For Password Reset   |
| DELETE `/email-verify`    | verify email         |

## Api

For more details about the test cases and datas to pass please refer [here](https://github.com/Shubhamdutta2000/mydiary/tree/main/server/http_tests)

## Build Setup

```
# Clone repo and cd into directory
git clone https://github.com/Shubhamdutta2000/mydiary.git
```

```
# Change Direcrty
cd client || cd server

# Install dependencies
npm install

# Serve in development environment
npm run dev

# Build for production
npm run build
```

## License

- MIT
