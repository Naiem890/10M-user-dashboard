import React from "react";

const UserTable = () => {
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Usage Time (Hour)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Bangladesh</td>
            <td>Male</td>
            <td>1212</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
