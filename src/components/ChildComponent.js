import { useContext } from "react";
import PageNameContext from "./PageNameContext";

const ChildComponent = () => {
  const pageName = useContext(PageNameContext);
  return (
    <div>
      <h1> Hello this is from Child from pagename {pageName}</h1>
    </div>
  );
};

export default ChildComponent;
