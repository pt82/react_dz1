import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';


import Products from "./Products.js";
import View from "./view.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      
      products: [
        { title: "Кресло", price: 200 },
        { title: "диван", price: 100 },
        { title: "стул1", price: 600 }
      ],

  
    };
  }

  render() {
    let items = [];
    let items2 = [];
    for (let i = 0; i < this.state.products.length; i++) {
      items.push(
        <Products
          title={this.state.products[i].title}
          price={this.state.products[i].price}
        />
      );
    }


    return (
    <h1> <div>{items}</div></h1>
    
    );
  }
}

var pr = document.getElementById('root')
var vi = document.getElementById('root2')

class App2 extends Component {
  constructor() {
    super();
    let getYear = new Date().getFullYear();
    this.state = {
      
       view: [
        { title1: "Заметка1", desc: 'Описание заметки1', data: getYear},
        { title1: "Заметка2", desc: 'Описание заметки2', data: 'текущий год = ' + getYear},
        { title1: "Заметка3", desc: 'Описание заметки3', data: 'текущий год = ' + getYear}
       
      ]
    };
  }

  render() {
   
    let items2 = [];
   
    for (let i = 0; i < this.state.view.length; i++) {
      items2.push(
        <View
          title={this.state.view[i].title1}
          data={this.state.view[i].data}
          desc={this.state.view[i].desc}
         
        />
      );
    }

    return (
   <div>{items2} </div>
    );
  }
}

function ShowProducts() {
  function onClick() {
  vi.style.display = "none"
  pr.style.display = "block"
  render(<App />, pr);
  }

  return (
    <button onClick={onClick}>Показать продукты</button>
  );
}

function ShowZametki() {
  function onClick() {
  pr.style.display = "none"
  vi.style.display = "block"
  render(<App2 />, vi);
  }

  return (
    <button onClick={onClick}>Показать заметки</button>
  );
}

render(<ShowProducts />, document.getElementById('root3'));

render(<ShowZametki />, document.getElementById('root4'));


