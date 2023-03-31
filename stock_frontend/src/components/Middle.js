import "../styles/Middle.css";
const background = 'photo.jpg'
const Middle = () => {
    return (
        <article
            className='article'
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="card">
                <p id='main'>Easy.<br />Fast.<br />Transparent.</p>
                <p id='content'><br />Investing in India was none of<br />these but we are changing that.<br />Super easy to use, lightning fast<br /> andcrystal clear</p>
            </div>

        </article>
    );
};

export default Middle;
