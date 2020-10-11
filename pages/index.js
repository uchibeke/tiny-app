import React from 'react';
import Link from 'next/link';
import { apiBase } from '../utils/apiServer';
import fetch from 'isomorphic-unfetch';

const Index = ({ users }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <table className="home-table">
        <thead>
          <tr>
            <th className="home-cell">ID</th>
            <th className="home-cell">Name</th>
            <th className="home-cell"></th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, firstName, publish_date }, index) => (
            <tr key={id}>
              <td className="home-cell">{index + 1}</td>
              <td className="home-cell">{firstName}</td>
              <td className="home-cell">
                <Link href={`/user/${id}`}>view</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Index.getInitialProps = async (context) => {
  const res = await fetch(`${apiBase}users`);
  const users = await res.json();
  return { users: users };
};

export default Index;
