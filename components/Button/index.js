import { colors } from "../../styles/theme"
import { addOpacityToColor } from "../../styles/utils"

const buttonOpacityColor = addOpacityToColor(colors.white, 0.8)

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>

      <style jsx>
        {`
          button {
            align-items: center;
            background: ${buttonOpacityColor};
            border: none;
            cursor: pointer;
            color: ${colors.black};
            display: flex;
            border-radius: 9999px;
            font-size: 16px;
            font-weight: 600;
            padding: 10px 72px;
            transition: opacity 0.3s ease;
            margin-top: 16px;
            width: 250px;
            transition: 0.3s;
          }

          button > :global(svg) {
            margin-right: 10px;
          }

          button:hover {
            background: ${colors.white};
          }
        `}
      </style>
    </>
  )
}
