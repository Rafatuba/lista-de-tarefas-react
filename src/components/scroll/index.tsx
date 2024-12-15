import "./scroll-styles.css";

export default function Scroll() {
  return (
    /* From Uiverse.io by ArturCodeCraft */
    <div className="main__action">
      <div className="main__scroll-box">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      {/* <span className="main__scroll-text">Scroll</span> */}
    </div>
  );
}
