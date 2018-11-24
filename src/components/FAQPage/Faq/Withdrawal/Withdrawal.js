import React from 'react';

const withdrawal = ( props ) => {
    return (
        <div>
            <h5>How can I withdraw funds?</h5>
            <p> Login to your account using your username and password and check the Withdraw section.</p>
            <h5>Does profit paid directly to my currency account?</h5>
            <p> No, profits are gathered on your Btc-gains account and you can withdraw them anytime.</p>
            <h5> is there any withdraw fee?</h5>
            <p> yes we detect 2% on any withdrawal ( withdrawal fee is use for send you instant payments, it is for system avg fee apply )</p>
            <h5> is withdrawal automatic?</h5>
            <p> yes withdrawal is automatic but with cap of $10 to $1000.</p>
            <h5> how automatic withdrawal cap system works?</h5>
            <p>automatic withdrawal cap system depend on daily limit 7% of total remaining limit,
            for example: daily limit is $10,000 so cap on $700 and after some time $9,000 is withdrawal by investors then limits down to $70. </p>
            <h5> After I make a manual withdrawal request, when will you send funds?</h5>
            <p> manual withdrawal Funds are usually send within 2 business hours but it can be take upto 24 business hours.</p>
        </div>
    )
}

export default withdrawal;