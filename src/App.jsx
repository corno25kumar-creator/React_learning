import ClickEventTopic from './topics/click_Event'; // loads index.jsx automatically
import Wrapper from './components/Wrapper';
import MainComp from './topics/toggle/index'

function App() {
  return (
    <div className="w-full h-screen rounded flex flex-col">
      <div className="h-20 border-b-4 border-black rounded flex items-center p-2">
        <h1 className="font-bold text-3xl">Welcome to React Learning</h1>
      </div>

      <div className="flex-1 rounded p-4 flex items-start">
        <Wrapper>
          <ClickEventTopic />
        </Wrapper>

         <Wrapper>
            <MainComp/>
        </Wrapper>
        
      </div>
    </div>
  );
}

export default App;
