import { useState } from "react";
import { Calander } from "./Calander";
import { CreateCalander } from "./CreateCalander";
import "./style.css";
import { AddEvent } from "./addEvent";

export const Main = () => {
  const [name, setName] = useState("לוח שנה");
  const [fontColor, setFontColor] = useState("black");
  const [backColor, setBackColor] = useState("#ffffff");
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);

  const [user, setUser] = useState();

  const hebrewCalendar ={
    name: "",
    month: [
      {
        name: "תשרי",
        days: [
          {
            name: "א",
            dayOfWeek: 3,
            events: [{ type: "⚖️", text: "ראש השנה" }],
          },
          {
            name: "ב",
            dayOfWeek: 4,
            events: [{ type: "⚖️", text: "ראש השנה" }],
          },
          {
            name: "ג",
            dayOfWeek: 5,
            events: [{ type: "❌", text: "צום גדליה" }],
          },
          { name: "ד", dayOfWeek: 6, events: [] },
          { name: "ה", dayOfWeek: 7, events: [] },
          { name: "ו", dayOfWeek: 1, events: [] },
          { name: "ז", dayOfWeek: 2, events: [] },
          { name: "ח", dayOfWeek: 3, events: [] },
          {
            name: "ט",
            dayOfWeek: 4,
            events: [{ type: "⏳", text: "ערב יום כיפור" }],
          },
          {
            name: "י",
            dayOfWeek: 5,
            events: [{ type: "✡️", text: "יום כיפור" }],
          },
          { name: "יא", dayOfWeek: 6, events: [] },
          { name: "יב", dayOfWeek: 7, events: [] },
          { name: "יג", dayOfWeek: 1, events: [] },
          {
            name: "יד",
            dayOfWeek: 2,
            events: [{ type: "🎋", text: "ערב סוכות" }],
          },
          { name: "טו", dayOfWeek: 3, events: [{ type: "🎋", text: "סוכות" }] },
          {
            name: "טז",
            dayOfWeek: 4,
            events: [{ type: "🎋", text: 'חוה"מ סוכות' }],
          },
          {
            name: "יז",
            dayOfWeek: 5,
            events: [{ type: "🎋", text: 'חוה"מ סוכות' }],
          },
          {
            name: "יח",
            dayOfWeek: 6,
            events: [{ type: "🎋", text: 'חוה"מ סוכות' }],
          },
          {
            name: "יט",
            dayOfWeek: 7,
            events: [{ type: "🎋", text: 'חוה"מ סוכות' }],
          },
          {
            name: "כ",
            dayOfWeek: 1,
            events: [{ type: "🎋", text: 'סיום חוה"מ' }],
          },
          {
            name: "כא",
            dayOfWeek: 2,
            events: [{ type: "🌀", text: "הושענא רבה" }],
          },
          {
            name: "כב",
            dayOfWeek: 3,
            events: [{ type: "📖", text: "שמחת תורה-שמיני עצרת" }],
          },
          {
            name: "כג",
            dayOfWeek: 4,
            events: [{ type: "⛔", text: "אסרו חג" }],
          },
          { name: "כד", dayOfWeek: 5, events: [] },
          { name: "כה", dayOfWeek: 6, events: [] },
          {
            name: "כו",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          { name: "כז", dayOfWeek: 1, events: [] },
          { name: "כח", dayOfWeek: 2, events: [] },
          { name: "כט", dayOfWeek: 3, events: [] },
          {
            name: "ל",
            dayOfWeek: 4,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
        ],
      },
      {
        name: "חשוון",
        days: [
          {
            name: "א",
            dayOfWeek: 5,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
          { name: "ב", dayOfWeek: 6, events: [] },
          { name: "ג", dayOfWeek: 7, events: [] },
          { name: "ד", dayOfWeek: 1, events: [] },
          { name: "ה", dayOfWeek: 2, events: [] },
          { name: "ו", dayOfWeek: 3, events: [] },
          {
            name: "ז",
            dayOfWeek: 4,
            events: [{ type: "☔", text: "מתחילים לבקש על הגשם" }],
          },
          { name: "ח", dayOfWeek: 5, events: [] },
          { name: "ט", dayOfWeek: 6, events: [] },
          { name: "י", dayOfWeek: 7, events: [] },
          { name: "יא", dayOfWeek: 1, events: [] },
          { name: "יב", dayOfWeek: 2, events: [] },
          { name: "יג", dayOfWeek: 3, events: [] },
          { name: "יד", dayOfWeek: 4, events: [] },
          { name: "טו", dayOfWeek: 5, events: [] },
          { name: "טז", dayOfWeek: 6, events: [] },
          { name: "יז", dayOfWeek: 7, events: [] },
          { name: "יח", dayOfWeek: 1, events: [] },
          { name: "יט", dayOfWeek: 2, events: [] },
          { name: "כ", dayOfWeek: 3, events: [] },
          { name: "כא", dayOfWeek: 4, events: [] },
          { name: "כב", dayOfWeek: 5, events: [] },
          { name: "כג", dayOfWeek: 6, events: [] },
          {
            name: "כד",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          { name: "כה", dayOfWeek: 1, events: [] },
          { name: "כו", dayOfWeek: 2, events: [] },
          { name: "כז", dayOfWeek: 3, events: [] },
          { name: "כח", dayOfWeek: 4, events: [] },
          { name: "כט", dayOfWeek: 5, events: [] },
        ],
      },
      {
        name: "כסלו",
        days: [
          {
            name: "א",
            dayOfWeek: 6,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
          { name: "ב", dayOfWeek: 7, events: [] },
          { name: "ג", dayOfWeek: 1, events: [] },
          { name: "ד", dayOfWeek: 2, events: [] },
          { name: "ה", dayOfWeek: 3, events: [] },
          { name: "ו", dayOfWeek: 4, events: [] },
          { name: "ז", dayOfWeek: 5, events: [] },
          { name: "ח", dayOfWeek: 6, events: [] },
          { name: "ט", dayOfWeek: 7, events: [] },
          { name: "י", dayOfWeek: 1, events: [] },
          { name: "יא", dayOfWeek: 2, events: [] },
          { name: "יב", dayOfWeek: 3, events: [] },
          { name: "יג", dayOfWeek: 4, events: [] },
          { name: "יד", dayOfWeek: 5, events: [] },
          { name: "טו", dayOfWeek: 6, events: [] },
          { name: "טז", dayOfWeek: 7, events: [] },
          { name: "יז", dayOfWeek: 1, events: [] },
          { name: "יח", dayOfWeek: 2, events: [] },
          { name: "יט", dayOfWeek: 3, events: [] },
          { name: "כ", dayOfWeek: 4, events: [] },
          { name: "כא", dayOfWeek: 5, events: [] },
          { name: "כב", dayOfWeek: 6, events: [] },
          {
            name: "כג",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          { name: "כד", dayOfWeek: 1, events: [] },
          {
            name: "כה",
            dayOfWeek: 2,
            events: [{ type: "🕎", text: "חנוכה - נר ראשון" }],
          },
          {
            name: "כו",
            dayOfWeek: 3,
            events: [{ type: "🕎", text: "חנוכה - נר שני" }],
          },
          {
            name: "כז",
            dayOfWeek: 4,
            events: [{ type: "🕎", text: "חנוכה - נר שלישי" }],
          },
          {
            name: "כח",
            dayOfWeek: 5,
            events: [{ type: "🕎", text: "חנוכה - נר רביעי" }],
          },
          {
            name: "כט",
            dayOfWeek: 6,
            events: [{ type: "🕎", text: "חנוכה - נר חמישי" }],
          },
          {
            name: "ל",
            dayOfWeek: 7,
            events: [
              { type: "🕎", text: "חנוכה - נר שישי" },
              { type: "🌙", text: "ראש חודש" },
            ],
          },
        ],
      },
      {
        name: "טבת",
        days: [
          {
            name: "א",
            dayOfWeek: 1,
            events: [
              { type: "🕎", text: " חנוכה - נר שביעי" },
              { type: "🌙", text: "ראש חודש" },
            ],
          },
          {
            name: "ב",
            dayOfWeek: 2,
            events: [{ type: "🕎", text: "חנוכה - זאת חנוכה" }],
          },
          { name: "ג", dayOfWeek: 3, events: [] },
          { name: "ד", dayOfWeek: 4, events: [] },
          { name: "ה", dayOfWeek: 5, events: [] },
          { name: "ו", dayOfWeek: 6, events: [] },
          { name: "ז", dayOfWeek: 7, events: [] },
          { name: "ח", dayOfWeek: 1, events: [] },
          { name: "ט", dayOfWeek: 2, events: [] },
          {
            name: "י",
            dayOfWeek: 1,
            events: [{ type: "❌", text: "צום עשרה בטבת " }],
          },
          { name: "יא", dayOfWeek: 4, events: [] },
          { name: "יב", dayOfWeek: 5, events: [] },
          { name: "יג", dayOfWeek: 6, events: [] },
          { name: "יד", dayOfWeek: 7, events: [] },
          { name: "טו", dayOfWeek: 1, events: [] },
          { name: "טז", dayOfWeek: 2, events: [] },
          { name: "יז", dayOfWeek: 3, events: [] },
          { name: "יח", dayOfWeek: 4, events: [] },
          { name: "יט", dayOfWeek: 5, events: [] },
          { name: "כ", dayOfWeek: 6, events: [] },
          { name: "כא", dayOfWeek: 7, events: [] },
          { name: "כב", dayOfWeek: 1, events: [] },
          { name: "כג", dayOfWeek: 2, events: [] },
          { name: "כד", dayOfWeek: 3, events: [] },
          { name: "כה", dayOfWeek: 4, events: [] },
          { name: "כו", dayOfWeek: 5, events: [] },
          { name: "כז", dayOfWeek: 6, events: [] },
          {
            name: "כח",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          { name: "כט", dayOfWeek: 1, events: [] },
        ],
      },
      {
        name: "שבט",
        days: [
          {
            name: "א",
            dayOfWeek: 2,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
          { name: "ב", dayOfWeek: 3, events: [] },
          { name: "ג", dayOfWeek: 4, events: [] },
          { name: "ד", dayOfWeek: 5, events: [] },
          { name: "ה", dayOfWeek: 6, events: [] },
          { name: "ו", dayOfWeek: 7, events: [] },
          { name: "ז", dayOfWeek: 1, events: [] },
          { name: "ח", dayOfWeek: 2, events: [] },
          { name: "ט", dayOfWeek: 3, events: [] },
          { name: "י", dayOfWeek: 4, events: [] },
          { name: "יא", dayOfWeek: 5, events: [] },
          { name: "יב", dayOfWeek: 6, events: [] },
          { name: "יג", dayOfWeek: 7, events: [] },
          { name: "יד", dayOfWeek: 1, events: [] },
          {
            name: "טו",
            dayOfWeek: 2,
            events: [{ type: "🌳", text: "טו בשבט" }],
          },
          { name: "טז", dayOfWeek: 3, events: [] },
          { name: "יז", dayOfWeek: 4, events: [] },
          { name: "יח", dayOfWeek: 5, events: [] },
          { name: "יט", dayOfWeek: 6, events: [] },
          { name: "כ", dayOfWeek: 7, events: [] },
          { name: "כא", dayOfWeek: 1, events: [] },
          { name: "כב", dayOfWeek: 2, events: [] },
          { name: "כג", dayOfWeek: 3, events: [] },
          { name: "כד", dayOfWeek: 4, events: [] },
          { name: "כה", dayOfWeek: 5, events: [] },
          { name: "כו", dayOfWeek: 6, events: [] },
          {
            name: "כז",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          { name: "כח", dayOfWeek: 1, events: [] },
          { name: "כט", dayOfWeek: 2, events: [] },
          {
            name: "ל",
            dayOfWeek: 3,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
        ],
      },
      {
        name: "אדר",
        days: [
          {
            name: "א",
            dayOfWeek: 4,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
          { name: "ב", dayOfWeek: 5, events: [] },
          { name: "ג", dayOfWeek: 6, events: [] },
          { name: "ד", dayOfWeek: 7, events: [] },
          { name: "ה", dayOfWeek: 1, events: [] },
          { name: "ו", dayOfWeek: 2, events: [] },
          { name: "ז", dayOfWeek: 3, events: [] },
          { name: "ח", dayOfWeek: 4, events: [] },
          { name: "ט", dayOfWeek: 5, events: [] },
          { name: "י", dayOfWeek: 6, events: [] },
          { name: "יא", dayOfWeek: 7, events: [] },
          { name: "יב", dayOfWeek: 1, events: [] },
          { name: "יג", dayOfWeek: 2, events: [] },
          { name: "יד", dayOfWeek: 3, events: [{ type: "🎭", text: "פורים" }] },
          {
            name: "טו",
            dayOfWeek: 4,
            events: [{ type: "🎭", text: "שושן פורים" }],
          },
          { name: "טז", dayOfWeek: 5, events: [] },
          { name: "יז", dayOfWeek: 6, events: [] },
          { name: "יח", dayOfWeek: 7, events: [] },
          { name: "יט", dayOfWeek: 1, events: [] },
          { name: "כ", dayOfWeek: 2, events: [] },
          { name: "כא", dayOfWeek: 3, events: [] },
          { name: "כב", dayOfWeek: 4, events: [] },
          { name: "כג", dayOfWeek: 5, events: [] },
          { name: "כד", dayOfWeek: 6, events: [] },
          {
            name: "כה",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          { name: "כו", dayOfWeek: 1, events: [] },
          { name: "כז", dayOfWeek: 2, events: [] },
          { name: "כח", dayOfWeek: 3, events: [] },
          { name: "כט", dayOfWeek: 4, events: [] },
        ],
      },

      {
        name: "ניסן",
        days: [
          {
            name: "א",
            dayOfWeek: 5,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
          { name: "ב", dayOfWeek: 6, events: [] },
          { name: "ג", dayOfWeek: 7, events: [] },
          { name: "ד", dayOfWeek: 1, events: [] },
          { name: "ה", dayOfWeek: 2, events: [] },
          { name: "ו", dayOfWeek: 3, events: [] },
          { name: "ז", dayOfWeek: 4, events: [] },
          { name: "ח", dayOfWeek: 5, events: [] },
          { name: "ט", dayOfWeek: 6, events: [] },
          { name: "י", dayOfWeek: 7, events: [] },
          { name: "יא", dayOfWeek: 1, events: [] },
          { name: "יב", dayOfWeek: 2, events: [] },
          { name: "יג", dayOfWeek: 3, events: [] },
          {
            name: "יד",
            dayOfWeek: 4,
            events: [{ type: "🧹", text: "ערב פסח" }],
          },
          {
            name: "טו",
            dayOfWeek: 5,
            events: [{ type: "🌙", text: "ליל הסדר" }],
          },
          {
            name: "טז",
            dayOfWeek: 6,
            events: [
              { type: "☀️", text: "חול המועד פסח" },
              { type: "🌾", text: "א בעומר" },
            ],
          },
          {
            name: "יז",
            dayOfWeek: 7,
            events: [
              { type: "☀️", text: "חול המועד פסח" },
              { type: "🌾", text: "ב בעומר" },
            ],
          },
          {
            name: "יח",
            dayOfWeek: 1,
            events: [
              { type: "☀️", text: "חול המועד פסח" },
              { type: "🌾", text: "ג בעומר" },
            ],
          },
          {
            name: "יט",
            dayOfWeek: 2,
            events: [
              { type: "☀️", text: "חול המועד פסח" },
              { type: "🌾", text: "ד בעומר" },
            ],
          },
          {
            name: "כ",
            dayOfWeek: 3,
            events: [
              { type: "☀️", text: "חול המועד פסח" },
              { type: "🌾", text: "ה בעומר" },
            ],
          },
          {
            name: "כא",
            dayOfWeek: 4,
            events: [
              { type: "🌸", text: "שביעי של פסח" },
              { type: "🌾", text: "ו בעומר" },
            ],
          },
          {
            name: "כב",
            dayOfWeek: 5,
            events: [
              { type: "⛔", text: "אסרו חג" },
              { type: "🌾", text: "ז בעומר" },
            ],
          },
          {
            name: "כג",
            dayOfWeek: 6,
            events: [{ type: "🌾", text: "ח בעומר" }],
          },
          {
            name: "כד",
            dayOfWeek: 7,
            events: [
              { type: "🕯️", text: "שבת מברכים" },
              { type: "🌾", text: "ט בעומר" },
            ],
          },
          {
            name: "כה",
            dayOfWeek: 1,
            events: [{ type: "🌾", text: "י בעומר" }],
          },
          {
            name: "כו",
            dayOfWeek: 2,
            events: [{ type: "🌾", text: "יא בעומר" }],
          },
          {
            name: "כז",
            dayOfWeek: 3,
            events: [{ type: "🌾", text: "יב בעומר" }],
          },
          {
            name: "כח",
            dayOfWeek: 4,
            events: [{ type: "🌾", text: "יג בעומר" }],
          },
          {
            name: "כט",
            dayOfWeek: 5,
            events: [{ type: "🌾", text: "יד בעומר" }],
          },
          {
            name: "ל",
            dayOfWeek: 6,
            events: [
              { type: "🌙", text: "ראש חודש" },
              { type: "🌾", text: "טו בעומר" },
            ],
          },
        ],
      },
      {
        name: "אייר",
        days: [
          {
            name: "א",
            dayOfWeek: 7,
            events: [
              { type: "🌙", text: "ראש חודש" },
              { type: "🌾", text: "טז בעומר" },
            ],
          },
          {
            name: "ב",
            dayOfWeek: 1,
            events: [{ type: "🌾", text: "יז בעומר" }],
          },
          {
            name: "ג",
            dayOfWeek: 2,
            events: [{ type: "🌾", text: "יח בעומר" }],
          },
          {
            name: "ד",
            dayOfWeek: 3,
            events: [{ type: "🌾", text: "יט בעומר" }],
          },
          {
            name: "ה",
            dayOfWeek: 4,
            events: [
              { type: "🏳️", text: "ה' באייר - יום העצמאות " },
              { type: "🌾", text: "כ בעומר" },
            ],
          },
          {
            name: "ו",
            dayOfWeek: 5,
            events: [{ type: "🌾", text: "כא בעומר" }],
          },
          {
            name: "ז",
            dayOfWeek: 6,
            events: [{ type: "🌾", text: "כב בעומר" }],
          },
          {
            name: "ח",
            dayOfWeek: 7,
            events: [{ type: "🌾", text: "כג בעומר" }],
          },
          {
            name: "ט",
            dayOfWeek: 1,
            events: [{ type: "🌾", text: "כד בעומר" }],
          },
          {
            name: "י",
            dayOfWeek: 2,
            events: [{ type: "🌾", text: "כה בעומר" }],
          },
          {
            name: "יא",
            dayOfWeek: 3,
            events: [{ type: "🌾", text: "כו בעומר" }],
          },
          {
            name: "יב",
            dayOfWeek: 4,
            events: [{ type: "🌾", text: "כז בעומר" }],
          },
          {
            name: "יג",
            dayOfWeek: 5,
            events: [{ type: "🌾", text: "כח בעומר" }],
          },
          {
            name: "יד",
            dayOfWeek: 6,
            events: [
              { type: "🌾", text: "כט בעומר" },
              { type: "🌾", text: "פסח שני" },
            ],
          },
          {
            name: "טו",
            dayOfWeek: 7,
            events: [{ type: "🌾", text: "ל בעומר" }],
          },
          {
            name: "טז",
            dayOfWeek: 1,
            events: [{ type: "🌾", text: "לא בעומר" }],
          },
          {
            name: "יז",
            dayOfWeek: 2,
            events: [{ type: "🌾", text: "לב בעומר" }],
          },
          {
            name: "יח",
            dayOfWeek: 3,
            events: [{ type: "🔥", text: "לג בעומר " }],
          },
          {
            name: "יט",
            dayOfWeek: 4,
            events: [{ type: "🌾", text: "לד בעומר" }],
          },
          {
            name: "כ",
            dayOfWeek: 5,
            events: [{ type: "🌾", text: "לה בעומר" }],
          },
          {
            name: "כא",
            dayOfWeek: 6,
            events: [{ type: "🌾", text: "לו בעומר" }],
          },
          {
            name: "כב",
            dayOfWeek: 7,
            events: [{ type: "🌾", text: "לז בעומר" }],
          },
          {
            name: "כג",
            dayOfWeek: 1,
            events: [{ type: "🌾", text: "לח בעומר" }],
          },
          {
            name: "כד",
            dayOfWeek: 2,
            events: [{ type: "🌾", text: "לט בעומר" }],
          },
          {
            name: "כה",
            dayOfWeek: 3,
            events: [{ type: "🌾", text: "מ בעומר" }],
          },
          {
            name: "כו",
            dayOfWeek: 4,
            events: [{ type: "🌾", text: "מא בעומר" }],
          },
          {
            name: "כז",
            dayOfWeek: 5,
            events: [{ type: "🌾", text: "מב בעומר" }],
          },
          {
            name: "כח",
            dayOfWeek: 6,
            events: [{ type: "🌾", text: "מג בעומר" }],
          },
          {
            name: "כט",
            dayOfWeek: 7,
            events: [
              { type: "🌾", text: "מד בעומר" },
              { type: "🕯️", text: "שבת מברכים" },
            ],
          },
        ],
      },
      {
        name: "סיוון",
        days: [
          {
            name: "א",
            dayOfWeek: 1,
            events: [
              { type: "🌾", text: "מה בעומר" },
              { type: "🌙", text: "ראש חודש" },
            ],
          },
          {
            name: "ב",
            dayOfWeek: 2,
            events: [{ type: "🌾", text: "מו בעומר" }],
          },
          {
            name: "ג",
            dayOfWeek: 3,
            events: [{ type: "🌾", text: "מז בעומר" }],
          },
          {
            name: "ד",
            dayOfWeek: 4,
            events: [{ type: "🌾", text: "מח בעומר" }],
          },
          {
            name: "ה",
            dayOfWeek: 5,
            events: [{ type: "🌾", text: "מט בעומר" }],
          },
          { name: "ו", dayOfWeek: 6, events: [{ type: "📜", text: "שבועות" }] },
          {
            name: "ז",
            dayOfWeek: 7,
            events: [{ type: "⛔", text: "אסרו חג" }],
          },
          { name: "ח", dayOfWeek: 1, events: [] },
          { name: "ט", dayOfWeek: 2, events: [] },
          { name: "י", dayOfWeek: 3, events: [] },
          { name: "יא", dayOfWeek: 4, events: [] },
          { name: "יב", dayOfWeek: 5, events: [] },
          { name: "יג", dayOfWeek: 6, events: [] },
          { name: "יד", dayOfWeek: 7, events: [] },
          { name: "טו", dayOfWeek: 1, events: [] },
          { name: "טז", dayOfWeek: 2, events: [] },
          { name: "יז", dayOfWeek: 3, events: [] },
          { name: "יח", dayOfWeek: 4, events: [] },
          { name: "יט", dayOfWeek: 5, events: [] },
          { name: "כ", dayOfWeek: 6, events: [] },
          { name: "כא", dayOfWeek: 7, events: [] },
          { name: "כב", dayOfWeek: 1, events: [] },
          { name: "כג", dayOfWeek: 2, events: [] },
          { name: "כד", dayOfWeek: 3, events: [] },
          { name: "כה", dayOfWeek: 4, events: [] },
          { name: "כו", dayOfWeek: 5, events: [] },
          { name: "כז", dayOfWeek: 6, events: [] },
          {
            name: "כח",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          { name: "כט", dayOfWeek: 1, events: [] },
          {
            name: "ל",
            dayOfWeek: 2,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
        ],
      },
      {
        name: "תמוז",
        days: [
          {
            name: "א",
            dayOfWeek: 3,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
          { name: "ב", dayOfWeek: 4, events: [] },
          { name: "ג", dayOfWeek: 5, events: [] },
          { name: "ד", dayOfWeek: 6, events: [] },
          { name: "ה", dayOfWeek: 7, events: [] },
          { name: "ו", dayOfWeek: 1, events: [] },
          { name: "ז", dayOfWeek: 2, events: [] },
          { name: "ח", dayOfWeek: 3, events: [] },
          { name: "ט", dayOfWeek: 4, events: [] },
          { name: "י", dayOfWeek: 5, events: [] },
          { name: "יא", dayOfWeek: 6, events: [] },
          { name: "יב", dayOfWeek: 7, events: [] },
          { name: "יג", dayOfWeek: 1, events: [] },
          { name: "יד", dayOfWeek: 2, events: [] },
          { name: "טו", dayOfWeek: 3, events: [] },
          { name: "טז", dayOfWeek: 4, events: [] },
          {
            name: "יז",
            dayOfWeek: 5,
            events: [{ type: "❌", text: "צום יז בתמוז" }],
          },
          { name: "יח", dayOfWeek: 6, events: [] },
          { name: "יט", dayOfWeek: 7, events: [] },
          { name: "כ", dayOfWeek: 1, events: [] },
          { name: "כא", dayOfWeek: 2, events: [] },
          { name: "כב", dayOfWeek: 3, events: [] },
          { name: "כג", dayOfWeek: 4, events: [] },
          { name: "כד", dayOfWeek: 5, events: [] },
          { name: "כה", dayOfWeek: 6, events: [] },
          {
            name: "כו",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          { name: "כז", dayOfWeek: 1, events: [] },
          { name: "כח", dayOfWeek: 2, events: [] },
          { name: "כט", dayOfWeek: 3, events: [] },
        ],
      },
      {
        name: "אב",
        days: [
          {
            name: "א",
            dayOfWeek: 4,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
          { name: "ב", dayOfWeek: 5, events: [] },
          { name: "ג", dayOfWeek: 6, events: [] },
          { name: "ד", dayOfWeek: 7, events: [] },
          { name: "ה", dayOfWeek: 1, events: [] },
          { name: "ו", dayOfWeek: 2, events: [] },
          { name: "ז", dayOfWeek: 3, events: [] },
          { name: "ח", dayOfWeek: 4, events: [] },
          {
            name: "ט",
            dayOfWeek: 5,
            events: [{ type: "❌", text: "תשעה באב" }],
          },
          { name: "י", dayOfWeek: 6, events: [] },
          { name: "יא", dayOfWeek: 7, events: [] },
          { name: "יב", dayOfWeek: 1, events: [] },
          { name: "יג", dayOfWeek: 2, events: [] },
          { name: "יד", dayOfWeek: 3, events: [] },
          { name: "טו", dayOfWeek: 4, events: [] },
          { name: "טז", dayOfWeek: 5, events: [] },
          { name: "יז", dayOfWeek: 6, events: [] },
          { name: "יח", dayOfWeek: 7, events: [] },
          { name: "יט", dayOfWeek: 1, events: [] },
          { name: "כ", dayOfWeek: 2, events: [] },
          { name: "כא", dayOfWeek: 3, events: [] },
          { name: "כב", dayOfWeek: 4, events: [] },
          { name: "כג", dayOfWeek: 5, events: [] },
          { name: "כד", dayOfWeek: 6, events: [] },
          {
            name: "כה",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          { name: "כו", dayOfWeek: 1, events: [] },
          { name: "כז", dayOfWeek: 2, events: [] },
          { name: "כח", dayOfWeek: 3, events: [] },
          { name: "כט", dayOfWeek: 4, events: [] },
          {
            name: "ל",
            dayOfWeek: 5,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
        ],
      },
      {
        name: "אלול",
        days: [
          {
            name: "א",
            dayOfWeek: 6,
            events: [{ type: "🌙", text: "ראש חודש" }],
          },
          { name: "ב", dayOfWeek: 7, events: [] },
          { name: "ג", dayOfWeek: 1, events: [] },
          { name: "ד", dayOfWeek: 2, events: [] },
          { name: "ה", dayOfWeek: 3, events: [] },
          { name: "ו", dayOfWeek: 4, events: [] },
          { name: "ז", dayOfWeek: 5, events: [] },
          { name: "ח", dayOfWeek: 6, events: [] },
          { name: "ט", dayOfWeek: 7, events: [] },
          { name: "י", dayOfWeek: 1, events: [] },
          { name: "יא", dayOfWeek: 2, events: [] },
          { name: "יב", dayOfWeek: 3, events: [] },
          { name: "יג", dayOfWeek: 4, events: [] },
          { name: "יד", dayOfWeek: 5, events: [] },
          { name: "טו", dayOfWeek: 6, events: [] },
          { name: "טז", dayOfWeek: 7, events: [] },
          { name: "יז", dayOfWeek: 1, events: [] },
          { name: "יח", dayOfWeek: 2, events: [] },
          { name: "יט", dayOfWeek: 3, events: [] },
          { name: "כ", dayOfWeek: 4, events: [] },
          { name: "כא", dayOfWeek: 5, events: [] },
          { name: "כב", dayOfWeek: 6, events: [] },
          {
            name: "כג",
            dayOfWeek: 7,
            events: [{ type: "🕯️", text: "שבת מברכים" }],
          },
          {
            name: "כד",
            dayOfWeek: 1,
            events: [{ type: "📯", text: "סליחות" }],
          },
          {
            name: "כה",
            dayOfWeek: 2,
            events: [{ type: "📯", text: "סליחות" }],
          },
          {
            name: "כו",
            dayOfWeek: 3,
            events: [{ type: "📯", text: "סליחות" }],
          },
          {
            name: "כז",
            dayOfWeek: 4,
            events: [{ type: "📯", text: "סליחות" }],
          },
          {
            name: "כח",
            dayOfWeek: 5,
            events: [{ type: "📯", text: "סליחות" }],
          },
          {
            name: "כט",
            dayOfWeek: 6,
            events: [{ type: "📯", text: "סליחות" }],
          },
        ],
      },
    ],
  };

  // useEffect(() => {
  //   window.localStorage.setItem("allCalender", "[]");
  // }, []);

  const [list, setList] = useState(
    JSON.parse(window.localStorage.getItem("allCalender")) || []
  );
  const save = () => {
  const list1 = JSON.parse(window.localStorage.getItem("allCalender")) || [];

    list1.push({ name, hebrewCalendar, backColor, fontColor });
    window.localStorage.setItem("allCalender", JSON.stringify(list1));
    setList(list1)
    setUser(list1.length-1 );
    setFlag(false);
  };
  return (
    <> <div className="main-container">
      <div className="select-button-row">
      <select
        onChange={(e) => {
          setUser(e.target.value);
        }}
      >
        <option selected disabled>
          בחר לוח שנה
        </option>
        {list.map((x, i) => (
          <option value={i}>{x.name}</option>
        ))}
      </select>
      <button
    onClick={() => {
      setFlag(!flag);
    }}
  >
    ליצירת לוח חדש {flag ? "−" : "+"}
  </button></div>
      {flag &&
          <CreateCalander
            name={setName}
            fontColor={setFontColor}
            backColor={setBackColor}
            save={save}

          ></CreateCalander>
        
      }</div>

      {flag1 && (
        <AddEvent
            list={list}
            user={user}
            flag={setFlag1}
        ></AddEvent>
      )}
      {user !== undefined  && !flag1 && (
        <>
          
          <Calander user={user} calander={list[user]}></Calander>
          <button
            onClick={() => {
              setFlag1(true);
            }}
          >
            להוספת אירוע +
          </button>
        </>
      )}
    </>
  );
};
