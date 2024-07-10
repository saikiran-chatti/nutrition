import React, { useEffect } from 'react';
import { Calories, Nutrient, Serving } from '../../types/types';
import NutritionData from '../NutritionData';
import './index.css';

interface NutritionProps {
  data: Nutrient[];
  servingData: Serving | undefined;
  caloriesData: Calories | undefined;
}

const NutritionTable: React.FC<NutritionProps> = (props) => {
  useEffect(() => {
    console.log(props.caloriesData);
  }, []);
  return (
    <div className='nutritionContainer'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: '0px', padding: '0px' }}>Nutrition Facts</h2>
      </div>
      <hr style={{ width: '100%', marginTop: '0px' }} />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <p>{props.servingData?.countPerContainer} servings per Container</p>
      </div>
      <div className='servingContainer'>
        <strong>Serving size</strong>
        <strong>2/3 cup ({props.servingData?.amount[0].value})</strong>
      </div>
      <hr
        style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'black',
          marginTop: '5px',
        }}
      />
      <div className='amountContainer'>
        <strong>Amount per serving</strong>
        <div className='caloriesContainer'>
          <strong>Calories</strong>
          <strong>{props.caloriesData?.amount.value}</strong>
        </div>
      </div>
      <hr
        style={{
          width: '100%',
          height: '3px',
          backgroundColor: 'black',
          marginTop: '5px',
        }}
      />

      <div className='dailyValue'>
        <strong>%Daily Value*</strong>
      </div>
      <hr style={{ width: '100%' }} />
      {props.data?.map((item, index) => (
        <NutritionData data={item} key={index} isRoot={true} />
      ))}
    </div>
  );
};

export default NutritionTable;
