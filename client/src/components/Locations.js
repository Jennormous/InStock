import arRight from "../assets/Icons/SVG/Icon-arrow-right.svg";

export default class Locations extends Component {
  render() {
    const locationInfo =
      this.props.locations &&
      this.props.locations.map(function(location) {
        return (
          <div>
            <div>
              <h3>{location.warehouse}</h3>
              <h4>{location.location}</h4>
              <img src={arRight} />
            </div>
            <div>
              <h3>{location.contact}</h3>
              <h3>{location.title}</h3>
            </div>
            <div>
              <h3>{location.phone}</h3>
              <h3>{location.email}</h3>
            </div>
            <div>
              <h3>{location.categories}</h3>
            </div>
          </div>
        );
      });

    return (
      <div>
        <h1>Locations</h1>
        <input type="text"></input>
        {locationInfo}
      </div>
    );
  }
}
