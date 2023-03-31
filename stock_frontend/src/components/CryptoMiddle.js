import "../styles/InsMiddle.css";
const background = 'crypto_curr.jpg'
const CryptoMiddle = () => {
    return (
        <>
        <article
            className='article'
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="card">
                <p id='main'>Cryptocurrency</p>
                <p id='content'><br />Cryptocurrency, sometimes called crypto-currency<br />is any form of currency that exists digitally<br />or virtually and uses cryptography to secure transactions</p>
            </div>

        </article>
        <div className="c">
            <p>Start Trading with StockBlock Cryptos</p>
        </div>
        </>
    );
};

export default CryptoMiddle;