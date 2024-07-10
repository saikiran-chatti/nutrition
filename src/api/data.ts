export const data = {
    "serving": {
        "amount": [
            {
                "value": 9,
                "unit": "COOKIES (28G)"
            }
        ],
        "countPerContainer": 14
    },
    "caloriesPerServing": {
        "amount": {
            "value": 120,
            "unit": "kcal"
        },
        "dailyPercentageValue": 6,
        "name": "calories",
        "parts": []
    },
    "fat": {
        "amount": {
            "value": 4.5,
            "unit": "g"
        },
        "dailyPercentageValue": 5.77,
        "name": "total_fat",
        "parts": [
            {
                "amount": {
                    "value": 2,
                    "unit": "g"
                },
                "dailyPercentageValue": 10,
                "name": "saturated_fat",
                "parts": []
            },
            {
                "amount": {
                    "value": 0,
                    "unit": "g"
                },
                "dailyPercentageValue": 0,
                "name": "trans_fat",
                "parts": []
            }
        ]
    },
    "carbohydrates": {
        "amount": {
            "value": 19,
            "unit": "g"
        },
        "dailyPercentageValue": 6.91,
        "name": "total_carbohydrate",
        "parts": [
            {
                "amount": {
                    "value": 0,
                    "unit": "g"
                },
                "dailyPercentageValue": 0,
                "name": "dietary_fiber",
                "parts": []
            },
            {
                "amount": {
                    "value": 7,
                    "unit": "g"
                },
                "dailyPercentageValue": 14,
                "name": "total_sugars",
                "parts": [
                    {
                        "amount": {
                            "value": 3,
                            "unit": "g"
                        },
                        "dailyPercentageValue": 10,
                        "name": "added_sugars",
                        "parts": []
                    }
                ]
            }
        ]
    },
    "protein": {
        "amount": {
            "value": 1,
            "unit": "g"
        },
        "dailyPercentageValue": 2,
        "name": "protein",
        "parts": []
    },
    "cholesterol": {
        "amount": {
            "value": 0,
            "unit": "mg"
        },
        "dailyPercentageValue": 0,
        "name": "cholesterol",
        "parts": []
    },
    "sodium": {
        "amount": {
            "value": 115,
            "unit": "mg"
        },
        "dailyPercentageValue": 5,
        "name": "sodium",
        "parts": []
    },
    "others": [
        {
            "amount": {
                "value": 0,
                "unit": ""
            },
            "dailyPercentageValue": 0,
            "name": "vitamin_d",
            "parts": []
        },
        {
            "amount": {
                "value": 11,
                "unit": "mg"
            },
            "dailyPercentageValue": 0.85,
            "name": "calcium",
            "parts": []
        },
        {
            "amount": {
                "value": 1,
                "unit": "mg"
            },
            "dailyPercentageValue": 5.56,
            "name": "iron",
            "parts": []
        },
        {
            "amount": {
                "value": 15,
                "unit": "mg"
            },
            "dailyPercentageValue": 0.32,
            "name": "potassium",
            "parts": []
        }
    ]
}

export const getDetails = () => {
    let result = [data.fat, data.carbohydrates, data.protein, data.cholesterol, data.sodium];
    data.others.map((item) => {
        result.push(item);
    })
    return result;
}

export const getServingData = () => {
    return data.serving;
}

export const getCaloriesData = () => {
    return data.caloriesPerServing;
}