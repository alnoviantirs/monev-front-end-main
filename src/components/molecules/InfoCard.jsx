// src/components/molecules/InfoCard.js
import React from "react";
import Icon from "../atoms/Icon";

const InfoCard = ({ data }) => {
  return (
    <div style={styles.card}>
      {data.map((item, index) => (
        <div key={index} style={styles.itemContainer}>
          <div style={styles.iconContainer(item.iconType)}>
            <Icon type={item.iconType} />
          </div>
          <div style={styles.textContainer}>
            <h3 style={styles.count}>{item.count}</h3>
            <p style={styles.title}>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sedikit bayangan untuk memberikan efek card
    gap: "20px", // Jarak antar item
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
  },
  iconContainer: (iconType) => ({
    backgroundColor:
      iconType === "gear"
        ? "#ffefc2"
        : iconType === "light"
        ? "#c2f9ef"
        : "#f3e7c1",
    padding: "12px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  textContainer: {
    marginLeft: "16px",
  },
  count: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  title: {
    fontSize: "14px",
    color: "#777",
    margin: "0",
  },
};

export default InfoCard;
