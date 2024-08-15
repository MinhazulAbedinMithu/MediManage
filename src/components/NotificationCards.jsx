import React from "react";

const NotificationCards = (props) => {
  const styles = {
    ImageContainer: {
      width: "52px",
      height: "56px",
      borderRadius: "2px",
      backgroundImage: "url(./image.png)",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    Title: {
      color: "#030303",
      fontSize: "12px",
      fontFamily: "Roboto Mono",
      lineHeight: "14px",
    },
    TimeText: {
    color: '#030303',
    fontSize: '10px',
    fontFamily: 'Roboto Mono',
    lineHeight: '13px',
  },
    Icon: {
      color: '#c4c4c4',
      fill: '#c4c4c4',
      fontSize: '24px',
      top: '107px',
      left: '263px',
      width: '24px',
      height: '24px',
    },
    HorizontalDivider: {
    width: '278px',
    height: '1px',
    backgroundColor: '#d3d3d3',
    borderRadius: '2px',
  },
  TickIcon: {
    color: '#030303',
    fill: '#030303',
    fontSize: '24px',
    width: '24px',
    height: '24px',
  },
  };

  const img1 = {
    image:
      "https://assets.api.uizard.io/api/cdn/stream/f9d5b2df-3eee-4227-a553-879716b047ce.png",
  };
  const img2 = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/62ff8b2b-ca9d-4220-a645-68515156f166.png',
  }

  const BellIcon = () => (
    <svg style={styles.Icon}  viewBox="0 0 448 512">
      <path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z">
      </path>
    </svg>
  );

  const WatchIcon = () => (
    <svg style={styles.Icon}  viewBox="0 0 512 512">
      <path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z">
      </path>
    </svg>
  );

  const TickIcon = () => (
    <svg style={styles.TickIcon}  viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none">
      </path>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
      </path>
    </svg>
  );
  
  const cards = [
    {
      id: 1,
      img: img1,
      title: "Time to take your medication!",
      time: 'Just now',
      icon: <WatchIcon />,
    },
    {
      id: 2,
      img: img2,
      title: "Reminder: Upcoming dose",
      time: '1 day ago',
      icon: <TickIcon />,
    },
  ];
  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
        <div className="flex gap-4 items-center justify-between">
          <div
            style={{
              ...styles.ImageContainer,
              backgroundImage: `url(${props.image ?? card.img.image})`,
            }}
          ></div>
          <div>
          <p style={styles.Title}>{card.title}</p>
          <small style={styles.TimeText}>{card.time}</small>
          </div>
          <div className='flex gap-4'>
          <BellIcon />
          {card.icon}
          </div>
          </div>
          <div className='flex justify-center my-2'>
          <div style={styles.HorizontalDivider}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationCards;
