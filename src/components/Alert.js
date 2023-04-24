import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase.lower+lower.slice(1);
  };

  return (
    //&& operator means if first is not null, evaluate second one
    //if first is null, dont do anything
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}</strong> :{props.alert.msg}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  );

  {
    /* props.alert && is a syntax : it means if props.alert is defined then run the further part, if its
        not defined or is null then donot run the further part */
  }
}
