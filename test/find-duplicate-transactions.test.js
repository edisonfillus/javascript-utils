const findDuplicateTransactions = require("../src/find-duplicate-transactions")

describe("Find Duplicate Transactions", () => {
    it("Should return empty array if no transactions", () => {
        expect(findDuplicateTransactions([])).toStrictEqual([]);
        expect(findDuplicateTransactions(undefined)).toStrictEqual([]);
    })
    it("Should return empty array if no duplicated transactions", () => {
        const transactions = [
            {
                id: 1,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:33:00.000Z"
            },
            {
                id: 2,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 80,
                category: "eating_out",
                time: "2018-03-03T13:33:50.000Z"
            },
        ];
        expect(findDuplicateTransactions(transactions)).toStrictEqual([]);
    })
    it("Should return empty array if duplicated transactions time difference greater than 1m", () => {
        const transactions = [
            {
                id: 1,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:33:01.500Z"
            },
            {
                id: 2,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:34:01.501Z"
            },
        ];
        expect(findDuplicateTransactions(transactions)).toStrictEqual([]);
    })
    it("Should identity as duplicated transactions", () => {
        const transactions = [
            {
                id: 1,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:33:00.000Z"
            },
            {
                id: 2,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:33:50.000Z"
            },
        ];
        expect(findDuplicateTransactions(transactions)).toStrictEqual([
            [
                {
                    id: 1,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:00.000Z"
                },
                {
                    id: 2,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:50.000Z"
                }]
        ]);
    })
    it("Should order the duplicated transactions by date", () => {
        const transactions = [
            {
                id: 2,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:33:50.000Z"
            },
            {
                id: 1,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:33:00.000Z"
            }
        ];
        expect(findDuplicateTransactions(transactions)).toStrictEqual([
            [
                {
                    id: 1,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:00.000Z"
                },
                {
                    id: 2,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:50.000Z"
                }]
        ]);
    })
    it("Should order mixed transactions in many groups", () => {
        const transactions = [
            {
                id: 1,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:33:00.000Z"
            },
            {
                id: 2,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:33:50.000Z"
            },
            {
                id: 3,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:34:30.000Z"
            },
            {
                id: 4,
                sourceAccount: "A",
                targetAccount: "B",
                amount: 100,
                category: "eating_out",
                time: "2018-03-02T10:36:00.000Z"
            },
            {
                id: 5,
                sourceAccount: "A",
                targetAccount: "C",
                amount: 250,
                category: "other",
                time: "2018-03-02T10:33:00.000Z"
            },
            {
                id: 6,
                sourceAccount: "A",
                targetAccount: "C",
                amount: 250,
                category: "other",
                time: "2018-03-02T10:33:05.000Z"
            }
        ];
        expect(findDuplicateTransactions(transactions)).toStrictEqual([
            [
                {
                    id: 1,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:00.000Z"
                },
                {
                    id: 2,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:50.000Z"
                },
                {
                    id: 3,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:34:30.000Z"
                }
            ],
            [
                {
                    id: 5,
                    sourceAccount: "A",
                    targetAccount: "C",
                    amount: 250,
                    category: "other",
                    time: "2018-03-02T10:33:00.000Z"
                },
                {
                    id: 6,
                    sourceAccount: "A",
                    targetAccount: "C",
                    amount: 250,
                    category: "other",
                    time: "2018-03-02T10:33:05.000Z"
                }
            ]
        ]);
    })
})