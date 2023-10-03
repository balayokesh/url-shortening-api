import '../styles/link.css';

export default function Link(props) {

    const handleCopy = link => {
        alert(link);
    }

    return (
        <div className="bg-white rounded d-flex align-items-center justify-content-between p-2 mb-2" id='container'>
            <p id='link' className='m-2'>{props.link}</p>
            <div className="d-flex" id='inner-container'>
                <p id='short-link' className='m-2'>{props.shortLink}</p>
                <button onClick={() => handleCopy(props.shortLink)} className="btn px-4 rounded py-2" id='copy-btn'>Copy</button>
            </div>
        </div>
    )
}