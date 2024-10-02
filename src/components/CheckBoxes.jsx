function CheckBoxes({ timeSpent, handleCheckChange }) {
    
    return (
        <>
            <ul>
                <li>
                    <label><input name="spend-time" type="checkbox" value="swimming" checked={timeSpent.includes("swimming")} onChange={handleCheckChange} />Swimming</label>
                </li>
                <li>
                    <label><input name="spend-time" type="checkbox" value="bathing" checked={timeSpent.includes("bathing")} onChange={handleCheckChange} />Bathing</label>
                </li>
                <li>
                    <label><input name="spend-time" type="checkbox" value="chatting" checked={timeSpent.includes("chatting")} onChange={handleCheckChange} />Chatting</label>
                </li>
                <li>
                    <label><input name="spend-time" type="checkbox" value="noTime" checked={timeSpent.includes("noTime")} onChange={handleCheckChange} />I don't like to spend time with it</label>
                </li>
            </ul>
        </>
    );
}

export default CheckBoxes