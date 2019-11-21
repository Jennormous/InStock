import React, { Component } from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Locations from "./components/Locations";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouses: [
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
              id: "11",
              status: "In Stock"
            },
            {
              product: "Big gun",
              description: "its really big",
              ordered: "12/1/19",
              quantity: "1",
              id: "12",
              status: "In Stock"
            },
            {
              product: "Old man and the Sea",
              description: "decent book but we have way too many of them",
              ordered: "1/22/99",
              quantity: "12,000,000",
              id: "13",
              status: "In Stock"
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
              id: "21",
              status: "In Stock"
            },
            {
              product: "Dolphin",
              description: "We will not sell to Seaworld",
              ordered: "7/4/18",
              quantity: "14",
              id: "22",
              status: "In Stock"
            },
            {
              product: "really shap kives",
              description: "its very sharp and we have a lot watch out Alyssa ",
              ordered: "11/19/19",
              quantity: "12,000,000",
              id: "23",
              status: "In Stock"
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
              id: "31",
              status: "In Stock"
            },
            {
              product: "Sombody's Nan",
              description:
                "She's real sweet just needs a good bath and she's good as new",
              ordered: "8/4/19",
              quantity: "1",
              id: "32",
              status: "In Stock"
            },
            {
              product: "Nike",
              description: "They brand new come get em",
              ordered: "3/25/10",
              quantity: "12,000,000",
              id: "33",
              status: "In Stock"
            }
          ]
        }
      ],
      locations: [
        {
          id: "1",
          warehouse: "Bowen's Place",
          location: "Nun of ya bizniz",
          contact: "George dubyuh",
          title: "Prezdent",
          phone: "1(800) plz-vote",
          email: "george@texas.com",
          categories: "Toys, Guns, Chew, Books"
        },
        {
          id: "2",
          warehouse: "Jen's goodies",
          location: "Right down the street",
          contact: "Daddy Mattias",
          title: "Sugar Baby",
          phone: "1(800) shiba",
          email: "jensad@gmail.com",
          categories: "Dogs, all aminals, knives, gin & tonics"
        },
        {
          id: "3",
          warehouse: "Samuel's Dump",
          location: "the dump",
          contact: "Codee Palmer",
          title: "Garbage Boy",
          phone: "1(800) garbage",
          email: "garbage@junkmail.com",
          categories: "Trash, Grandma, Shoes, semi clean socks"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Inventory warehouses={this.state.warehouses} />}
          />

          <Route
            path="/locations"
            render={props => <Locations locations={this.state.locations} />}
          />
        </Switch>
      </div>
    );
  }
}
