const getAmountByCategoryInPeriod = require("../src/amount-by-category")
describe("Amount by Category", () => {
    it("Should return 0.0 if no transactions", () => {
        expect(
            getAmountByCategoryInPeriod(
                []
                , "groceries"
                , new Date("2020-09-01")
                , new Date("2019-09-31")
            ))
            .toBe(0.0);
        expect(
            getAmountByCategoryInPeriod(
                undefined
                , "groceries"
                , new Date("2020-09-01")
                , new Date("2019-09-31")
            ))
            .toBe(0.0);
    })
    it("Should return 0.0 if no transaction match", () => {
        const transactions = [
            {
                id: 1,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -30,
                category: 'eating_out',
                time: '2020-08-12T13:31:00Z'
            },
            {
                id: 2,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -50,
                category: 'eating_out',
                time: '2020-10-11T13:31:00Z'
            },
            {
                id: 3,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -70,
                category: 'eating_out',
                time: '2020-10-12T13:31:00Z'
            }
        ];
        expect(
            getAmountByCategoryInPeriod(
                transactions
                , "groceries"
                , new Date("2020-09-01")
                , new Date("2020-09-30")
            ))
            .toBe(0.0);
    })
    it("Should filter by groceries and return -30.0", () => {
        const transactions = [
            {
                id: 1,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -30,
                category: 'groceries',
                time: '2020-09-12T13:31:00Z'
            },
            {
                id: 2,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -50,
                category: 'eating_out',
                time: '2020-09-12T13:31:00Z'
            }
        ];
        expect(
            getAmountByCategoryInPeriod(
                transactions
                , "groceries"
                , new Date("2020-09-01")
                , new Date("2020-09-30")
            ))
            .toBe(-30.0);
    })
    it("Should filter by date and return -50.0", () => {
        const transactions = [
            {
                id: 1,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -30,
                category: 'groceries',
                time: '2020-08-12T13:31:00Z'
            },
            {
                id: 2,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -50,
                category: 'groceries',
                time: '2020-09-12T13:31:00Z'
            },
            {
                id: 3,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -70,
                category: 'groceries',
                time: '2020-10-12T13:31:00Z'
            }
        ];
        expect(
            getAmountByCategoryInPeriod(
                transactions
                , "groceries"
                , new Date("2020-09-01")
                , new Date("2020-09-30")
            ))
            .toBe(-50.0);
    })
    it("Should sum the edge cases of date and return -100.0", () => {
        const transactions = [
            {
                id: 1,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -30,
                category: 'groceries',
                time: '2020-09-01T00:00:00Z'
            },
            {
                id: 2,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -50,
                category: 'groceries',
                time: '2020-09-12T13:31:00Z'
            },
            {
                id: 3,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -20,
                category: 'groceries',
                time: '2020-09-30T23:59:59Z'
            }
        ];
        expect(
            getAmountByCategoryInPeriod(
                transactions
                , "groceries"
                , new Date("2020-09-01")
                , new Date("2020-10-01")
            ))
            .toBe(-100.0);
    })
    it("Should filter the edge cases of date and return 0.0", () => {
        const transactions = [
            {
                id: 1,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -30,
                category: 'groceries',
                time: '2020-08-31T23:59:59Z'
            },
            {
                id: 2,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -50,
                category: 'groceries',
                time: '2020-10-01T00:00:00Z'
            }

        ];
        expect(
            getAmountByCategoryInPeriod(
                transactions
                , "groceries"
                , new Date("2020-09-01")
                , new Date("2020-10-01")
            ))
            .toBe(0.0);
    })
})