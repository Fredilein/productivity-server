# Productivity Server

## Model rn
- **Task**: Title, slot, completed
- **Category**: Just holds title
- **Slot**: Holds start/end time, weekday, tasks
  - Problem if actual date in slot => unlimited slots
  - Sol?: Move weekday and time to category (better call it zone or smth), create slot docs with actual date on-the-fly when a task is moved/created to a corresponding category 

## TODO
- [ ] Change model to work with actual dates.

## Get going

1. Start MongoDB service
```
Go figure out
```

2. Import mock data (optional obviously)
E.g. in MongoDB Compass (GUI), create collections `categories`, `slots` and `tasks`. Then `ADD DATA` and select corresponding files in `/mock-data`

3. Start server
```
npm i -g nodemon    # Not in package.json
npm install
npm run start:server
```

Server currently runs on `:4040`
