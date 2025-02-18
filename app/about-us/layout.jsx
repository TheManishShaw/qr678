import { getMetaDataService } from "@/actions/get-request";

async function getMetadata(slug) {
  const res = await getMetaDataService(slug);
  return res;
}

export async function generateMetadata() {
  const metadata = await getMetadata("about-us");
  return {
    title: metadata?.title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
    authors: [{ name: "Authors" }],
  };
}

const Layout = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
