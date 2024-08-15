import React from "react";
import { Link } from "react-router-dom";

const AddItemNav = (props) => {
  const styles = {
    Button: {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "20px",
      left: "20px",
      width: "32px",
      height: "32px",
      border: "1px solid #030303",
      boxSizing: "border-box",
      boxShadow: "2px 2px 0px rgba(0,0,0,0.8)",
      color: "#030303",
      backgroundColor: "#ffffff",
      outline: "none",
    },
    Icon: {
      color: "#030303",
      fill: "#030303",
      width: "14px",
      height: "14px",
      fontSize: "14px",
    },
    ImageContainer: {
      top: "20px",
      left: "323px",
      width: "32px",
      height: "32px",
      borderRadius: "100000px",
      backgroundImage: "url(./image.jpeg)",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  };
  const defaultProps = {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxQZW9wbGV8ZW58MXx8fHwxNjg3MTY0MDEyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  };

  return (
    <div>
      <div className="flex p-4 justify-between">
        <Link to={"/"} style={styles.Button}>
          <svg style={styles.Icon} viewBox="0 0 512 512">
            <path d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"></path>
          </svg>
        </Link>
        <div className="flex gap-4">
          <Link to='/notifications' style={styles.Button}>
            <svg style={styles.Icon} viewBox="0 0 448 512">
              <path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"></path>
            </svg>
          </Link>
          <Link to="/profile">
          <div style={{
            ...styles.ImageContainer,
            backgroundImage: `url(${props.image ?? defaultProps.image})`,
          }}></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddItemNav;
