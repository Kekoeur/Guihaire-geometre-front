import React from 'react';
import RootLayout from '@/app/layout';
import ApolloProviderWrapper from '@/utilis/apolloProviderWrapped';
import HomepageContent from '@/pages/homepage';

const Homepage = ({ homepage }: { homepage: any }) => {
    return (
            <ApolloProviderWrapper>
                <HomepageContent homepage={homepage} />
            </ApolloProviderWrapper>

    );
};

export default Homepage;

export { getServerSideProps } from './homepage';
