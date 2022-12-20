import Head from 'next/head';

import styles from '@/pages/index.module.scss';
import Layout from '@/components/Layout';

const seoDescription = `
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Home = () => {
    return (
        <Layout title={'Rachel Aronne Yoga'} description={seoDescription}>
            <span>Rachel</span>
        </Layout>
    );
};

export default Home;
