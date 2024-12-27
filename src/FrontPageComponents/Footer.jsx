import React from "react";
import list from '../Icons/list.png'
import menu from '../Icons/menu.png'
import person from '../Icons/person.png'
import star from '../Icons/star.png'
import dots from '../Icons/dots.png'
import '../style.css'
import { useNavigate } from "react-router-dom";

const Footer = () => {


  const navigate= useNavigate();

  const goToEditor=()=>{
    navigate('/editor')
  }

    return(
        <>
        <div id="footer">
            <div id="footerHeading">
                <h4 id="footerh4">Boards in this team</h4>
                <div id="footerbuttons">
                    <button>Explore Templates</button>
                    <button onClick={goToEditor}>+ Create New</button>
                </div>
            </div>

         <div className="footer2nd">
            
            <label htmlFor="options">Filter by</label>
            <select>
                <option>All boards</option>
                <option> Boards not in Space</option>
            </select>
            <select>
                <option>Owned by anyone</option>
                <option>Owned by me</option>
                <option>Not Owned by me</option>
            </select>
            <label>Sort by</label>
            <select>
                <option>Last opened</option>
                <option>Last modified</option>
                <option>Alphabetically</option>
                <option>Last created</option>
            </select>
            <div className="footer2ndButtons">
            <button><img src={menu}/></button>
            <button><img src={list}/></button>
            </div>
         </div>


         <div className="footerTable">
  <table>
    <thead>
      <tr className="tabledataheading">
        <th>Name</th>
        <th>Online Users</th>
        <th>Owner</th>
      </tr>
    </thead>
    <tbody>
      <tr className="tabledata">
        <td>
          <div className="name-container">
            <img src={person} alt="Person" />
            <div>
              <p>Waleed</p>
              <p>modified by Waleed, 21 Nov</p>
            </div>
          </div>
        </td>
        <td></td>
     
        <td>Waleed</td>
        <td>
          <button><img src={star}/></button> <button><img src={dots}/></button>
        </td>
      </tr>
      <tr className="tabledata">
        <td>
          <div className="name-container">
            <img src={person} alt="Person" />
            <div>
              <p>Waleed</p>
              <p>modified by Waleed, 21 Nov</p>
            </div>
          </div>
        </td>
        <td></td>
    
        <td>Waleed</td>
        <td>
          <button><img src={star}/></button> <button><img src={dots}/></button>
        </td>
      </tr>
      <tr className="tabledata">
        <td>
          <div className="name-container">
            <img src={person} alt="Person" />
            <div>
              <p>Waleed</p>
              <p>modified by Waleed, 21 Nov</p>
            </div>
          </div>
        </td>
        <td></td>
       
        <td>Artist</td>
        <td>
          <button><img src={star}/></button> <button><img src={dots}/></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>

        
        </>
    )
}

export default Footer;
