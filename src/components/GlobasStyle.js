/** @jsxImportSource @emotion/react */
import { bgBlack } from '../constant/color';

const GlobasStyle = () => {
  return (
    <div>
      <div className="card-pink">
        Test
      </div>

      <hr />
      {/* overwrite bg color */}
      <div className="card-pink" css={bgBlack}>
        Test
      </div>
    </div>
  )
}

export default GlobasStyle;