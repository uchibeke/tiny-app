import React from 'react';
import { apiBase } from '../../utils/apiServer';
import fetch from 'isomorphic-unfetch';

const Index = ({ user }) => {
  return (
    <div>
      <h1>User profile</h1>
      <h3>{user.firstName}</h3>
    </div>
  );
};

Index.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch(`${apiBase}user/?id=${id}`);
  const user = await res.json();
  return { user: user };
};

export default Index;
