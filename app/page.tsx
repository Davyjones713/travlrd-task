import { Fragment } from "react";
import Tables from "./components/Tables";
import { fetchSupabaseData } from "@/lib/fetchSupabaseData";

export const metadata = {
  revalidate: 30,
};
export default async function asyncHome() {
  const data = await fetchSupabaseData();

  return (
    <Fragment>
      <Tables data={data} />
    </Fragment>
  );
}
