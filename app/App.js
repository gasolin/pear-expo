import BareProvider from './src/component/BareProvider'
import HomeScreen from './src/screen/HomeScreen';

export default function App() {
  return (
    <BareProvider>
      <HomeScreen/>
    </BareProvider>
  );
}
