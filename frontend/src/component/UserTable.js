import React from "react";

const UserTable = ({ users }) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">
            Top 10 user by usage time (Hour)
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Device</th>
              <th>Usage Time (Hour)</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>{user.fullName}</th>
                <th>{user.country}</th>
                <th>{user.gender}</th>
                <th>{user.device}</th>
                <th>{typeof user.lastActive}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
