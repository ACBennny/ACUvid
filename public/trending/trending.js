
/***************************************************************
 * This will hold the code for the Trending page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    function launchTrendingPage()
    {
        let catalogHTML = 
        `
            <div class="trendingBase">
                <div class="trendingBdr">
                    <div class="trendingSiteNameBdr">
                        <div class="trendingSiteNameBox">
                            <div class="trendingSiteNameTop">Trending</div>
                            <p class="trendingSiteNameBtm">Discover New and Trending Shows</p>
                        </div>
                    </div>
                    <div class="trendingBox"></div>
                </div>
            </div>
        `;
        documentCtnt.insertAdjacentHTML(`afterbegin` , catalogHTML);

        
        // Update Navbar active states



        function shuffleArray(array) 
        {
            for (let i = array.length - 1; i > 0; i--) 
            {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function createTrendingCardHTML(item) 
        {
            return `
                <div class="trendingCardBdr">
                    <a href="${item.show_link}" title="Watch ${item.show_title}" class="trendingCardBox">
                        <div class="trendingImgBdr">
                            <div class="trendingImgBox">
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                        src="${item.show_foreground}" alt="Thumbnail image of ${item.show_title}" class="trendingImg"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="trendingDetBdr">
                            <div class="trendingDetBox">
                                <div class="trendingDetTitleBdr">
                                    <div class="trendingDetTitleBox">
                                        <div class="trendingDetTitleText">${item.show_title}</div>
                                    </div>
                                </div>
                                <div class="trendingDetFeatureBdr">
                                    <div class="trendingDetFeatureBox">
                                        <div class="trendingDetFeatureCard">
                                            <div class="trendingDetFeatureCard_Top">Type</div>
                                            <div class="trendingDetFeatureCard_Btm">${item.show_type}</div>
                                        </div>
                                        <div class="trendingDetFeatureCard">
                                            <div class="trendingDetFeatureCard_Top">Score</div>
                                            <div class="trendingDetFeatureCard_Btm">${item.show_scores}</div>
                                        </div>
                                        <div class="trendingDetFeatureCard">
                                            <div class="trendingDetFeatureCard_Top">Year</div>
                                            <div class="trendingDetFeatureCard_Btm">${item.show_year}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="trendingDetAboutBdr">
                                    <div class="trendingDetAboutBox">
                                        <p class="trendingDetAboutText">${item.show_description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }

        // Insert
        const trendingBox = document.querySelector(".trendingBox");
        // const shuffledInventory = shuffleArray([...searchInventory]);
        // const selectedItems = shuffledInventory.slice(0, 25);
        
        // selectedItems.forEach(item => 
        // {
        //     trendingBox.insertAdjacentHTML('beforeend', createTrendingCardHTML(item));
        // });

        const theFirstTrendingCard = document.querySelector(".theFirstTrendingCard");
        for(let i = 0; i < 30; i++)
        {
            const item = searchInventory[i];
            trendingBox.insertAdjacentHTML('beforeend', createTrendingCardHTML(item));
        }
    }








