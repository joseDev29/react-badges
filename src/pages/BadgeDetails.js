import React from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

function BadgeDetails(props) {
  /* Count es un atributo de el estado y setCount es la funcion 
  que cambia ese estado, se puede hacer con mas atributos */
  //const [count, setCount] = React.useState(0);
  const [count, setCount] = useIncreaseCount(4);
  return (
    <div className="badge-details">
      <h1 className="badge-details__title">Hello {props.data.firstName}</h1>
      <h1 className="badge-details__title-2">
        What do you think of your badge?
      </h1>
      <div className="badge-details__content">
        <div className="badge-details__btns">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="badge-details__btns-item"
          >
            Increase Count: {count}
          </button>
          <Link
            to={`/badges/${props.badgeId}/edit`}
            className="badge-details__btns-item"
          >
            Edit
          </Link>
          <button
            onClick={props.onOpenModal}
            className="badge-details__btns-item"
          >
            Delete
          </button>
          <DeleteBadgeModal
            isOpen={props.modalIsOpen}
            onClose={props.onCloseModal}
            onDeleteBadge={props.onDeleteBadge}
          />
        </div>
        <div className="badge-details__badge">
          <Badge
            name={props.data.firstName}
            lastName={props.data.lastName}
            description={props.data.jobTitle}
            user={props.data.twitter}
          />
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
