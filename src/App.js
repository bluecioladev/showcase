import { Features, SectionWrapper, Download } from "./components";
import assets from './assets';
import styles from "./styles/Global";


const App = () => {
  return (
    <>

      <SectionWrapper
        title='You own store of Nifty NFTs
     Start selling and Growing'
        description='Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace.Minuto 2:37'

        showBtn
        mockupImg={assets.homeHero}
        banner='banner'

      />

      <SectionWrapper
        title='Smart User Interface MarketPlace'
        description='Experience a buttery UI of ProfNet NFT Marketplace . Smooth constant colors of a fluent UI design,'


        mockupImg={assets.homeCards}
        reverse


      />

      <Features />

      <SectionWrapper
        title='Deployment'
        description="ProfNet usin  Expo which runs natively on all users devices.You can easily get your app into people's hands"

        
        mockupImg={assets.feature}
        reverse

      />

      <SectionWrapper
        title='Creative way to showcase the store'
        description='The app contains two screens.The firts screen list all NFTs while the second one shows the details of a specific NFT.'


        mockupImg={assets.mockup}
        banner='banner0'


      />

      <Download/>

      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>Made whit love {""}
        <span className='bold'>JavaScript mastery by Jarb's</span></p>
      </div>



    </>
  );
}

export default App;
