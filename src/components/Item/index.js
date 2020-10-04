import React from 'react';

import './styles.css';
import {
  GRASS,
  POISON,
  FIRE,
  WATER,
  BUG,
  DEFAULT,
} from './constants';
import {
  pad
} from './utils';

class ItemView extends React.Component {
  
  constructor(props) {
    super(props);

    this.typeBgColors = {
      'GRASS': GRASS,
      'POISON': POISON,
      'FIRE': FIRE,
      'WATER': WATER,
      'BUG': BUG,
      'DEFAULT': DEFAULT,
    }
  };

  getTypeBgColor = (type) => {
    return this.typeBgColors[type.toUpperCase()]
  };

  render() {
    const {
      image,
      number,
      name,
      types
    } = this.props.pokemon;

    return (
      <div className='col-2'>
        <div className='panel panel-item'>
          {
            image ?
            <img
              alt={name}
              src={image.url}
              width={image.width}
              height={image.height}
              className="panel-heading"
            /> : null
          }
          <div className='panel-body panel-bg-color center-block text-center'>
            <h4 className='main-font-color'>{`#${pad(number)}`}</h4 >
            <h4 className='main-font-color'>{name}</h4>
          </div>
          <div className='panel-footer'>
            <div className='row'>
              {
                types && types.map((type, i) => {
                  return (
                    <div key={i} className='col center-block text-center'>
                      <p style={{'backgroundColor': this.getTypeBgColor(type)}} className='main-font-color type-bg'>{type}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ItemView;
