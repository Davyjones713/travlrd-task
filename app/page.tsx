import { Fragment } from "react";
import Tables from "./components/Tables";

export const revalidate = 1;

export default function Home() {
  return (
    <Fragment>
      <Tables />
    </Fragment>
  );
}
