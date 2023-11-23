import React from "react";
import "./rating.scss";
function Rating() {
  return (
    <div>
      <h1>Rating users</h1>

      <table>
        <tr>
          <th>User</th>
          <th>Balans</th>
          <th>Country</th>
          <th>login</th>
        </tr>
        <tr>
          <td>👳🏿‍♂️ Adam</td>
          <td>12,3k</td>
          <td>Germany</td>
          <td>16.10.2023</td>
        </tr>
        <tr>
          <td>🤖 Leo</td>
          <td>11k</td>
          <td>Mexico</td>
          <td>25.10.2023</td>
        </tr>
        <tr>
          <td>🐷 Devid</td>
          <td>9,5k</td>
          <td>Austria</td>
          <td>01.11.2023</td>
        </tr>
        <tr>
          <td>🐒 You mam</td>
          <td>6,2k</td>
          <td>UK</td>
          <td>12.11.2023</td>
        </tr>
      </table>
    </div>
  );
}

export default Rating;
