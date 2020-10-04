import React from 'react';

import data from 'data/pokemon.json';
import LoadingView from 'components/Loading';
import ErrorView from 'components/Error';
import ItemView from 'components/Item';


class PokedexView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      showError: false,
      pokemons: [],
      total: 0
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      console.log(data)
      this.setState({
        isLoading: false,
        pokemons: data.entries,
        total: data.total,
      });
    }, 1000);
  }

  render() {
    const {
      isLoading,
      showError,
      pokemons
    } = this.state;

    return (
      <div className='row'>
        {
          isLoading && <LoadingView />
        }

        {
          showError && <ErrorView />
        }

        {
          pokemons.map((pokemon, i) => {
            return (
              <ItemView key={i} pokemon={pokemon} />
            )
          })
        }
      </div>
    );
  }
}


export default PokedexView;
