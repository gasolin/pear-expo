import BareProvider from './src/component/BareProvider'
import HomeScreen from './src/screen/HomeScreen';

import { rpcHandler } from './src/lib/rpc'

export default function App() {
  return (
    <BareProvider rpcHandler={rpcHandler}>
      <HomeScreen/>
    </BareProvider>
  );
}
