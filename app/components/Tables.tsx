import { FC } from "react";
import Table from "./Table";

interface ItemType {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface TablesProps {
  data: ItemType[];
}

const Tables: FC<TablesProps> = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        marginTop: "30px",
        marginLeft: "30px",
      }}
    >
      {data.map((item) => (
        <Table item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Tables;
