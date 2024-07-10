import React from 'react';
import { Nutrient } from '../../types/types';
import './index.css';

interface NutritionDataProps {
  data: Nutrient | undefined;
  isRoot: Boolean;
}

const NutritionData: React.FC<NutritionDataProps> = (props) => {
  return (
    <div className={'nutritionDataContainer '}>
      {props.data && (
        <>
          <div className='nutrientValue'>
            <div className='nutrientInfo'>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {props.isRoot && <strong>{props.data.name}</strong> }
                {!props.isRoot && <p>{props.data.name}</p> }
                <p>
                  {props.data.amount.value}
                  {props.data.amount.unit}
                </p>
              </div>

              <strong>{props.data.dailyPercentageValue}%</strong>
            </div>
            {props.data.parts && <hr style={{ width: '100%' }} />}
            <div>
              {props.data.parts &&
                props.data.parts.map((part) => (
                  <>
                    <div style={{paddingLeft: '15px'}}>
                      <NutritionData data={part} isRoot={false} />
                    </div>
                  </>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NutritionData;
