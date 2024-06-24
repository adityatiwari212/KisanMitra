import React, { useState } from 'react';
import "./tailwind.css"; // Import the CSS file

import { useDispatch } from 'react-redux';
import { uploadCommunity } from '../../actions/communityAction';

const Community = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newComment = {
            comment
        };

        dispatch(uploadCommunity(newComment));

        setComment('');
    };

    return (
        <div className="community-container">
            <header className="header">
                <div className="header-content">
                    <img src={require(`./farmer.jpg` )} alt="Farmers Image" className="header-image" />
                    <h1 className="header-title">Your Review Matters</h1>
                </div>
                <form onSubmit={handleSubmit} className="comment-form">
                    <textarea
                        id="comment"
                        rows="4"
                        className="comment-input"
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </header>
            <main>
                <section className="static-reviews">
                <div className="review">

        

    <p>"The app's simplicity surprised me. It's a must-have for every farmer out there!"</p>
    <span className="author">- Ashok Patel</span>
</div>
<div className="review">
    <p>"I never thought selling crops could be this easy. Thank you for this fantastic platform!"</p>
    <span className="author">- Deepika Desai</span>
</div>
<div className="review">
    <p>"This app deserves all the praise it gets. It's truly a game-changer for farmers."</p>
    <span className="author">- Hitesh Shah</span>
</div>
<div className="review">
    <p>"The support team goes above and beyond to assist users. Kudos to them!"</p>
    <span className="author">- Jignesh Mehta</span>
</div>
<div className="review">
    <p>"I've recommended this app to all my fellow farmers. It's that good!"</p>
    <span className="author">- Kavita Singh</span>
</div>
<div className="review">
    <p>"I've seen a significant increase in my sales since I started using this app. Highly impressed!"</p>
    <span className="author">- Mahesh Sharma</span>
</div>
<div className="review">
    <p>"The app's user-friendly interface makes it accessible to farmers of all ages. Brilliantly designed!"</p>
    <span className="author">- Neha Joshi</span>
</div>
<div className="review">
    <p>"I've tried several similar apps, but none come close to this one. It's simply the best!"</p>
    <span className="author">- Parth Patel</span>
</div>
<div className="review">
    <p>"The app's features cater perfectly to the needs of farmers. It's like it was made just for us!"</p>
    <span className="author">- Prachi Shah</span>
</div>
<div className="review">
    <p>"I appreciate the constant updates and improvements made to the app. Keep up the excellent work!"</p>
    <span className="author">- Rajesh Patel</span>
</div>
<div className="review">
    <p>"Using this app has saved me so much time and effort. I can't thank the developers enough!"</p>
    <span className="author">- Reena Gupta</span>
</div>
<div className="review">
    <p>"I love how I can connect with buyers directly through the app. It's a game-changer!"</p>
    <span className="author">- Ritesh Sharma</span>
</div>
<div className="review">
    <p>"The app's performance is flawless. I've never experienced any lags or glitches."</p>
    <span className="author">- Shreya Desai</span>
</div>
<div className="review">
    <p>"I'm amazed at how quickly my produce gets sold after listing it on the app. Truly impressive!"</p>
    <span className="author">- Siddharth Patel</span>
</div>
<div className="review">
    <p>"This app has made managing my farm and sales a breeze. It's a lifesaver!"</p>
    <span className="author">- Sonal Shah</span>
</div>
                    <div className="review">
                        <p>"This app helped me sell my produce faster than ever before! Highly recommended!"</p>
                        <span className="author">- Jaydeep Shinde</span>
                    </div>
                    <div className="review">
                        <p>"Amazing platform for farmers to connect with buyers directly. Easy to use interface."</p>
                        <span className="author">- Ramesh Yadav</span>
                    </div>
                    <div className="review">
                        <p>"I've been using this app for months now, and it's been a game-changer for my farming business."</p>
                        <span className="author">- Manu Bhai Sapariya</span>
                    </div>
                    <div className="review">
                        <p>"The support team is very responsive and helpful. Any issues I've had were quickly resolved."</p>
                        <span className="author">- Kumar Chaitanya</span>
                    </div>
                    <div className="review">
                        <p>"This app has made it so much easier for me to reach a wider market and increase my sales."</p>
                        <span className="author">- Md Ismail</span>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Community;
