import "../styles/InsMiddle.css";
const background = 'stock_curr.jpg'
const CryptoMiddle = () => {
    return (
        <>
        <article
            className='article'
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="card">
                <p id='main'>Stock</p>
                <p id='content'><br /> The subscribed capital of a corporation<br />or limited-liability company, usually divided into <br /> shares and represented by transferable certificates</p>
            </div>

        </article>
        <div className="c">
            <p>Start Trading with StockBlock Stocks</p>
        </div>
        </>
    );
};

export default CryptoMiddle;