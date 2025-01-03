import "./sectionItem.css";

function SectionItem({ cart }) {
  return (
    <div className="cart_sections" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cart.img})`, backgroundSize: "cover" }}>
      <div className="cart_info">
        <div className="name_section_cart">{cart.name}</div>
        <div className="description_section_cart">{cart.description}</div>
        <div className="cart_section_time">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2104_177)">
                <path d="M5.49996 10.0833C8.03126 10.0833 10.0833 8.03131 10.0833 5.50001C10.0833 2.9687 8.03126 0.916672 5.49996 0.916672C2.96865 0.916672 0.916626 2.9687 0.916626 5.50001C0.916626 8.03131 2.96865 10.0833 5.49996 10.0833Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.5 2.75V5.5L7.33333 6.41667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_2104_177">
                <rect width="11" height="11" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <span className="cart_section_time_number">{cart.time}</span>
        </div>
      </div>
    </div>
  );
}

export default SectionItem;
