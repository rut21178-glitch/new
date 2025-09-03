import { useState } from "react";

export const Calander = ({ user }) => {
  const [list, setList] = useState(
    JSON.parse(window.localStorage.getItem("allCalender")) || []
  );
  const { name, fontColor, backColor, hebrewCalendar } = list[user];
  const [month, setMonth] = useState(0);
  const m = hebrewCalendar.month[month];

  const daysOfWeek = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
  const remove = (iDay, i) => {
    const newList = [...list];
    newList[user].hebrewCalendar.month[month].days[iDay].events.splice(i, 1);
    setList(newList);
    window.localStorage.setItem("allCalender", JSON.stringify(newList));
  };

  return (
    <>
      <h1 style={{ color: fontColor }}>{name}</h1>
      <h1>לוח שנה תשפ"ו</h1>
      <div>
        {hebrewCalendar.month.map((m1, i) => (
          <button
            value={i}
            onClick={(e) => {
              setMonth(e.target.value);
            }}
            style={{ backgroundColor: backColor }}
          >
            {m1.name}
          </button>
        ))}
      </div>

      <div className="hebrewCalender">
        <div className="month">
          <h1 style={{ backgroundColor: backColor }}>{m.name}</h1>

          {daysOfWeek.map((t, i) => (
            <h2>יום {t}</h2>
          ))}

          {Array.from({ length: m.days[0].dayOfWeek - 1 }, () => {
            return <div className="day empty"></div>;
          })}
          {m.days.map((d, iDay) => {
            return (
              <>
                <div
                  className="day"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundImage: d.events[d.events.length - 1]?.img
                      ? `url(${d.events[d.events.length - 1].img})`
                      : "none",
                    color: fontColor,
                  }}
                >
                  <h4>
                    {d.name} {m.name}
                  </h4>
                  <div className="events-container">
                    {d.events.map((e, i) => (
                      <div
                        className="event"
                        style={{
                          backgroundColor: backColor,
                          color: e.color,
                          ...(e.img && { opacity: "0.5" }),
                        }}
                      >
                        <h6 style={{ margin: 0 }}>
                          {e.type} {e.text}
                        </h6>
                        <span onClick={() => remove(iDay, i)}> - </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })}
          {Array.from(
            { length: 7 - m.days[m.days.length - 1].dayOfWeek },
            () => {
              return <div className="day empty"></div>;
            }
          )}
        </div>
      </div>
      <p>©️ כל הזכויות שמורות לרותי הולצמן ושרי פוקס</p>
    </>
  );
};
