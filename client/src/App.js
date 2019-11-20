import React, { Component } from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Inventory from "./components/Inventory";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "1",
          warehouse: "Bowen's Place",
          country: "Canada",
          provence: "BC",
          city: "Vancouver",
          postal: "V6J 7K8",
          address: "123 Main street",
          items: [
            {
              product: "Beyblade",
              description: "Its a beyblade what more do you need to know",
              ordered: "12/12/12",
              quantity: "1,000,000",
              id: "11"
            },
            {
              product: "Big gun",
              description: "its really big",
              ordered: "12/1/19",
              quantity: "1",
              id: "12"
            },
            {
              product: "Old man and the Sea",
              description: "decent book but we have way too many of them",
              ordered: "1/22/99",
              quantity: "12,000,000",
              id: "13"
            }
          ]
        },
        {
          id: "2",
          warehouse: "Jen's goodies",
          country: "Canada",
          provence: "BC",
          city: "Vancouver",
          postal: "V6J 7K8",
          address: "123 Main street",
          items: [
            {
              product: "Shiba Inu",
              description: "Fluffy hyper doggo",
              ordered: "3/14/18",
              quantity: "10",
              id: "21"
            },
            {
              product: "Dolphin",
              description: "We will not sell to Seaworld",
              ordered: "7/4/18",
              quantity: "14",
              id: "22"
            },
            {
              product: "really shap kives",
              description: "its very sharp and we have a lot watch out Alyssa ",
              ordered: "11/19/19",
              quantity: "12,000,000",
              id: "23"
            }
          ]
        },
        {
          id: "3",
          warehouse: "Samuel's Dump",
          country: "Canada",
          provence: "BC",
          city: "Vancouver",
          postal: "V6J 7K8",
          address: "123 Main street",
          items: [
            {
              product: "Used samich",
              description: "its not as bad as it sounds just plug your nose",
              ordered: "10/1/11",
              quantity: "7.5",
              id: "31"
            },
            {
              product: "Sombody's Nan",
              description:
                "She's real sweet just needs a good bath and she's good as new",
              ordered: "8/4/19",
              quantity: "1",
              id: "32"
            },
            {
              product: "Nike",
              description: "They brand new come get em",
              ordered: "3/25/10",
              quantity: "12,000,000",
              id: "33"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Inventory warehouses={this.state.data} />
      </div>
    );
  }
}
