import { fetchSupabaseData } from "@/lib/fetchSupabaseData";
import Table from "./Table";

interface ItemType {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Tables = async () => {
  const data: ItemType[] = await fetchSupabaseData();

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
