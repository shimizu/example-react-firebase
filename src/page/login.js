
import React from "react";

import {
  useHistory,
} from 'react-router-dom';


export default function Hello() {
  const history = useHistory();
  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={() => history.push('/hello/react-router?message=hooks#test')}
      >
        Next
      </button>
    </div>
  );
}