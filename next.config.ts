import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      domains: ['localhost'], // Remplacez 'localhost' par le domaine de votre serveur Strapi en production.
    },
};

export default nextConfig;

export async function getServerSideProps() {
  return {
      props: {}, // Pas de données spécifiques à injecter côté serveur
  };
}
