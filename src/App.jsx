import "./App.css";
import ZodiacCalculator from "./Components/ZodiacCalculator";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from "react-share";

function App() {
  const currentPageUrl = "https://my-zodiac-sign.onrender.com/";

  return (
    <div className="App">
      <ZodiacCalculator />
      <FacebookShareButton
        url={currentPageUrl}
        quote="Please Share this on your feed."
        hashtag="#MyZodiac"
        className="shareButton"
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton url={currentPageUrl} className="shareButton">
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <TwitterShareButton url={currentPageUrl} >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </div>
  );
}

export default App;
