import * as React from 'react'
import { SvgProps } from './interfaces/SvgProps'

const SvgComponent: React.FC<SvgProps> = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 410 410' xmlSpace='preserve' {...props}>
    <path
      style={{
        fill: '#d80027'
      }}
      d='M345.01 207.769v.001L250 297.5 385 410V170z'
    />
    <path
      style={{
        fill: '#ff5023'
      }}
      d='M25 170v240l135-112.5z'
    />
    <path
      style={{
        fill: '#d80027'
      }}
      d='M160 297.5 25 410h180v-70z'
    />
    <path
      style={{
        fill: '#a2001d'
      }}
      d='M205 340v70h180L250 297.5z'
    />
    <path
      style={{
        fill: '#ff5023'
      }}
      d='M64.993 132.229 25 170h39.99zM385 170l-39.995-37.773.003 37.773zM205 0l-63.787 60.243 127.413-.151z'
    />
    <path
      style={{
        fill: '#a2001d'
      }}
      d='M345.01 207.769 385 170h-39.992zM205 340 64.986 207.765 64.99 170H25l135 127.5z'
    />
    <path
      style={{
        fill: '#dedde0'
      }}
      d='M64.986 207.765 205 340l45-42.5 95.01-89.73v-.001L345.008 170l-.003-37.773L345 60l-76.374.092-127.413.151L65 60.334l-.007 71.895L64.99 170l-.004 37.765zM115 180h180v30H115v-30zm0-30v-30h180v30H115z'
    />
    <path
      style={{
        fill: '#fff'
      }}
      d='M115 120h180v30H115zM115 180h180v30H115z'
    />
  </svg>
)

export default SvgComponent
