import React from "react";
import {
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';

export default function HelloSomeone() {
  const history = useHistory();
  const location = useLocation();
  const { name } = useParams();
  return (
    <div>
      <h1>Hello {name} !</h1>
      <p>pathname: {location.pathname}</p>
      <p>search: {location.search}</p>
      <p>hash: {location.hash}</p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}