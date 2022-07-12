import Main from '../../pages/main-page/main-page';

type AppProps = {
  placesCount: string;
}

function App({placesCount} : AppProps): JSX.Element {
  return <Main placesCount={placesCount}/>;
}

export default App;
