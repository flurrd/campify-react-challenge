import { Page } from "@/components/Page";
import { Main } from "@/components/Main";
import RvViewer from "@/components/RvViewer";
import Navbar from "@/components/Navbar";


const RvViewerPage = () => {

  return (
    <Page>
      <Navbar />
      <Main>
        <h1>RV Viewer</h1>
        <RvViewer></RvViewer>
        {/* <RvViewerUsingServerSideProps props={props.rvItems} /> */}
      </Main>
    </Page>
  );
};

export default RvViewerPage;


//Should I be geeting data from getServerSideProps?
/* export async function getServerSideProps() {
  const postsResponse = await fetch('http://localhost:3000/api/rvs');
  const rvItemsData = await postsResponse.json();

  return {
    props: {
      rvItems: rvItemsData
    }
  }
} */
