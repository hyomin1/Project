import React, {useEffect, useState} from 'react';
import Free from './Free';
import axios from 'axios';
const StartTwo = () => {
    const [images,setImages] = useState([
        {id :0, src: '/images/ace_of_spades.png'},
        {id :1, src: '/images/2_of_spades.png'},
        {id :2, src: '/images/3_of_spades.png'},
        {id :3, src: '/images/4_of_spades.png'},
        {id :4, src: '/images/5_of_spades.png'},
        {id :5, src: '/images/6_of_spades.png'},
        {id :6, src: '/images/7_of_spades.png'},
        {id :7, src: '/images/8_of_spades.png'},
        {id :8, src: '/images/9_of_spades.png'},
        {id :9, src: '/images/10_of_spades.png'},
        {id :10, src: '/images/jack_of_spades.png'},
        {id :11, src: '/images/queen_of_spades.png'},
        {id :12, src: '/images/king_of_spades.png'},
        {id :13, src: '/images/ace_of_clubs.png'},
        {id :14, src: '/images/2_of_clubs.png'},
        {id :15, src: '/images/3_of_clubs.png'},
        {id :16, src: '/images/4_of_clubs.png'},
        {id :17, src: '/images/5_of_clubs.png'},
        {id :18, src: '/images/6_of_clubs.png'},
        {id :19, src: '/images/7_of_clubs.png'},
        {id :20, src: '/images/8_of_clubs.png'},
        {id :21, src: '/images/9_of_clubs.png'},
        {id :22, src: '/images/10_of_clubs.png'},
        {id :23, src: '/images/jack_of_clubs.png'},
        {id :24, src: '/images/queen_of_clubs.png'},
        {id :25, src: '/images/king_of_clubs.png'},
        {id :26, src: '/images/ace_of_hearts.png'},
        {id :27, src: '/images/2_of_hearts.png'},
        {id :28, src: '/images/3_of_hearts.png'},
        {id :29, src: '/images/4_of_hearts.png'},
        {id :30, src: '/images/5_of_hearts.png'},
        {id :31, src: '/images/6_of_hearts.png'},
        {id :32, src: '/images/7_of_hearts.png'},
        {id :33, src: '/images/8_of_hearts.png'},
        {id :34, src: '/images/9_of_hearts.png'},
        {id :35, src: '/images/10_of_hearts.png'},
        {id :36, src: '/images/jack_of_hearts.png'},
        {id :37, src: '/images/queen_of_hearts.png'},
        {id :38, src: '/images/king_of_hearts.png'},
        {id :39, src: '/images/ace_of_diamonds.png'},
        {id :40, src: '/images/2_of_diamonds.png'},
        {id :41, src: '/images/3_of_diamonds.png'},
        {id :42, src: '/images/4_of_diamonds.png'},
        {id :43, src: '/images/5_of_diamonds.png'},
        {id :44, src: '/images/6_of_diamonds.png'},
        {id :45, src: '/images/7_of_diamonds.png'},
        {id :46, src: '/images/8_of_diamonds.png'},
        {id :47, src: '/images/9_of_diamonds.png'},
        {id :48, src: '/images/10_of_diamonds.png'},
        {id :49, src: '/images/jack_of_diamonds.png'},
        {id :50, src: '/images/queen_of_diamonds.png'},
        {id :51, src: '/images/king_of_diamonds.png'},
    ]);
    const [visible,setVisible] = useState(true);  //버튼 사라지게하는 상태값
    const [show,setShow] = useState(false); //버튼 누를시 카드 보이게
    const [data,setData] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
            .then((response) => { //http://localhost:8080/api/board/gameStart/1
                setData(response.data);

            });

    },[]);
    const reverseCard1 = () => { //게임 시작 후 프리플랍시 카드 뒤집기
        setTimeout(function() {
            document.getElementById("img2M1").src =images[data.id].src;  //card.data.player[0].card1
            // console.log(data.id);
        },3000);
    }//게임 시작 후 프리플랍시 카드 뒤집기
    const reverseCard2 = () => {
        setTimeout(function () {
            document.getElementById("img2M2").src= images[data.id].src;  //card.data.player[0].card2
        },3500);
    }
    const cardImg = () => {
        return (
            <div className="set2 pullDown">
                <img id="rc2_1" className="c2" src ="/images/backimage.png"/>
                <img id="rc2_2" className="c2" src ="/images/backimage.png"/>
                <img id="rc2_3" className="c2" src ="/images/backimage.png"/>
                <img id="rc2_4" className="c2" src ="/images/backimage.png"/>
                <img id="rc2_5" className="c2" src ="/images/backimage.png"/>
            </div>
        )
    }
    const playerCard1 = () => {  //player1 card1 , card2
        return (
            <div className="g2p1">
                <img id ="img2D1" src ="/images/backimage.png"/>
                <img id ="img2D2" src ="/images/backimage.png"/>
            </div>
        )
    }
    const playerCard2 = () => { //player2 card1 , card2
        return (
            <div className="g2p2">
                <img id ="img2M1" src ="/images/backimage.png"/>
                <img id ="img2M2" src ="/images/backimage.png"/>
            </div>
        )
    }
    const bett = () => {
        console.log(data.id);
    }
    return (
        <div>
            <Free visible={visible} setVisible={setVisible} show={show} setShow={setShow} cardImg={cardImg}
            playerCard1={playerCard1} playerCard2={playerCard2} data={data} setData={setData}
            reverseCard1={reverseCard1} reverseCard2={reverseCard2} images={images} setImages={setImages}
            bett={bett}/>


        </div>
    );
};

export default StartTwo;