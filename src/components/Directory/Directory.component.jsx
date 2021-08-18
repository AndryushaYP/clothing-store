import React from "react";
import "./Directory.styles.scss";
import MenuItem from "../MenuItem/MenuItem.component";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = () => {
  const sections = useSelector((state) => selectDirectorySections(state));
  console.log(sections);
  return (
    <section className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </section>
  );
};

export default Directory;
