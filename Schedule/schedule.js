 /***************************************************************
 * This will hold the general functions for the schedule page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DEFINITION

    const scheduleSelTab = document.querySelectorAll(".schedule_selTab");
    const scheduleDateLeftBdr = document.querySelector(".schedule_dateLeftBorder");
    const scheduleDateRightBdr = document.querySelector(".schedule_dateRightBorder");
    const scheduleDateSlider = document.querySelector(".schedule_dateSlider");
    let scheduleDateCard;
    const scheduleGridBox = document.querySelector(".schedule_ctntGrid");
    let boxErrorMargin = 10;
    let isDateSliderDown = false;
    let isDragging = false;
    let isDraggingDist = 10;
    let startX;
    let dateSliderScrollLeft;

// CHANGING THE FILTER

    scheduleSelTab.forEach((tab, i) => 
    {
        tab.addEventListener("click" , () => 
        {
            scheduleSelTab.forEach((currTab) => 
            {
                currTab.classList.remove("active");
            });

            tab.classList.add("active");
        });
    });


// GENERATING THE DATE

    // Function to generate the Struct for each day and insert it into the slider
    function generateScheduleDate() 
    {
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
        const today = new Date();
        const currentDayIndex = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

        // Create the week
        for (let i = 0; i < 7; i++) {
            const weekDay = new Date();
            weekDay.setDate(today.getDate() - currentDayIndex + i); // Offset days based on current day
            
            const dayNum = weekDay.getDate();
            const monthName = weekDay.toLocaleString('default', { month: 'short' });
            
            // Generate the HTML structure for the card
            const card = document.createElement("div");
            card.classList.add("schedule_dateCard");
            
            // Check if this card is for today
            if (i === currentDayIndex) {
                card.classList.add("curr_day"); // Add "curr_day" class for the current day
            }
            
            card.innerHTML = `
                <div class="schedule_dateMinorBdr">
                    <div class="schedule_dateMinorBox">
                        <div class="schedule_dateMinorText">${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${dayNum}</div>
                    </div>
                </div>
                <div class="schedule_dateMajorBdr">
                    <div class="schedule_dateMajorBox">
                        <div class="schedule_dateMajorText">${weekDays[i]}</div>
                    </div>
                </div>
            `;

            // Append to the slider
            scheduleDateSlider.appendChild(card);
        }
        scheduleDateCard = document.querySelectorAll(".schedule_dateCard");
    }

    // Call the function to generate the schedule cards
    generateScheduleDate();


// SLIDER

    // Initialization on page load
     if((scheduleDateSlider.scrollWidth) > (Math.ceil((scheduleDateSlider.clientWidth)) + boxErrorMargin))
    {
        scheduleDateRightBdr.classList.toggle("hide");
    }
    if((Math.ceil(scheduleDateSlider.scrollLeft)) > boxErrorMargin)
    {
        scheduleDateLeftBdr.classList.toggle("hide");
    }

    // Toggling border visibility
    function toggleScheduleBdrVisibility()
    {
        let scrollStart = boxErrorMargin;
        let scrollEnd = scheduleDateSlider.scrollWidth;
        let scrollOffWidth = Math.ceil(scheduleDateSlider.offsetWidth);
        let currScrollLeft = Math.ceil(scheduleDateSlider.scrollLeft);
        let currScroll = Math.ceil((scrollOffWidth + currScrollLeft));

        // Hides Right button
        if(!(((currScroll) >= scrollEnd) || ((currScroll) >= (scrollEnd - boxErrorMargin))))
        {
            scheduleDateRightBdr.classList.remove("hide");
        }
        else
        {
            scheduleDateRightBdr.classList.add("hide");
        }

        // Hides Left button
        if(!(currScrollLeft <= scrollStart))
        {
            scheduleDateLeftBdr.classList.remove("hide");
        }
        else
        {
            scheduleDateLeftBdr.classList.add("hide");
        }
    }
    scheduleDateSlider.addEventListener("scroll" , (e) => 
    {
        toggleScheduleBdrVisibility();
    });

    // Slider dragging
    scheduleDateSlider.addEventListener("mousedown", (e) => 
    {
        isDateSliderDown = true;
        scheduleDateSlider.classList.add("isDateSliderDown");
        startX = e.pageX - scheduleDateSlider.offsetLeft;
        dateSliderScrollLeft = scheduleDateSlider.scrollLeft;
        isDragging = false;
    });

    scheduleDateSlider.addEventListener("mouseleave", () => 
    {
        isDateSliderDown = false;
        scheduleDateSlider.classList.remove("isDateSliderDown");
    });

    scheduleDateSlider.addEventListener("mouseup", () => 
    {
        isDateSliderDown = false;
        scheduleDateSlider.classList.remove("isDateSliderDown");
    });

    scheduleDateSlider.addEventListener("mousemove", (e) => 
    {
        // return if mouse is down
        if (!isDateSliderDown) return;

        e.preventDefault();
        const x = e.pageX - scheduleDateSlider.offsetLeft;
        const scrollSpeed = (x - startX) * 2;
        scheduleDateSlider.scrollLeft = dateSliderScrollLeft - scrollSpeed;

        // Prevent the cards from being clicked while dragging 
        if(((Math.abs(x - startX) > isDraggingDist)))
        {
            isDragging = true;
        }
    });


// CHANGING THE DATE

    scheduleDateCard.forEach((card, i) => 
    {
        card.addEventListener("click" , (e) => 
        {
            if(isDragging)
            {
                e.preventDefault();
                return;
            }
            scheduleDateCard.forEach((currCard) => 
            {
                currCard.classList.remove("curr_day");
            });

            card.classList.add("curr_day");
        });
    });


// INSERTING THE CONTENT (Not sorted)

    for(let i = 0; i < 30; i++)
    {
        const item = searchInventory[i];
        const cardStruct = 
        `
            <div class="schedule_ctntCardBdr">
                <a href="${item.show_link}" class="schedule_ctntCardBox">
                    <div class="schedule_ctntThumbnailBdr">
                        <div class="schedule_ctntThumbnailBox">
                            <img src="${item.show_thumbnail}" alt="Thumnail image of ${item.show_title}" class="schedule_ctntThumbnailImg">
                        </div>
                    </div>
                    <div class="schedule_ctntDetBdr">
                        <div class="schedule_ctntDetBox">
                            <div class="schedule_ctntDetTitleBox">
                                <div class="schedule_ctntDetTitleText">${item.show_title}</div>
                            </div>
                            <div class="schedule_ctntDetEpBox">
                                <p class="schedule_ctntDetEpText">${item.show_aired}</p>
                            </div>
                            <div class="schedule_ctntDetDescBox">
                                <p class="schedule_ctntDetDescText">${item.show_description}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
        scheduleGridBox.insertAdjacentHTML(`beforeend` , cardStruct);
    }


