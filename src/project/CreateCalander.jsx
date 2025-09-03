export const CreateCalander = ({ name, fontColor, backColor ,save}) => {
  return (
    <>
      <form className="my-form">
        <h1>שם הלוח</h1>
        <input placeholder="הכנס שם לוח" onBlur={(e) => name(e.target.value)} />

        <h1>צבע האותיות</h1>
        <input type="color" onChange={(e) => fontColor(e.target.value)} />

        <h1>צבע רקע</h1>
        <input type="color" onChange={(e) => backColor(e.target.value)} />
                  <button onClick={save}>שמירת שינויים</button>
  
      </form>
    </>
  );
};
