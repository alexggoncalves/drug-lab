const Intensity = ({ intensity, color = "#000000" }) => {
    if (intensity == 1) {
        return (
            <svg
                width="41"
                height="42"
                viewBox="0 0 41 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="15.7334"
                    y="14.9155"
                    width="9.8132"
                    height="25.9043"
                    rx="4.9066"
                    stroke={color}
                />
                <rect
                    x="30.5059"
                    y="1.46387"
                    width="9.8132"
                    height="39.3564"
                    rx="4.9066"
                    stroke={color}
                />
                <rect
                    x="0.462402"
                    y="27.8679"
                    width="10.8132"
                    height="13.4521"
                    rx="5.4066"
                    fill={color}
                />
            </svg>
        );
    } else if (intensity == 2) {
        return (
            <svg
                width="41"
                height="42"
                viewBox="0 0 41 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="15.5801"
                    y="14.9155"
                    width="9.8132"
                    height="25.9043"
                    rx="4.9066"
                    fill={color}
                    stroke={color}
                />
                <rect
                    x="30.3525"
                    y="1.46387"
                    width="9.8132"
                    height="39.3564"
                    rx="4.9066"
                    stroke={color}
                />
                <rect
                    x="0.309082"
                    y="27.8679"
                    width="10.8132"
                    height="13.4521"
                    rx="5.4066"
                    fill={color}
                />
            </svg>
        );
    } else {
        return (
            <svg
                width="41"
                height="42"
                viewBox="0 0 41 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="15.3311"
                    y="14.9155"
                    width="9.8132"
                    height="25.9043"
                    rx="4.9066"
                    fill={color}
                    stroke={color}
                />
                <rect
                    x="30.1035"
                    y="1.46387"
                    width="9.8132"
                    height="39.3564"
                    rx="4.9066"
                    fill={color}
                    stroke={color}
                />
                <rect
                    x="0.0600586"
                    y="27.8679"
                    width="10.8132"
                    height="13.4521"
                    rx="5.4066"
                    fill={color}
                />
            </svg>
        );
    }
};

export default Intensity;
