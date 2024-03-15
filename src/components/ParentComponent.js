import ChildComponent from "./ChildComponent";
import PageNameContext from "./PageNameContext";

const ParentComponent = () => {
  return (
    <PageNameContext.Provider value="ParentPage">
      <h1>Parent Page</h1>
      <ChildComponent />
    </PageNameContext.Provider>
  );
};

export default ParentComponent;
