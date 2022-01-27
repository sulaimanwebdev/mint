import {useState} from 'react';
function App() {

  const [price, setprice] = useState("0.5");
  const [counter, setcounter] = useState("1");
  const [minus, setminus] = useState("disabledButton");
  const [plus, setplus] = useState("");

  let minusClicked = () =>{
    setminus("disabledButton");
    setplus("");
    setprice("0.5");
    setcounter("1");

  }


  let plusClicked = () =>{
    setminus("");
    setplus("disabledButton");
    setprice("0.10");
    setcounter("2");


  }

  return (
    <div className="App">
      <div className="logo"><img src="/images/logo.png" alt="logo" /></div>


    <div className="mainFlex">
      <div className="monkey">
          <img src="/images/monkey.png" alt="monkey" />
      </div>

       <div className="text">
         <div className="connection">
           <p>CONNECTED AS:</p>
           <div><a href="https://etherscan.io/address/0x0b997D2D69cb2186b21a5fC92A2C8850609e8e76">0x0b997D2D69cb2186b21a5fC92A2C8850609e8e76</a></div>
         </div>

         <div className="title">TEENS APES</div>
          <div className="globle publicSale">PUBLIC SALE</div>
          <div className="globle">MAX PER WALLET: 2</div>


          <div className="functionFlex">
            <div className="grid">
                <div className={`action minus ${minus}`} onClick={minusClicked}><span>-</span></div>
                <div className="number">{counter}</div>
                <div className={`action plus ${plus}`} onClick={plusClicked}><span>+</span></div>

            </div>

            <div className="price"><span>{price}</span> <div>ETH</div></div>
            
          </div>

          <div className="mintButton"><span>MINT</span></div>
   
            <div className="globle">CONGRATS! YOU HAVE MINTED: 1</div>
            <div className="globle alert">SORRY, YOU ALREADY MINTED: 2 TEENS APES.</div>



           <div className="mintPaused"><i class="fas fa-pause-circle"></i><span>MINT IS PAUSED</span></div>







       </div>
      
    </div>




    </div>
  );
}

export default App;
