import React from "react";
import "./Directory.styles.scss";
import DIRECTORY_DATA from "./directory.data";
import MenuItem from "../MenuItem/MenuItem.component";

const Directory = () => {
  const [directoryData, setDirectoryData] = React.useState(DIRECTORY_DATA);
  return (
    <section className="directory-menu">
      {directoryData.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </section>
  );
};

export default Directory;
