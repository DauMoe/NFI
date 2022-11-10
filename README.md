## NFI Test
[NFI Question](https://nonfungibleitem.notion.site/Backend-3501e4cc6adb42f3893a3bc50141bf20)

## Tasks:
- [x] Register new User (should return with user Id of created user and account balance which should be 0)
- [x] Deposit API should accept amount to deposit and user Id, then return with the total amount that this user has after deposit. Check also if user Id is valid
- [x] Withdrawal API should accept amount to withdraw and user Id, then return with the total amount that this user has after withdraw. Check also if user Id is valid
- [x] The system should not allow user to over withdraw (user balance cannot be negative)
- [x] The system should support decimal number for deposit and withdraw
- [ ] Write test case

## Technology:
- ExpressJs
- MariaDB
- Jest (test)

## How to install
- #### Manual
> - First time, run `npm install`
> - copy `.env.example.js`, change name `.env` then set `NODE_ENV=development` or `NODE_ENV=production`
> - run `npm run dev` for development or `npm run start` for production
> - Development mode can be hot reload if having any change from the code
- #### Docker (not yet :<)