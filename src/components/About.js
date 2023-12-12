export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <>
      <div className="container my-3">
        <h2
          className="my-2"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          About Us
        </h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Versatile Text Transformation</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is your all-in-one solution for transforming text
                effortlessly. From basic operations like case conversions and
                character count to advanced functionalities like speak, this app
                empowers users with a suite of versatile tools to manipulate
                text according to their needs.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>User-Friendly Interface</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                With an intuitive and user-friendly interface, TextUtils ensures
                a seamless experience for both novice and experienced users. The
                app's clean design and straightforward controls make it easy to
                navigate, allowing users to perform complex text manipulations
                with just a few taps or clicks.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong> Enhanced Productivity</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                Boost your productivity with TextUtils! Whether you're a writer,
                coder, or anyone dealing with text regularly, this app
                streamlines your workflow by providing quick and efficient text
                operations. Save time and effort as TextUtils becomes your go-to
                companion for text-related tasks, making your daily digital
                interactions more efficient and enjoyable.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
