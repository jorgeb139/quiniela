import {colors} from '../../styles/theme';

export default function Button ({ children, onClick }) {

    return (
        <>
            <button onClick={onClick}>
                {children}
            </button>

            <style jsx>{`
                button{
                    align-items: center;
                    background: ${colors.black};
                    border: none;
                    cursor: pointer;
                    color: ${colors.white};
                    display: flex;
                    border-radius: 9999px;
                    font-size: 16px;
                    font-weight: 600;
                    padding: 10px 32px;
                    transition: opacity 0.3s ease;
                }

                button > :global(svg){
                    margin-right: 10px;
                }

                button:hover{
                    opacity: 0.7;
                }
            `}
            </style>
        </>
    )
}