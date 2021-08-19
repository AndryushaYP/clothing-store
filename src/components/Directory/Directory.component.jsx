import React from "react";
import { DirectoryMenuContainer } from "./Directory.styles";
import MenuItem from "../MenuItem/MenuItem.component";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = () => {
  const sections = useSelector((state) => selectDirectorySections(state));

  return (
    <DirectoryMenuContainer>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
