import { useRef, useState } from "react";
import Swal from "sweetalert2";
const compressImage = (file, callback) => {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const maxWidth = 400;
      const scale = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * scale;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.5);
      callback(compressedDataUrl);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
};

export const AddEvent = ({ list, user, flag }) => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [hebrewCalendar, setHebrewCalendar] = useState(
    list[user].hebrewCalendar
  );
  const texteRef = useRef();
  const imgRef = useRef();

  const events = [
    {
      text: "יומולדת",
      type: ["🎉", "🎊", "🎂", "🎁", "🕯️", "🎈"],
      color: "#FF69B4",
    },
    {
      text: "שבת",
      type: ["🕯️", "🍷", "🍞", "🌙", "🕍", "📖"],
      color: "#FFD700",
    },
    {
      text: "חג",
      type: ["🎁", "🎈", "🌟", "🥳", "🍽️", "🎶"],
      color: "#32CD32",
    },
    {
      text: "טיול",
      type: ["🚌", "🏞️", "🎒", "🥾", "📸", "🌄"],
      color: "#87CEFA",
    },
    {
      text: "חתונה",
      type: ["💍", "👰", "🤵", "💒", "🎊", "🎶"],
      color: "#FFB6C1",
    },
    {
      text: "יום נישואין",
      type: ["💖", "💑", "🎉", "🥂", "🌹", "💌"],
      color: "#FF69B4",
    },
    {
      text: "בר מצווה",
      type: ["🧒", "🎉", "📖", "🕍", "🎁", "👔"],
      color: "#1E90FF",
    },
    {
      text: "בת מצווה",
      type: ["👧", "🎀", "🎊", "👗", "💐", "🎈"],
      color: "#DA70D6",
    },
    {
      text: "מבחן",
      type: ["📚", "📝", "🤓", "📖", "✏️", "📏"],
      color: "#FFA500",
    },
    {
      text: "חלאקה",
      type: ["✂️", "👦", "🎈", "📸", "🧁", "🧢"],
      color: "#A0522D",
    },
    {
      text: "ברית",
      type: ["👶", "🍼", "💙", "🎁", "👼", "🎀"],
      color: "#ADD8E6",
    },
    {
      text: "תענית",
      type: ["😔", "🕯️", "📖", "🙇‍♂️", "🕯", "💭"],
      color: "#708090",
    },
    {
      text: "בדיקה רפואית",
      type: ["💉", "🩺", "🏥", "📋", "🧪", "💊"],
      color: "#90EE90",
    },
    {
      text: "בדיקת סוכר",
      type: ["🩸", "📊", "🧃", "🧬", "🔬", "🍬"],
      color: "#FF6347",
    },
    {
      text: "פגישה",
      type: ["🗓️", "🕒", "💬", "🤝", "📍", "✏️"],
      color: "#4682B4",
    },
    {
      text: "אירוע משפחתי",
      type: ["👨‍👩‍👧‍👦", "🍽️", "🎶", "🎉", "📸", "❤️"],
      color: "#FFC0CB",
    },
    {
      text: "רופא שיניים",
      type: ["🦷", "😁", "🪥", "🧼", "💺", "🔍"],
      color: "#E0FFFF",
    },
    {
      text: "מחנה",
      type: ["🏕️", "🔥", "🚌", "🌌", "🧢", "🥫"],
      color: "#556B2F",
    },
    {
      text: "חופש",
      type: ["🌞", "😎", "⛱️", "🏖️", "🍦", "📸"],
      color: "#FFDAB9",
    },
  ];

  const add = () => {
    if (month === "" || day === "" || text === "" || type === "") {
      Swal.fire({
        icon: "warning",
        title: "אנא מלאי את כל השדות",
        toast: true,
        timer: 2000,
        showConfirmButton: false,
        position: "top-end",
      });
      return;
    }

const file = imgRef.current.files[0];

const proceedWithAdd = (compressedImage = null) => {
  const event1 = [...hebrewCalendar.month[month].days[day].events];
  const month1 = [...hebrewCalendar.month];

  if (event1.length < 3) {
    event1.push({
      text: events[text].text + " " + texteRef.current.value,
      type: events[text].type[type],
      color: events[text].color,
    });

    if (compressedImage) {
      event1[event1.length-1].img = compressedImage;
    }

    month1[month].days[day].events = [...event1];
    const updatedCalendar = { ...hebrewCalendar, month: month1 };

    setHebrewCalendar(updatedCalendar);
    list[user].hebrewCalendar = updatedCalendar;

    const updatedList = [...list];
    updatedList[user] = { ...updatedList[user], hebrewCalendar: updatedCalendar };
    setHebrewCalendar(updatedCalendar);
    window.localStorage.setItem("allCalender", JSON.stringify(updatedList));

    Swal.fire({
      icon: "success",
      title: "האירוע נוסף בהצלחה",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      position: "top-end",
      toast: true,
    });
    flag(false);
  } else {
    Swal.fire({
      icon: "error",
      title: "לא ניתן להוסיף יותר מ-3 אירועים ביום זה",
      toast: true,
      position: "top-end",
      timer: 3000,
      showConfirmButton: false,
    });
  }
};

if (file) {
  compressImage(file, (compressedImage) => {
    proceedWithAdd(compressedImage);
  });
} else {
  proceedWithAdd();
}


  };

  return (
    <>
      <div className="form-box">
        <h1>הוסף אירוע</h1>
        <select
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        >
          <option selected disabled>
            בחר חודש
          </option>
          {hebrewCalendar.month.map((x, i) => (
            <option value={i}>{x.name}</option>
          ))}
        </select>
        {month ? (
          <select
            onChange={(e) => {
              setDay(e.target.value);
            }}
          >
            <option selected disabled>
              בחר תאריך
            </option>
            {hebrewCalendar.month[month].days.map((x, i) => (
              <option value={i}>{x.name}</option>
            ))}
          </select>
        ) : null}

        <input type="file" accept="image/*" ref={imgRef}></input>

        <select
          onChange={(e) => {
            setText(e.target.value);
          }}
        >
          <option selected disabled>
            בחר אירוע
          </option>
          {events.map((x, i) => (
            <option value={i}>{x.text}</option>
          ))}
        </select>
        {text ? (
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option selected disabled>
              בחר סמל
            </option>
            {events[text].type.map((x, i) => (
              <option value={i}>{x}</option>
            ))}
          </select>
        ) : null}

        <input placeholder="הערות" ref={texteRef}></input>
        <button onClick={add}>Add Event</button>
        <button onClick={() => flag(false)}>ביטול</button>
      </div>
    </>
  );
};
