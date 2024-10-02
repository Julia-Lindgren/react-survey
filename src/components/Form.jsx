import React, { useEffect, useState } from 'react';
import RadioButtons from './RadioButtons.jsx';
import CheckBoxes from './CheckBoxes.jsx';



function Form({ onSubmit, currentAnswer, editMode}) {
    const [formData, setFormData] = useState({
        colorRating: '',
        timeSpent: [],
        review: '',
        username: '',
        email: ''
    });

    useEffect(() => {
        if (currentAnswer) {
            setFormData(currentAnswer);
        }
    }, [currentAnswer]);

    const handleRadioChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            colorRating: e.target.value
        }));
    };

    const handleCheckChange = (e) => {
        const {value, checked} = e.target;

        setFormData((prevData) => {
            const updatedTimeSpent = checked
                ? [...prevData.timeSpent, value] 
                : prevData.timeSpent.filter((item) => item !== value); 
    
            return {
                ...prevData,
                timeSpent: updatedTimeSpent,
            };
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            colorRating: '',
            timeSpent: [],
            review: '',
            username: '',
            email: ''
        });
    }

    return (
        <form className="form" onSubmit = {handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtons colorRating={formData.colorRating} handleRadioChange={handleRadioChange} />
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <CheckBoxes timeSpent={formData.timeSpent} handleCheckChange={handleCheckChange} />
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    value={formData.review}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            <label>
                Put your name here (if you feel like it):
                <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
            </label>
            <label>
                Leave us your email pretty please??
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <input className="form__submit" type="submit" value={editMode ? "Update Answer" : "Submit Survey!"} />
        </form>
    )
}

export default Form;