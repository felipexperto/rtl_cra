import { Fragment } from "react"
import { Link } from "react-router-dom";

function Summary() {

  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Summary;
