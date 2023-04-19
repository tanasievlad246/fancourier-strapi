/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <h1>Register FanCourier Credentials</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <label htmlFor='clientId' name="clientId">Client ID</label>
        <input type="text" name="clientId" />
      </div>
    </div>
  );
};

export default HomePage;
