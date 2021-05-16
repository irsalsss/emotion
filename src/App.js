import { Global, css } from '@emotion/react'
import Basic from "./components/Basic";
import Styled from "./components/Styled";
import MoreButton from "./components/MoreButton";
import NestedSelector from "./components/NestedSelector";
import MediaQuery from "./components/MediaQuery";
import GlobasStyle from "./components/GlobasStyle";
import { bgHotPink, white } from './constant/color';
import { p } from './constant/padding';
import { borderRadius } from './constant/sizing';

const App = () => {
  return (
    <div id="root">
      {/* <MoreButton /> */}
      {/* <Basic /> */}
      {/* <Styled /> */}
      {/* <NestedSelector /> */}
      {/* <MediaQuery /> */}

      <Global
        styles={css`
          .card-pink {
            ${bgHotPink}
            ${white}
            ${p(16)}
            ${borderRadius(4)}
          }
        `}
      />
      <GlobasStyle />
    </div>
  );
}

export default App;
