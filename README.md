# Calendar Project

פרויקט זה נבנה ב־React ומציג לוח שנה אינטראקטיבי בעברית.  
המשתמש יכול להוסיף אירועים, לצפות בהם ולנהל את הימים בחודש בצורה נוחה.

## Features

- הצגת חודשים בעברית
- אפשרות להוסיף אירועים לכל יום
- ניהול ותצוגת אירועים קיימים
- ממשק משתמש ידידותי ואינטראקטיבי

## Installation & Usage

1. התקנת התלויות:
```bash
npm install
להריץ את הפרויקט בסביבת פיתוח:

bash
Copy code
npm start
הפרויקט ירוץ בדרך כלל בכתובת http://localhost:3000.

Example Usage
הוספת אירוע חדש
לחצו על היום שבו רוצים להוסיף אירוע.

הזינו את שם האירוע ולחצו על "Add Event".

האירוע יופיע מיד בלוח השנה.

צפייה באירועים קיימים
כל יום עם אירועים יוצג עם סימון קטן.

לחיצה על היום תציג את כל האירועים שהתווספו.

Project Structure
src/project/Calander.jsx - רכיב ראשי של לוח השנה

src/project/CreateCalander.jsx - רכיב ליצירת לוח שנה

src/project/addEvent.jsx - רכיב להוספת אירועים

src/project/style.css - קובץ CSS עם עיצוב

Contributing
ניתן להציע שיפורים, לתקן באגים או להוסיף תכונות חדשות על ידי יצירת Pull Request.

License
MIT License
