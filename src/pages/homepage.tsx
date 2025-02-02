import React from 'react';
import { gql } from '@apollo/client';
import { initializeApollo } from '@/utilis/apolloProviderWrapped';
import renderComponent from '@/utilis/renderComponent';
import { HomepageData } from '@/types/api';

const GET_HOMEPAGE = gql`
    query GetHomepage {
        homepage {
            __typename
            Heading {
                ... on ComponentSectionHeadingSummary {
                    Title
                    Summary {
                        Title {
                            TextBefore
                            TypingElt {
                                Element
                                id
                            }
                            TextAfter
                        }
                        Summary
                    }
                    Button {
                        Texte
                        RedirUrl
                    }
                    BackgroundImage {
                        ImgTitle
                        ImgAlt
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                    }
                }
            }
            Section {
                ... on ComponentSectionLocation {
                    Title
                    Plan {
                        ImgTitle
                        ImgAlt
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                    }
                    AdressTitle
                    Adress
                    RedirGPS {
                        Image {
                            ImgTitle
                            ImgAlt
                            Image {
                                url
                                previewUrl
                                formats
                                height
                                width
                                name
                                size
                            }
                        }
                        RedirUrl
                    }
                    ScheduleTitle
                    Schedule
                    OfficeImg {
                        ImgTitle
                        ImgAlt
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                    }
                }
            }
        }
    }
`;

const HomepageContent = ({ homepage }: { homepage: HomepageData }) => {
    if (!homepage) {
        return <p>No data available</p>;
    }

    console.log(homepage.Heading);

    return <div>{renderComponent(homepage)}</div>;
};

// Fonction getServerSideProps pour récupérer les données côté serveur
export async function getServerSideProps() {
    const client = initializeApollo();

    try {
        const { data } = await client.query({
            query: GET_HOMEPAGE,
        });

        return {
            props: {
                homepage: data.homepage || null,
            },
        };
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        return {
            props: {
                homepage: null,
            },
        };
    }
}

export default HomepageContent;
