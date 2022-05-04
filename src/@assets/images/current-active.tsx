import React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props: any) {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
      <Path fill="#FFE0D1" d="M9 11h10v12H9z" />
      <Path
        d="M5 17.86c0 4.307 3.521 7.354 8.492 7.354 5.634 0 9.508-3.643 9.508-9.63C23 6.254 14.806 2 8.833 2c-.948 0-1.409.46-1.409 1.002 0 .434.23.8.583 1.3.853 1.165 2.289 2.858 2.289 4.998 0 .176-.014.366-.027.542-.596-1.11-1.653-1.896-2.926-1.896-.352 0-.542.217-.542.528 0 .366.082.637.082 1.788C6.883 12.483 5 13.972 5 17.86zm8.709 4.375c-2.127 0-3.535-1.287-3.535-3.197 0-2.004 1.422-2.722 1.612-4.009.013-.108.08-.135.162-.067.528.46.853 1.029 1.11 1.693.055.108.136.121.19.027.583-1.016.691-2.533.556-4.443-.027-.108.054-.162.149-.122 2.505 1.152 3.792 3.644 3.792 5.878 0 2.249-1.327 4.24-4.036 4.24z"
        fill="#FF641A"
      />
    </Svg>
  )
}

export default SvgComponent