import { useEffect, useState } from 'react';
import { getDetails } from './api/data';
import { Calories, Nutrient, Serving } from './types/types';
import NutritionTable from './components/NutritionTable';
import { getServingData } from './api/data';
import { getCaloriesData } from './api/data';
import './App.css';

function App() {
  const [data, setData] = useState<Nutrient[]>([]);
  const [serving, setServing] = useState<Serving | undefined>();
  const [calories, setCalories] = useState<Calories | undefined>();

  useEffect(() => {
    const fetchData = () => {
      let result = getDetails();
      setData(result);
    };

    setServing(getServingData());
    setCalories(getCaloriesData());

    fetchData();
  }, []);
  return (
    <div className='parentContainer'>
      <NutritionTable
        data={data}
        servingData={serving}
        caloriesData={calories}
      />
    </div>
  );
}

export default App;
