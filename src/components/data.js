export const cards = [
    { "id": 1, "name": "Prescribed medications" },
    { "id": 2, "name": "Health reminders" },
    { "id": 3, "name": "Medication plan" },
    { "id": 4, "name": "Healthy meal recipes" },
    { "id": 5, "name": "Music playlists" }
  ];

  const styles = {
    Icon: {
      color: "#030303",
      fill: "#030303",
      fontSize: "24px",
      top: "159px",
      left: "318px",
      width: "24px",
      height: "32px",
    },
  }

  const TickIcon = () => (
    <svg style={styles.Icon} viewBox="0 0 512 512">
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
    </svg>
  );

export const medications = [
  {
    id: 1,
    title: "Aspirin",
    dose: "100mg",
    time: "8:00 AM",
    icon: <TickIcon />,
  },
  {
    id: 2,
    title: "Metformin",
    dose: "500mg",
    time: "12:00 AM",
    icon: <TickIcon />,
  },
  {
    id: 3,
    title: "Lisinopril",
    dose: "10mg",
    time: "6:00 AM",
    icon: <TickIcon />,
  },
];