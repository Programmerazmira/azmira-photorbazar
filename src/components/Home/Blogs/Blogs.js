import React from 'react';

const Blogs = () => {
    return (
        <div className='container m-5'>
            <h4>Difference between authorization and authentication?</h4>
            <p>
                Authentication verifies who the user is. It works with passwords, one-time PINs, biometric information and other information entered or entered by the user. Authentication is the first step in a good identity and access management process. Authentication is visible and partially changeable by the user.and otherwise Authorization determines which resource a user can access. It works through settings that are implemented and maintained by the organization. Authorization always takes place after authentication. Authorization is not visible or changeable to the user.</p>

            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Firebase helps us create and run successful apps. Developed by Google, supported by loved Accelerate app development with fully managed backend infrastructure. Learn more today. 15+ products and solutions. Monitor app performance. For mobile or web apps.</p>
            <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>

            <h4> What other services does firebase provide other than authentication?</h4>
            <p>Firebase Auth alternatives
                Firebase Alternatives :
                Parse ; Open Source Backend Platform;
                Back4app ; Parse Hosting Platform;
                Kinvey ; Mobile Backend as a Service (mBaaS) for the Enterprise;
                Backendless ; Mobile Backend and API Services Platform;
                Kuzzle ; Backend for web, hybrid, or native mobile apps and IoT projects;
                Pubnub ; Real-time APIs and Global Messaging;
                Kumulos ; App Performance Management;
                Game Sparks ; Game Backend Platform;
                Hoodie ; Generic backend with a client API for Offline First applications;
                Appwrite ; Open-Source backend for Flutter developers
                Deployd ; Simple core library, with a modular API for your application;
                NHost ; Accelerates development and provides full control;
                Amplify JS ; Open-source Javascript framework;
                Heroku ; Platform as a service backed by Salesforce.</p>
        </div>
    );
};

export default Blogs;