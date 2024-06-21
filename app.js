import { details } from "./data/appdata.js";

const currentDate = new Date();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const currentMonth = monthNames[currentDate.getMonth()];
const currentDay = String(currentDate.getDate()).padStart(2, "0");

let birthdayHtml = '';

details.forEach((detail) => {
    if (detail.month === currentMonth && detail.date === currentDay) {
        birthdayHtml += `
            <div class="birthday-form">
                <div class="date-container">
                    <div class="month js-month">${detail.month}</div>
                    <div class="day js-date">${detail.date}</div>
                </div>
                <div class="image">
                    <img src="${detail.picture}" alt="" srcset="" />
                </div>
                <div class="name js-name">${detail.name}</div>
                <div class="wish">
                    <p>
                        May your academic journey be as exhilarating as a well-optimized
                        algorithm. May you debug life’s challenges with the precision of a
                        seasoned coder. Here’s to compiling dreams, linking knowledge, and
                        executing success! 🌟🎂📚
                    </p>
                </div>
            </div>
        `;
    }
});

document.querySelector('.form').innerHTML = birthdayHtml;
