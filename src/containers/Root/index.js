import { BrowserRouter as Router } from "react-router-dom";

const Root = ({ children }) => {
  return (
    <Router>
      {children}
    </Router>
  );
};

export default Root;