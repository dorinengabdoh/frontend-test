import "./location.css";
import add from "../../assets/icons/Add.svg";
import savelocation from "../../assets/icons/savelocation.svg";
import activelocation from "../../assets/icons/activelocation.svg";
import searchnormal from "../../assets/icons/search-normal.svg";
import arrowdown from "../../assets/icons/arrow-down.svg";
import location from "../../assets/icons/location.svg";
import Checkbox from "../../assets/icons/Checkbox.svg";
import down from "../../assets/icons/down.svg";
import people1 from "../../assets/icons/people1.svg";
import people2 from "../../assets/icons/people2.svg";
import image287 from "../../assets/icons/image 287.svg";
import eye from "../../assets/icons/eye.svg";
import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";

const Location = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="locationContainer">
          <div className="saveLcation">
            <div className="saveLocationleft">
              <h1 className="number">152</h1>
              <p className="bold">Saved Locations</p>
              <div className="add">
                <img className="" src={add} alt="" />
                <p className="text">4 newly saved locations </p>
              </div>
            </div>
            <div className="saveLocationRight">
              <img className="saveLoc" src={savelocation} alt="" />
            </div>
          </div>
          <div className="saveLcation">
            <div className="saveLocationleft">
              <h1 className="number">78</h1>
              <p className="bold">Active Locations</p>
              <div className="add">
                <img className="" src={add} alt="" />{" "}
                <p className="text">2 newly saved locations </p>
              </div>
            </div>
            <div className="saveLocationRight">
              <img className="saveLoc" src={activelocation} alt="" />
            </div>
          </div>
        </div>
        <div className="addLocation">
          <div className="searchLocation">
            <div className="search">
              <img className="searchIcon" src={searchnormal} alt="" />
              <p>Search location</p>
            </div>
            <div className="filter">
              <p>Filter By</p>
              <img className="arrow" src={arrowdown} alt="" />
            </div>
            <div className="filter">
              <p>Sort By</p>
              <img className="arrow" src={arrowdown} alt="" />
            </div>
          </div>
          <div>
            <button className="addlocation">
              <img src={location} alt="" />
              <p>Add Location</p>
            </button>
          </div>
        </div>
        <div className="data">
          <div className="texte">
            <p className="export">Export Data</p>
            <button className="btn">CSV</button>
            <button className="btn">PDF</button>
            <button className="btn">EXCEL</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>
                  <img src={Checkbox} alt="" />
                </th>
                <th>
                  <div className="city">
                    <p>Town/City</p>
                    <img src={down} alt="" />
                  </div>
                </th>
                <th>
                  <div className="city">
                    <p>Employees Onsite</p>
                    <img className="icon" src={down} alt="" />
                  </div>
                </th>
                <th>
                  <div className="citi">
                    <p>Download QRCode</p>
                    <img src={down} alt="" />
                  </div>
                </th>
                <th>
                  <div className="city">
                    <p>Action</p>
                    <img src={down} alt="" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={Checkbox} alt="" />
                </td>
                <td>
                  <div className="city">
                    <p>Bastos,Yaounde</p>
                  </div>
                </td>
                <td>
                  <div className="city">
                    <img className="people1" src={people1} alt="" />
                    <img className="people2" src={people2} alt="" />
                    <img className="image" src={image287} alt="" />
                    <p className="none"></p>
                  </div>
                </td>
                <td>
                  <button className="BtnN">Download QRCode</button>
                </td>
                <td>
                  <div className="citys">
                    <img src={eye} alt="" />
                    <img src={edit} alt="" />
                    <img src={trash} alt="" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={Checkbox} alt="" />
                </td>
                <td>
                  <div className="city">
                    <p> Moly kodd, Buea</p>
                  </div>
                </td>
                <td>
                  <div className="city">
                    <img className="people1" src={people1} alt="" />
                    <img className="people2" src={people2} alt="" />
                    <img className="image" src={image287} alt="" />
                    <p className="none"></p>
                  </div>
                </td>
                <td>
                  <button className="BtnN">Download QRCode</button>
                </td>
                <td>
                  <div className="citys">
                    <img src={eye} alt="" />
                    <img src={edit} alt="" />
                    <img src={trash} alt="" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={Checkbox} alt="" />
                </td>
                <td>
                  <div className="city">
                    <p>Small Soppo,Buea</p>
                  </div>
                </td>
                <td>
                  <div className="city">
                    <img className="people1" src={people1} alt="" />
                    <img className="people2" src={people2} alt="" />
                    <img className="image" src={image287} alt="" />
                    <p className="none"></p>
                  </div>
                </td>
                <td>
                  <button className="BtnN">Download QRCode</button>
                </td>
                <td>
                  <div className="citys">
                    <img src={eye} alt="" />
                    <img src={edit} alt="" />
                    <img src={trash} alt="" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={Checkbox} alt="" />
                </td>
                <td>
                  {" "}
                  <div className="city">
                    <p>Simbock,Yaounde</p>
                  </div>
                </td>
                <td>
                  <div className="city">
                    <img className="people1" src={people1} alt="" />
                    <img className="people2" src={people2} alt="" />
                    <img className="image" src={image287} alt="" />
                    <p className="none"></p>
                  </div>
                </td>
                <td>
                  {" "}
                  <button className="BtnN">Download QRCode</button>
                </td>
                <td>
                  <div className="citys">
                    <img src={eye} alt="" />
                    <img src={edit} alt="" />
                    <img src={trash} alt="" />
                  </div>
                </td>
              </tr>
            </tbody>
            <div className="bottom">
              <button className="prevBtn">prev</button>
              <p>
                <span className="one">1</span> 2 3 5 - 19
              </p>
              <button className="prevBtn">Next</button>
            </div>
          </table>
        </div>
      </div>
    </>
  );
};

export default Location;
