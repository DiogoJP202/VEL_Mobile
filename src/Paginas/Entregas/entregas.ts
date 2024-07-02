import styled from "styled-components"
export const Container = styled.div.attrs({className: 'container'})`
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1{
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 100px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

form > div{
    margin-bottom: 75px;
}

form > div > a{
    float: right;
    text-decoration: none;
    color: #747A7B;
}

form > div > a:hover{
    float: right;
    text-decoration: none;
    color: #F38342;
}

form input{
    margin-left: 15px;
    font-weight: bold;
    font-size: 1em;
    background-color: #ECF3FB;
    border: 0;
}

.input{
    padding: 10px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #000;
}

form > input{
    font-size: 1.7em;
    color: #fff;
    padding: 15px 75px;
    border-radius: 20px;
    background-color: #F38342;
    margin-bottom: 15px;
}

form > p{
    color: #000;
}

form > img{
    display: block;
    width: 25px;
    margin-top: 15px;
}
`