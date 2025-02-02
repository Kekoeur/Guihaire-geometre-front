import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_PAGE_DATA } from "../graphql/queries";

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query; // Récupération du slug dans l'URL
  


  const { data, loading, error } = useQuery(GET_PAGE_DATA, {
    variables: { page },
    skip: !slug, // Évite d'exécuter la requête si le slug n'est pas encore chargé
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const page = data?.pages?.data?.[0]?.attributes;

  if (!page) return <p>Page non trouvée</p>;

  return (
    <div>
      <h1>{page.Name}</h1>
      {page.Heading && (
        <section>
          <h2>{page.Heading.Title}</h2>
          <p>{page.Heading.Summary?.[0]?.Summary}</p>
        </section>
      )}
    </div>
  );
}
