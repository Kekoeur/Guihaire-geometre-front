import { GetServerSidePropsContext } from "next";
import { initializeApollo } from "@/utils/apolloClient";
import { GET_NAVIGATION, GET_PAGE_DATA } from "@/graphql/queries";
import { NavigationItem, PageProps } from "@/types/pages";
import SectionRenderer from "@/utils/renderComponent";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const client = initializeApollo();

  try {
    // Faire une première requête pour récupérer l'ID à partir du slug
    const { data: navData } = await client.query({
      query: GET_NAVIGATION,
      variables: { navigationIdOrSlug: "navigation-fr" },
    });

    const pageId = navData?.renderNavigation.find(
      (item: NavigationItem) => item.uiRouterKey === "acceuil"
    )?.related.documentId;
   
    console.log("pageid",pageId)

    if (!pageId) {
      return { notFound: true };
    }

    // Faire la deuxième requête pour récupérer les données de la page
    const { data } = await client.query({
      query: GET_PAGE_DATA,
      variables: { documentId: pageId },
    });

    console.log(data)

    return {
      props: {
        pageData: data.page || null,
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return {
      props: { pageData: null },
    };
  }
}

const Homepage = (props: PageProps) => {
  const page = props.pageData;
  console.log("page",page)
  return (
    <div>
      {page?.Sections?.map((element, index) => (
        <SectionRenderer key={index} section={element} />
      ))}
    </div>
  );
};

export default Homepage;
