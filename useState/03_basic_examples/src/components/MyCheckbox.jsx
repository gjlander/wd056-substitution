import { useState } from 'react';

const MyCheckbox = () => {
    const [liked, setLiked] = useState(true);

    function handleChange(e) {
        setLiked(e.target.checked);
    }

    return (
        <>
            <label>
                <input
                    checked={liked}
                    onChange={handleChange}
                    type='checkbox'
                />
                I liked this
            </label>
            <p>You {liked ? 'liked' : 'did not like'} this.</p>
        </>
    );
};

export default MyCheckbox;
