import { Fragment } from "react";
import Tables from "./components/Tables";

export const revalidate = 30;
export const dynamic = "force-dynamic";

export default function asyncHome() {
  return (
    <Fragment>
      <Tables />
    </Fragment>
  );
}
