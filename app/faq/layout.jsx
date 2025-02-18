import { getMetaDataService } from "@/actions/get-request";
import { Metadata } from "next";

async function getMetadata(slug) {
  const res = await getMetaDataService(slug);
  return res;
}

export async function generateMetadata() {
  const metadata = await getMetadata("faq");
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
