import Head from 'next/head';

import { Movie } from '../typings';
import Row from '../components/Row';
import requests from '../utils/requests';
import Header from '../components/Header';
import Banner from '../components/Banner';

interface HomeProps {
  topRated: Movie[];
  trendingNow: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  netflixOriginals: Movie[];
}

const Home = ({
  topRated,
  trendingNow,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
  netflixOriginals
}: HomeProps) => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Watch movies, TV shows and more" />
      </Head>

      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Right Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    topRated,
    trendingNow,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    netflixOriginals
  ] = await Promise.all([
    fetch(requests.fetchTopRated).then(res => res.json()),
    fetch(requests.fetchTrending).then(res => res.json()),
    fetch(requests.fetchActionMovies).then(res => res.json()),
    fetch(requests.fetchComedyMovies).then(res => res.json()),
    fetch(requests.fetchHorrorMovies).then(res => res.json()),
    fetch(requests.fetchRomanceMovies).then(res => res.json()),
    fetch(requests.fetchDocumentaries).then(res => res.json()),
    fetch(requests.fetchNetflixOriginals).then(res => res.json())
  ]);

  return {
    props: {
      topRated: topRated.results,
      trendingNow: trendingNow.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      netflixOriginals: netflixOriginals.results
    }
  };
};
