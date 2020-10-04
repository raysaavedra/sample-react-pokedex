import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import HeaderView from './components/Header';
import FooterView from './components/Footer';
import PokedexView from './features/Pokedex';
import LoadingView from 'components/Loading';
import ErrorView from 'components/Error';
import ItemView from 'components/Item';


const data = {
  "number": "1",
  "name": "Bulbasaus",
  "types": ["Grass", "Poison"],
  "image": {
    "url": "assets/001.png",
    "width": 475,
    "height": 475
  }
};


describe("App", () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it("should contain a header", () => {
    const app = shallow(<App />);
    expect(app.contains(<HeaderView />)).toBe(true);
  });

  it("should contain a footer", () => {
    const app = shallow(<App />);
    expect(app.contains(<FooterView />)).toBe(true);
  });

  it("should contain main container", () => {
    const app = shallow(<App />);
    expect(app.contains(<PokedexView />)).toBe(true);
  });

  it('should show loading when fetching data', () => {
    const component = shallow(<PokedexView />);

    component.setState({ isLoading: true });

    expect(component.contains(<LoadingView />)).toBe(true);
  });

  it('should show loading on initial page open', () => {
    const component = shallow(<PokedexView />);

    expect(component.state().isLoading).toEqual(true);
    expect(component.contains(<LoadingView />)).toBe(true);
  });

  it('should show error when error occurs on fetching data', () => {
    jest.useFakeTimers();

    const component = shallow(<PokedexView />);

    setTimeout(() => {
      component.setState({ showError: true });
      expect(component.contains(<ErrorView />)).toBe(true);
    }, 1000);
    
    jest.runAllTimers();
  });

  it('should hide loading when fetching data is completed', () => {
    jest.useFakeTimers();

    const component = shallow(<PokedexView />);

    expect(component.state().isLoading).toEqual(true);
    setTimeout(() => {
      expect(component.state().isLoading).toEqual(false);
      expect(component.contains(<LoadingView />)).toBe(false);
    }, 1000);

    jest.runAllTimers();
  });

  it('should get list of pokemons from data fetch', () => {
    jest.useFakeTimers();

    const component = shallow(<PokedexView />);

    setTimeout(() => {
      expect(component.state().total).toEqual(12);
      expect(component.state().pokemons).toHaveLength(12);
    }, 1000);
    
    jest.runAllTimers();
  });

  it('should show list of item view after data fetch', () => {
    jest.useFakeTimers();

    const component = shallow(<PokedexView />);

    setTimeout(() => {
      expect(component.find('ItemView').exists()).toEqual(true); 
      expect(component.find('ItemView').length).toEqual(12); 
    }, 1000);
    
    jest.runAllTimers();
  });

  it('should show the image on item view', () => {
    const component = shallow(<ItemView pokemon={data} />);

    expect(component.find('img').exists()).toEqual(true);
    expect(component.find("img").prop("src")).toEqual('assets/001.png');
  });

  it('should show the id with correct format on item view', () => {
    const component = shallow(<ItemView pokemon={data} />);

    expect(component.find("h4").at(0).text()).toEqual('#001');
  });

  it('should show the name on item view', () => {
    const component = shallow(<ItemView pokemon={data} />);

    expect(component.find("h4").at(1).text()).toEqual('Bulbasaus');
  });

  it('should show the list of types on item view', () => {
    const component = shallow(<ItemView pokemon={data} />);

    expect(component.find("p").length).toEqual(2);
    expect(component.find("p").at(0).text()).toEqual('Grass');
    expect(component.find("p").at(1).text()).toEqual('Poison');
  });

  it('should show the correct type background color on item view', () => {
    const component = shallow(<ItemView pokemon={data} />);
    expect(component.find("p").get(0).props.style).toHaveProperty('backgroundColor', '#91c085');
    expect(component.find("p").get(1).props.style).toHaveProperty('backgroundColor', '#b882b8');
  });
});


