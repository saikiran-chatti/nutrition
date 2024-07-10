export type Amount = {
	value: number;
  unit: string;
}

export type Nutrient = {
		name: string;
	  amount: Amount;
	  dailyPercentageValue?: number;
	  parts: Nutrient[];
}

export type NutritionFacts = {
  fat?: Nutrient;
  carbohydrates?: Nutrient;
  protein?: Nutrient;
  cholesterol?: Nutrient;
  sodium?: Nutrient;
}

export interface Serving {
  amount: Amount[];
  countPerContainer: number;
}

export interface Calories {
  amount: Amount;
  dailyPercentageValue: number;
  name: string;
  parts: any[];
}
