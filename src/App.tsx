import './App.css';
// The remote component provided by federation_provider
import ProviderButton from 'federation_provider/button';
import ProviderGradientHeader from 'federation_provider/header';

const App = () => {
  return (
    <div className="content">
      <ProviderGradientHeader />
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <ProviderButton />
      </div>
    </div>
  );
};

export default App;