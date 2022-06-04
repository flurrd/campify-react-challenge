import { Page } from "@/components/Page";
import { Main } from "@/components/Main";
import RvViewer from "@/components/RvViewer";
import Navbar from "@/components/Navbar";

const RvViewerPage = () => {
  return (
    <Page>
      <Navbar />
      <Main>
        <RvViewer />
      </Main>
    </Page>
  );
};

export default RvViewerPage;
