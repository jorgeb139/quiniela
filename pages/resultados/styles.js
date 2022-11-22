import css from "styled-jsx/css"
import { colors, fonts } from "../../styles/theme"

export default css`
  * {
    font-family: ${fonts.base};
  }

  .cardMatches {
    marginTop: 10px,
    margin:'auto',
    flex-direction: 'column',
  }

  .flexRow{
    text-align: center;
    width:100%;
    padding-top:10px
  }
  
  .dateRow{
    padding-top:5px;
    color: ${colors.white};
  }
  
  .teamsContainer{
    display: flex;
  }
  
  .cardDate {
    font-size: 14px;
    font-weight: 500;
    padding-top:10px;
    color: ${colors.white};
  }
  
  .cardResults {
    font-size: 14px;
    font-weight: 500;
    padding-top:10px;
    color: ${colors.white};
  }
  
  .cardPoints {
    font-size: 17px;
    font-weight: 500;
    padding-top:10px;
    color: ${colors.white};
  }
  
  .inputsContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 129px;
  }

  .inputField{
    width: 62px;
    height: 63px;
    border: none;
    font-size: 25px;
    font-weight: bold;
    line-height: 110%;
    padding: 9px 0 9px 0;
    outline: none;
    text-align: center;
    color: ${colors.white};
    -webkit-text-fill-color: ${colors.white};
    opacity: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    outline: none;
    position: relative;
    text-indent: 2px;
    background: url("/svg/inputEmpty.svg");
  }

  .inputField:hover{
    background: url("/svg/inputEmptyHover.svg");
  }

  .inputField:focus{
    caret-color: ${colors.white};
    background: url("/svg/inputFocus.svg");
  }

  .inputFieldFilled{
    background: url("/svg/inputActiveFilled.svg");
  }

  .inputFieldFilled:hover{
    background: url("/svg/inputFocus.svg");
  }
  
  .inputFieldFilledPast{
    background: url("/svg/inputFieldPastFilled.svg");
  }
  
  .inputFieldPast{
    background: url("/svg/inputFieldPast.svg");
  }
  
  .inputFieldFilledPast:hover{
    background: url("/svg/inputFieldPastFilled.svg");
  }
  
  .inputFieldPast:hover{
    background: url("/svg/inputFieldPast.svg");
  }
  
  .inputFieldFilledPast:focus{
    background: url("/svg/inputFieldPastFilled.svg");
  }
  
  .inputFieldPast:focus{
    background: url("/svg/inputFieldPast.svg");
  }

  .group-title{
    color: ${colors.primary};
    font-weight: 700;
    font-size: 37px
  }
`
