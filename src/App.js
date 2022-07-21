//Crie um component de class
//Crie um array de objetos no STATE com pelo menos 6 objetos
//Faça um map do seu state e exiba os dados na tela

import "./styles.css";
import banana from "./img/Banana.png";
import arroz from "./img/arroz.png";
import feijao from "./img/feijão.png";
import bife from "./img/bife.png";
import salada from "./img/salada.png";
import suco from "./img/suco.png";

import React from "react";

export default class App extends React.Component {
  state = {
    almoco: [
      {
        id: 1,
        comida: "Arroz",
        img: arroz
      },
      {
        id: 2,
        comida: "Feijão",
        img: feijao
      },
      {
        id: 3,
        comida: "Bife",
        img: bife
      },
      {
        id: 4,
        comida: "Salada",
        img: salada
      },
      {
        id: 5,
        comida: "Suco",
        img: suco
      },
      {
        id: 6,
        comida: "Sobremesa",
        img: banana
      }
    ]
  };
  render() {
    return (
      <>
        <h1>Prato do dia</h1>
        <nav>
          {this.state.almoco.map((item) => (
            <section key={item.id}>
              <ul>
                <li>{item.comida}</li>
                <img src={item.img} alt="comidas" />
              </ul>
            </section>
          ))}
          <h1>Bom Apetite!</h1>
        </nav>
      </>
    );
  }
}
