import '../styles/Aboutmiddle.css'
const background = 'aboutmiddle.jpg'

const Middle = () => {
    return (
        <article
            className='article' id='im'
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="card">
                <p id='main'>About Us</p>
                <p id='content'><br />StockBlock aimed to provide the necessary <br />information, resources and user experience for <br />people to start investing in the simplest way possible. </p>
                <p id='content'>Initially, the founding team took a lot of time <br />to understand the market and identify the users' <br />fundamental pain points.They also had to do a lot of<br/>experiments to figure out the right user experience.  </p>
            </div>

        </article>
    );
};

export default Middle;