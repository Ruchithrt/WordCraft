import React from "react";

export default function Alert(props) {
  return (
    //props.alert && -> it method to check condition if props.alert is null its not evaluated further only if ture it is futher evaluated
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert.type}</strong>: {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
