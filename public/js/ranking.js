function Ranking(){
    
    const reserchButtonElement=document.getElementById("reserchButton");
    reserchButtonElement.addEventListener("click",function(){
     
    const country= document.getElementById("reserchcountry").value;//フォームに入力された国名を取得
    const resultElement=document.getElementById("result");

    /*入力を繰り返す時、初期化する*/
    resultElement.innerHTML="";

    console.log(country)
    switch(country){
        case "フランス":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 ルーブル美術館</h2>";
            resultElement.innerHTML +="<img src= ./images/France/louvre.jpg >";

            resultElement.innerHTML +="<h2>第2位 ヴェルサイユ宮殿</h2>";
            resultElement.innerHTML +="<img src=./images/France/versailles.jpg >";

            resultElement.innerHTML +="<h2>第3位 エッフェル塔</h2>";
            resultElement.innerHTML +="<img src=./images/France/eiffel-tower.jpg>";
        break;

        case "ドイツ":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 ノイシュヴァンシュタイン城</h2>";
            resultElement.innerHTML +="<img src='/images/German/neuschwanstein.jpg'>";

            resultElement.innerHTML +="<h2>第2位 ケルン大聖堂</h2>";
            resultElement.innerHTML +="<img src=/images/German/dom.jpg >";

            resultElement.innerHTML +="<h2>第3位 ハイデルベルク城</h2>";
            resultElement.innerHTML +="<img src=/images/German/castle.jpg>";

        break;

        case "スペイン":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 サグラダファミリア教会</h2>";
            resultElement.innerHTML +="<img src='/images/Spain/sagrada-familia.jpg'>";

            resultElement.innerHTML +="<h2>第2位 グエル公園</h2>";
            resultElement.innerHTML +="<img src=/images/Spain/gaudi.jpg >";

            resultElement.innerHTML +="<h2>第3位 カサ・バトリョ</h2>";
            resultElement.innerHTML +="<img src=/images/Spain/barcelona.jpg>";

        break;

        case "イタリア":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 コロッセオ</h2>";
            resultElement.innerHTML +="<img src='/images/Italy/the-colosseum.jpg'>";

            resultElement.innerHTML +="<h2>第2位 トレヴィの泉</h2>";
            resultElement.innerHTML +="<img src='/images/Italy/trevi-fountain.jpg'>";

            resultElement.innerHTML +="<h2>第3位 サンタ・マリア・デル・フィオーレ大聖堂</h2>";
            resultElement.innerHTML +="<img src=/images/Italy/florence.jpg>";

        break;   

        case "イギリス":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br> </h2>";
            resultElement.innerHTML +="<h2>第1位 バッキンガム宮殿</h2>";
            resultElement.innerHTML +="<img src=/images/English/london.jpg>";

            resultElement.innerHTML +="<h2>第2位 大英博物館</h2>";
            resultElement.innerHTML +="<img src=/images/English/the-british.jpg>";

            resultElement.innerHTML +="<h2>第3位 ビッグ・ベン</h2>";
            resultElement.innerHTML +="<img src=/images/English/london-bridge.jpg>";

        break;    

        case "日本":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 伏見稲荷神社</h2>";
            resultElement.innerHTML +="<img src=/images/Japan/fushimi-inari.jpg>";

            resultElement.innerHTML +="<h2>第2位 宮島</h2>";
            resultElement.innerHTML +="<img src=/images/Japan/building.jpg>";

            resultElement.innerHTML +="<h2>第3位 清水寺</h2>";
            resultElement.innerHTML +="<img src=/images/Japan/temple.jpg>";

            break;       

        case "韓国":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 明洞</h2>";
            resultElement.innerHTML +="<img src=/images/Korea/myeongdong.jpg>";

            resultElement.innerHTML +="<h2>第2位 東大門デザインプラザ</h2>";
            resultElement.innerHTML +="<img src=/images/Korea/modern.jpg>";

            resultElement.innerHTML +="<h2>第3位 ソウルタワー</h2>";
            resultElement.innerHTML +="<img src=/images/Korea/lotte-world-tower.jpg>";

        break; 

        case "中国":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 天安門</h2>";
            resultElement.innerHTML +="<img src=/images/China/beijing-china.jpg>";

            resultElement.innerHTML +="<h2>第2位 故宮</h2>";
            resultElement.innerHTML +="<img src=/images/China/beijing.jpg>";

            resultElement.innerHTML +="<h2>第3位 万里の長城</h2>";
            resultElement.innerHTML +="<img src=/images/China/painting.jpg>";

        break;    

        case "シンガポール":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 マーライオンパーク</h2>";
            resultElement.innerHTML +="<img src=/images/Pole/merlion.jpg>";

            resultElement.innerHTML +="<h2>第2位 マリーナ ベイ サンズ</h2>";
            resultElement.innerHTML +="<img src=/images/Pole/marina-bay-sands.jpg>";

            resultElement.innerHTML +="<h2>第3位 ガーデンズ・バイ・ザ・ベイ</h2>";
            resultElement.innerHTML +="<img src=/images/Pole/garden.jpg>";

        break;

        case "オーストラリア":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 オペラハウス</h2>";
            resultElement.innerHTML +="<img src=/images/Australia/sydney-opera-house.jpg>";

            resultElement.innerHTML +="<h2>第2位 シドニー ハーバーブリッジ</h2>";
            resultElement.innerHTML +="<img src=/images/Australia/sydney.jpg>";

            resultElement.innerHTML +="<h2>第3位 エアーズロック</h2>";
            resultElement.innerHTML +="<img src=/images/Australia/uluru.jpg>";

        break; 

        case "アメリカ":
            resultElement.innerHTML ="<h2>「"+country+"」"+"の観光地ランキングベスト3！<br></h2>";
            resultElement.innerHTML +="<h2>第1位 タイムズスクエア</h2>";
            resultElement.innerHTML +="<img src=/images/America/times-square.jpg>";

            resultElement.innerHTML +="<h2>第2位 自由の女神</h2>";
            resultElement.innerHTML +="<img src=/images/America/statue-of-liberty.jpg>";

            resultElement.innerHTML +="<h2>第3位 セントラルパーク</h2>";
            resultElement.innerHTML +="<img src=/images/America/central-park.jpg>";

        break;                                                                                                                                                                          
        
        default:
            resultElement.innerHTML ="<h2><br>該当するデータがありません.</h2>";
        break;     
        }

    },false);

}

Ranking();