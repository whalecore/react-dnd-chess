import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "./Contstants";
import { knightImage } from "./knightImage";

const Knight = () => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: "bold",
          cursor: "grab",
        }}
      >
        ♘
      </div>
    </>
  );
};

export default Knight;
