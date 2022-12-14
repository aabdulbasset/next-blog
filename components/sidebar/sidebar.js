import * as PropTypes from "prop-types";
import { TagsComponent } from "./tagsComponent";
import { Newsletter } from "./Newsletter";
export function Sidebar(props) {
  return (
    <div
      className={"flex gap-4 flex-col gap-14 sticky items-center max-w-xs"}
      id={"sidebar"}
    >
      <TagsComponent map={props.map} />
      <Newsletter />
    </div>
  );
}
